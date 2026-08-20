# Katarya Johnson-Williams - Personal Portfolio

The source for [honeykat11.github.io](https://honeykat11.github.io/), a responsive personal portfolio built with React and Vite and deployed through GitHub Pages.

The site introduces my work in B2B software, my engineering approach, and my interest in mentoring students and new graduates. Professional content and public links are kept in one data file so the site can evolve without rewriting its component structure.

## Technical overview

| Area | Technology | How it is used |
| --- | --- | --- |
| Interface | [React](https://react.dev/) | Functional components render the page sections and repeated content. |
| Development and build | [Vite](https://vite.dev/guide/) | Provides the local development server, module handling, and optimized production build. |
| Styling | Modern CSS | Custom properties, Grid, Flexbox, fluid type with `clamp()`, and responsive media queries create the visual system. |
| Testing | [Vitest](https://vitest.dev/guide/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) | Verify the content hierarchy, important links, skip navigation, and decorative image treatment. |
| Hosting | [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) | Serves the static production files at the account's `github.io` address. |
| Automation | [GitHub Actions](https://docs.github.com/en/actions) | Tests, builds, and deploys every change merged into `master`. |

This project intentionally does not use a router, backend, database, state library, CSS framework, or component library. A small portfolio does not need those dependencies yet.

## Project structure

```text
.
|-- .github/workflows/deploy-pages.yml  # Test, build, and deployment workflow
|-- public/
|   |-- favicon.svg                     # Original initials favicon
|   `-- robots.txt
|-- src/
|   |-- data/siteContent.js             # Professional copy, identity, and links
|   |-- test/setup.js                    # Testing Library matchers
|   |-- App.jsx                          # Semantic page sections and original SVG art
|   |-- App.css                          # Components, layouts, and responsive rules
|   |-- App.test.jsx                     # User-visible behavior tests
|   |-- index.css                        # Global styles and design tokens
|   `-- main.jsx                         # React entry point
|-- index.html                           # Metadata and Vite HTML entry
|-- package.json                         # Commands and dependencies
`-- vite.config.js                       # React and test configuration
```

## Design implementation

The visual system uses:

- CSS custom properties for the navy, cornflower blue, warm neutral, spacing, radius, and shadow values;
- a mobile-first combination of [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) and [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout);
- fluid typography with [`clamp()`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp);
- inline SVG botanical artwork drawn specifically for this site;
- semantic landmarks and a logical heading hierarchy;
- a keyboard skip link and visible [`:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) treatment;
- reduced animation when the visitor has enabled [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion).

The accessibility approach follows the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) and the W3C guidance for [decorative images](https://www.w3.org/WAI/tutorials/images/decorative/). Automated tests support these decisions but do not replace keyboard, contrast, zoom, screen-reader, and responsive checks.

## Run locally

The deployment workflow uses Node.js 22. Install a compatible Node.js version and npm, then run:

```powershell
git clone https://github.com/HoneyKat11/HoneyKat11.github.io.git
Set-Location HoneyKat11.github.io
npm ci
npm run dev
```

Vite prints the local address, normally `http://localhost:5173/`.

Useful commands:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server with live updates. |
| `npm test` | Run the component tests once. |
| `npm run build` | Create the optimized site in `dist/`. |
| `npm run preview` | Serve the production build locally for a final review. |

Use `npm install` only when intentionally updating dependencies. Use `npm ci` for a reproducible install from `package-lock.json`.

## Customize the content

Most personal information lives in `src/data/siteContent.js`:

- name, initials, role, and employer;
- hero and About text;
- engineering strengths;
- mentorship copy;
- LinkedIn and GitHub URLs.

Page structure lives in `src/App.jsx`. Colors and global design tokens live at the top of `src/index.css`, while section-level styling lives in `src/App.css`.

Also update the title, description, and canonical URL in `index.html` when adapting the site to a different person or domain.

## Deploy a similar GitHub Pages site

This repository is a GitHub **user site**, so its name follows the required `<username>.github.io` format and Vite builds for the domain root.

The workflow in `.github/workflows/deploy-pages.yml`:

1. checks out the repository;
2. installs the locked dependencies;
3. runs the tests;
4. creates the Vite production build;
5. uploads `dist/` as a Pages artifact;
6. deploys the artifact to GitHub Pages.

To use this approach in another repository:

1. Review [GitHub's site creation guide](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).
2. Configure **Settings > Pages > Build and deployment > Source** to **GitHub Actions**.
3. Follow the official guide for a [custom GitHub Actions Pages workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#using-a-custom-github-actions-workflow).
4. If building a project site at `<username>.github.io/<repository>/`, configure Vite's [`base` public path](https://vite.dev/guide/static-deploy.html#github-pages) for the repository name.
5. Keep deployment permissions limited to `contents: read`, `pages: write`, and `id-token: write`.

## Learning resources

- [React: Describing the UI](https://react.dev/learn/describing-the-ui)
- [Vite: Getting Started](https://vite.dev/guide/)
- [Vite: Deploying a Static Site](https://vite.dev/guide/static-deploy.html)
- [GitHub Pages documentation](https://docs.github.com/en/pages)
- [GitHub Actions documentation](https://docs.github.com/en/actions)
- [MDN: Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Testing Library guiding principles](https://testing-library.com/docs/guiding-principles/)
- [Vitest guide](https://vitest.dev/guide/)
- [W3C Web Accessibility Initiative tutorials](https://www.w3.org/WAI/tutorials/)

## Original work and reuse

The written content, color treatment, layout, favicon, and botanical SVG artwork were created for this personal site. The botanical artwork is not sourced from a stock library and does not require third-party attribution.

This repository is public so GitHub Pages can publish it and so others can learn from the implementation. It does not currently include an open-source license granting permission to copy or redistribute the original code, writing, or artwork. For an explanation of what that means, see GitHub's guide to [licensing a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository).
