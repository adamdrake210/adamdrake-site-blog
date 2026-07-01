# adamdrake-site-blog

Adam Drake's personal site: a blog + portfolio/about presence built on Next.js.
Public pages include a homepage, a blog (posts + reading list), an about page,
and a "hire me" style CV/overview page. There's also a small internal `/admin`
area for authoring content.

## Tech stack

- **Framework:** Next.js 16 (Pages Router, not App Router), Turbopack in dev
- **Language:** TypeScript (strict mode), React 18
- **UI library:** Mantine v8 (`@mantine/core`, `@mantine/hooks`) — this is the
  primary styling/component system. `@emotion/react` + `@emotion/styled` back
  Mantine's styling engine.
- **Animation:** `framer-motion` (see `AnimateFadeIn` — most page content is
  wrapped in it for a consistent fade-in on load)
- **Data fetching/state:** `@tanstack/react-query`
- **Forms:** `react-hook-form`
- **Icons:** `@tabler/icons-react` for UI icons; hand-written SVG components
  in `src/assets/icons/` for brand logos (GitHub, LinkedIn, Twitter, Medium)
- **Content/data backends:**
  - **Sanity CMS** (`@sanity/client`, `next-sanity`) — source of blog post
    content (`src/services/sanityio/getAllPosts.ts`)
  - **Supabase** — post metadata/engagement (likes, details) via
    `src/services/supabase/*`
  - **Cloudinary** — image hosting/upload (`src/pages/api/cloudinary/`)
  - **OpenAI API** — used from the admin blog-post-creation tooling to draft
    posts (`src/pages/api/openai/`)
  - `src/posts/articles/*.mdx` — local MDX articles (older/alternate content
    source alongside Sanity)
  - **Strava API** — personal running stats shown on the homepage
    (`src/pages/api/strava/`, `src/components/strava/`)
- **Linting/formatting:** ESLint (`next/core-web-vitals`), Prettier (single
  quotes, semicolons, trailing commas, 80 print width, `arrowParens: avoid`)
- **No test framework is configured** — there are no unit/e2e tests in this
  repo currently.

## Scripts

Always use `pnpm`

- `pnpm run dev` — start dev server (Turbopack), default port 3000
- `pnpm run build` — production build, then generates sitemap via
  `next-sitemap` (postbuild hook)
- `pnpm start` — run production build
- `pnpm run lint` — ESLint
- `pnpm run typecheck` — `tsc --noEmit`

## Project structure

```
src/
  pages/            Next.js Pages Router — one file per route
    api/            API routes (cloudinary, openai, strava, hello)
    admin/          Internal content-authoring pages (not linked in public nav)
    blog/           Blog index + [slug] post pages
  components/       React components, organized by feature/page
    <feature>/      e.g. about/, blog/, homepage/, hireMe/, navigation/, footer/
    common/         Shared building blocks (animations, images, social icons,
                     buttons, fields, SparklesBackground, etc.)
  layouts/          Page-level layout wrappers (PageContainer)
  constants/        Site-wide constants (constants.ts) and route paths
                     (routeConstants.ts)
  hooks/            Shared React hooks (e.g. useOpen)
  services/         External API clients (sanityio/, supabase/, api/)
  posts/articles/   Local MDX blog content
  styles/           Mantine theme.ts + global index.css
  types/            Shared TypeScript types
  utils/            Utility functions
```

### Path aliases

`tsconfig.json` sets `baseUrl: "./src"`, so imports are absolute from `src`
with **no alias prefix** — e.g. `import PageContainer from 'layouts/PageContainer'`
or `import { SITE_NAME } from 'constants/constants'`, not `@/layouts/...` or
relative `../../` chains.

## Page conventions

A typical page (`src/pages/<name>.tsx`) is a thin wrapper:

```tsx
<Head><title>{SITE_NAME} | <Page Title></title></Head>
<PageContainer maxWidth="1000px">
  <FeatureComponent />
</PageContainer>
```

`PageContainer` (`src/layouts/PageContainer.tsx`) supplies the sticky
`Navigation`, `Footer`, and the `SparklesBackground` decorative effect, and
centers content at a given `maxWidth`. The actual page content component
lives under `src/components/<feature>/` and is usually wrapped in
`AnimateFadeIn` for the fade-in transition used across the site.

To add a page to the main nav, add an entry to the `navLinks` array in
`src/components/navigation/Navigation.tsx` and a route constant in
`src/constants/routeConstants.ts`. Not every page needs a nav entry — e.g. the
hire-me/CV page is meant to be shared directly via its URL rather than linked
from the header.

## Styling / design system

Theme is defined in `src/styles/theme.ts` (Mantine `createTheme`):

- **Color palette `myColor`** — warm earth tones, 10 shades from `#fbf4ee`
  (lightest, used for backgrounds) to `#6c573e` (darkest, used for
  accents/buttons). A `secondary` blue palette also exists but is used more
  sparingly.
- **Fonts** — body text uses `'Lora', serif`; headings use
  `'Red Hat Display', serif` at a light weight (200) by default. Hero-style
  headings may override `fw` for more visual weight.
- **Global CSS** (`src/styles/index.css`) sets base link/list colors using
  Mantine CSS variables (`--mantine-color-gray-*`).
- Layout is done with Mantine's `Box`/`Flex`/`Grid` components and responsive
  props (e.g. `useMediaQuery('(max-width: 768px)')`) rather than a separate
  CSS framework — there is no Tailwind/Bootstrap in this project.

## Personal/site info agents may need

- Site name/domain: "Adam Drake" / `adamdrake.dev` (see `src/constants/constants.ts`)
- Social links (GitHub, LinkedIn, Twitter, Medium) are centralized in
  `src/components/common/socialMedia/SocialLinks.tsx`; contact email and CV
  download path are in `src/constants/constants.ts`
  (`CONTACT_EMAIL`, `CV_DOWNLOAD_URL`)
- The CV PDF lives at `public/adam_drake_resume.pdf` and is linked directly
  (not proxied through an API route)
