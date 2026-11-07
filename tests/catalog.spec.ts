import { expect, test } from "@playwright/test";

const categories = [
  ["Buttons", "buttons", "Magnetic Button"],
  ["Cards", "cards", "Spotlight Card"],
  ["Forms", "forms", "Email Input"],
  ["Feedback", "feedback", "Toast Message"],
  ["Navigation", "navigation", "Animated Tabs"],
  ["Interactive", "interactive", "Appreciation Button"],
  ["Physics", "physics", "Spring Slider"],
  ["Data Display", "data", "Animated Counter"],
];

test("every category opens its actual components", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  for (const [name, path, component] of categories) {
    await page.getByRole("link", { name: `Explore ${name}: 2 components` }).click();
    await expect(page).toHaveURL(`/components/${path}`);
    await expect(page.getByRole("heading", { name: component })).toBeVisible();
    await expect(page.locator(".component-card")).toHaveCount(2);
    await page.goBack();
  }
  expect(errors).toEqual([]);
});

test("source is viewable and copies the complete component", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/components/buttons");
  const card = page.locator(".component-card").filter({ has: page.getByRole("heading", { name: "Magnetic Button" }) });
  await card.getByRole("button", { name: "Code", exact: true }).click();
  await expect(card.locator("pre")).toContainText("export default function MagneticButton");
  await card.getByRole("button", { name: "Copy Magnetic Button source code" }).click();
  await expect(card.getByText("Copied", { exact: true })).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain("export default function MagneticButton");
  await card.getByRole("button", { name: "Preview", exact: true }).click();
  await card.getByRole("button", { name: "Explore the future" }).click();
  await expect(card.getByRole("button", { name: "Nice click!" })).toBeVisible();
});

test("search filters the library and can be cleared", async ({ page }) => {
  await page.goto("/components");
  const search = page.getByRole("searchbox", { name: "Search components" });
  await search.fill("spring");
  await expect(page.getByRole("heading", { name: "Spring Slider" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Magnetic Button" })).toHaveCount(0);
  await search.fill("does-not-exist");
  await expect(page.getByText("No components found")).toBeVisible();
  await page.getByRole("button", { name: "Clear search" }).first().click();
  await expect(page.locator(".component-card")).toHaveCount(16);
  await search.fill("spring");
  await page.getByRole("link", { name: /All components 16/ }).click();
  await expect(page.locator(".component-card")).toHaveCount(16);
});

test("every component exposes its complete source", async ({ page }) => {
  await page.goto("/components");
  const cards = page.locator(".component-card");
  for (let index = 0; index < await cards.count(); index += 1) {
    const card = cards.nth(index);
    await card.getByRole("button", { name: "Code", exact: true }).click();
    await expect(card.locator("pre")).toContainText("export default function");
    await card.getByRole("button", { name: "Preview", exact: true }).click();
  }
});

test("form, feedback, navigation, and physics previews respond", async ({ page }) => {
  await page.goto("/components/forms");
  await page.getByLabel("Email address").fill("hello@example.com");
  await page.getByRole("button", { name: "Submit email" }).click();
  await expect(page.getByText("You're on the list.")).toBeVisible();
  const toggle = page.getByRole("switch", { name: "Motion effects" });
  await expect(toggle).toHaveAttribute("aria-checked", "true");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-checked", "false");

  await page.goto("/components/feedback");
  await page.getByRole("button", { name: "Show notification" }).click();
  await expect(page.getByText("Changes saved")).toBeVisible();
  await page.getByRole("button", { name: "Dismiss notification" }).click();

  await page.goto("/components/navigation");
  await page.getByRole("tab", { name: "Activity" }).click();
  await expect(page.getByRole("tabpanel")).toHaveText("See what is happening now.");
  await page.getByRole("button", { name: /Jump to anything/ }).click();
  await page.getByRole("textbox", { name: "Search commands" }).fill("settings");
  await page.getByRole("button", { name: "Open settings" }).click();
  await expect(page.getByRole("button", { name: /Open settings/ })).toBeVisible();

  await page.goto("/components/physics");
  const slider = page.getByRole("slider", { name: "Spring tension" });
  await slider.focus();
  await slider.press("Home");
  await expect(slider).toHaveValue("0");
  await expect(page.getByRole("button", { name: /Drag me around/ })).toBeVisible();
});

test("interactive and data examples change state", async ({ page }) => {
  await page.goto("/components/interactive");
  const appreciation = page.getByRole("button", { name: /Appreciate 128/ });
  await appreciation.click();
  await expect(page.getByRole("button", { name: /Appreciated 129/ })).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "Follow", exact: true }).click();
  await expect(page.getByRole("button", { name: "Following", exact: true })).toHaveAttribute("aria-pressed", "true");

  await page.goto("/components/data");
  await page.getByRole("button", { name: "Complete a task" }).click();
  await expect(page.getByRole("progressbar", { name: "Project progress" })).toHaveAttribute("aria-valuenow", "80");
  await page.getByRole("button", { name: "Add 25 community members" }).click();
  await expect(page.getByText("1,305")).toBeVisible();
});

test("mobile navigation and category browsing remain usable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Motion Lab", exact: true }).click();
  await expect(page).toHaveURL("/components/physics");
  await expect(page.getByRole("heading", { name: "Spring Slider" })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
});