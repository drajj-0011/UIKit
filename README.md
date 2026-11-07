# UIKIT ⚡

**Stop building the same buttons, cards and sliders from scratch.**

UIKIT is a collection of premium, interactive React components designed to feel *alive* — magnetic buttons, 3D tilt cards, spring sliders, physics drags, glowing toasts and more.

### 👇 How it works
**1.** Browse & play with every component live
**2.** Click *Code* → *Copy*
**3.** Paste it into your project — it just works

Built with **React + Tailwind CSS + Framer Motion + TypeScript**
No boilerplate. No dependencies you don't need. Just beautiful, copy-paste-ready UI.

🔥 **See it. Copy it. Make it yours.**

![UIKIT hero artwork](public/images/uikit-hero.jpg)

## Get started

Requirements: Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build, run `npm run build`.

## Explore the library

Choose a category on the home page or open the component library. Each example has a live preview, a Code view, and a button that copies the complete component source. Search works across component names, categories, and descriptions.

| Category | Included components |
| --- | --- |
| Buttons | Magnetic Button, Shimmer Button |
| Cards | Spotlight Card, 3D Tilt Card |
| Forms | Email Input, Animated Toggle |
| Feedback | Toast Message, Copy to Clipboard |
| Navigation | Animated Tabs, Command Menu |
| Interactive | Appreciation Button, Follow Interaction |
| Physics | Spring Slider, Draggable Chip |
| Data Display | Animated Counter, Progress Meter |

## Use a component

The examples are standalone React/TypeScript components styled with Tailwind CSS. In an existing React project with Tailwind configured, install their animation and icon dependencies:

```bash
npm install framer-motion lucide-react
```

Open an example's Code tab, copy its source into a file such as `MagneticButton.tsx`, and import it in your project:

```tsx
import MagneticButton from "./MagneticButton";

export default function App() {
  return <MagneticButton />;
}
```

Customize the content, colors, and behavior to suit your project. Some components only need a subset of the dependencies above. UIKIT is frontend-only and does not require a database.

## Project structure

- `src/registry/`: the standalone, copyable component examples.
- `src/data/registry.ts`: category metadata, descriptions, and source imports. Category counts are calculated from this registry.
- `src/components/showcase/`: the reusable gallery and site interface.
- `src/pages/`: the home page, component library, and getting-started guide.
- `tests/`: browser tests for category navigation, search, copying, previews, and mobile layout.

## Verify changes

```bash
npx tsc --noEmit
npm run build
npx playwright install chromium
npx playwright test
```

On a fresh Linux machine, Playwright may also need system dependencies: `npx playwright install-deps chromium`.

## Contributing

Contributions are welcome. Add a self-contained component to `src/registry/`, register it in `src/data/registry.ts`, and verify its preview, copyable source, keyboard behavior, responsive layout, and reduced-motion experience. Run the checks above before opening a pull request.

The GitHub navigation links currently point to GitHub's homepage. Replace them with your repository URL after publishing. If you deploy the site as a single-page application, configure your host to serve `index.html` for component routes.

## License

MIT. See [LICENSE](LICENSE). The visual style is inspired by NVIDIA's dark and green aesthetic; this project is not affiliated with NVIDIA.
