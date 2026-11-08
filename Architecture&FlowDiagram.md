# UIKIT Architecture and Flow Diagrams

UIKIT is a frontend-only gallery of interactive, copy-paste-ready React components. Visitors can browse examples, try live previews, view their source, and copy that source into their own projects. There is no backend, database, or account system.

## Project Structure

| Path | Responsibility |
| --- | --- |
| `src/main.tsx` | Mounts the React app and loads global CSS. |
| `src/App.tsx` | Selects the page from the URL and renders the shared header and footer. |
| `src/pages/Home.tsx` | Landing page, category links, and featured examples. |
| `src/pages/Library.tsx` | Category navigation, client-side search, and filtered results. |
| `src/pages/Docs.tsx` | Instructions for installing dependencies and using a component. |
| `src/data/registry.ts` | Source of truth for categories and components: metadata, live component references, and copyable source strings. |
| `src/registry/*.tsx` | Standalone interactive component examples. |
| `src/components/showcase/` | Shared gallery UI, including preview/code switching in `ComponentCard.tsx`. |
| `src/utils/copy.ts` | Clipboard helper with a fallback for browsers where the Clipboard API is unavailable. |
| `src/index.css`, `public/images/` | Site styling and static imagery. |
| `tests/catalog.spec.ts` | Playwright tests for the catalog and its interactions. |

## Architecture Diagram

```mermaid
flowchart TD
    Visitor["Visitor in browser"] --> Entry["index.html / src/main.tsx"]
    Entry --> App["src/App.tsx: routing and shared layout"]
    App --> Home["HomePage: /"]
    App --> Library["LibraryPage: /components and /components/:category"]
    App --> Docs["DocsPage: /docs"]

    Home --> Registry["src/data/registry.ts: categories and component definitions"]
    Library --> Registry
    Registry --> Examples["src/registry/*.tsx: live examples"]
    Registry --> Source["Vite ?raw imports: source text"]

    Home --> Card["ComponentCard: preview / code / copy"]
    Library --> Card
    Card --> Examples
    Card --> Source
    Card --> Copy["src/utils/copy.ts"]
    Docs --> Copy
    Copy --> Clipboard["Browser Clipboard API or selection fallback"]
```

**How the registry works:** Each entry in `src/data/registry.ts` connects a category and descriptive metadata to both a React component for the live preview and a `*.tsx?raw` import of that file for the Code tab. Vite includes the source text in the frontend build; browsing and searching do not require an API request. Category counts are derived from the registry rather than maintained separately.

## Visitor Flow Diagram

```mermaid
flowchart TD
    Start["Open UIKIT home page"] --> Choice{"What does the visitor want?"}
    Choice -->|Browse all| All["Open /components"]
    Choice -->|Choose a category| Category["Open /components/:category"]
    Choice -->|Learn how to use it| Guide["Open /docs"]
    Guide --> All
    All --> Filter["Filter registry by category and search text"]
    Category --> Filter
    Filter --> Matches{"Any matching components?"}
    Matches -->|No| Empty["Show empty state; clear search or change category"]
    Empty --> Filter
    Matches -->|Yes| Preview["Interact with the live preview"]
    Preview --> Code["Select Code to see the raw component source"]
    Code --> Copy["Select Copy"]
    Copy --> Result{"Copy successful?"}
    Result -->|Yes| Paste["Paste the component into a React project"]
    Result -->|No| Manual["Select and copy the visible code manually"]
    Manual --> Paste
    Paste --> Use["Install needed dependencies and customize the component"]
```

Search runs in the browser against component names, descriptions, categories, and labels. The library narrows those results to the selected category when applicable. `ComponentCard` switches between the running example and its source, then shows copied/error feedback after using `copyText()`. That helper tries the Clipboard API first and falls back to text selection with `execCommand("copy")`.

## Adding a Component

1. Create a self-contained example in `src/registry/`.
2. Import the component and its `*.tsx?raw` source in `src/data/registry.ts`.
3. Add its metadata and category to the `components` array. If the category is new, also update the `CategoryId` type and `categories` array.
4. Check its live preview, Code tab, copy behavior, keyboard access, and responsive layout.
5. Run `npx tsc --noEmit`, `npm run build`, and `npx playwright test`.

The deployed site is a client-side application. Configure static hosting to serve `index.html` for routes such as `/components/buttons` when users load them directly.
