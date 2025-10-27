# Aurora Event Collective — Frontend

![Aurora Event Collective logo placeholder](./public/logo-placeholder.png)

Modern, accessible frontend for the Aurora Event Collective project.

This repository contains the Next.js + TypeScript frontend built with Tailwind CSS and ShadCN/UI. It is designed for fast local development and easy deployment (Vercel recommended).

## 🔭 Quick overview

- Organization: Aurora Event Collective
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Component library: ShadCN/UI + custom components
- Package manager: npm (compatible with pnpm / yarn)

---

## 🚀 Quick start

From the repository root run:

```powershell
cd frontend
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

Notes:
- Use `pnpm install` if you prefer pnpm.
- If `public/logo-placeholder.png` doesn't exist, add your logo or remove the image line above.

---

## 📂 Project structure

Top-level frontend layout (important files/folders):

- `app/` — Next.js App Router pages, layouts and metadata
- `components/` — Reusable UI components (shadcn + custom)
- `lib/` — Utility functions and helpers
- `public/` — Static assets (images, icons)
- `styles/` or `globals.css` — Tailwind entry and global styles
- `package.json` — NPM scripts and dependencies
- `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `tailwind.config.ts`

Adjust paths above if this repository is used inside a monorepo — treat `frontend/` as an isolated workspace.

---

## 🧰 Scripts

Common NPM scripts (run from `frontend/`):

```powershell
npm run dev        # start dev server
npm run build      # production build
npm run start      # start production server (after build)
npm run lint       # run ESLint
npm run type-check # run TypeScript check
```

Check `package.json` for the exact scripts present in this project.

---

## 🧱 UI Components (ShadCN)

We use ShadCN/UI for accessible primitives. To add a component:

```powershell
npx shadcn@latest add <component-name>
```

Example:

```powershell
npx shadcn@latest add dialog
```

After adding components, you may need to restart the dev server.

---

## 🛠️ Environment variables

Create a `.env.local` in `frontend/` for local secrets and public keys. Example:

```text
NEXT_PUBLIC_API_URL=https://api.example.org
```

Keep secret keys out of the repo and use your deployment platform's secret management.

---

## ✅ Linting & type checking

Run lint and type checks locally:

```powershell
npm run lint
npm run type-check
```

Consider enabling pre-commit hooks (husky) or CI checks to enforce these on push/PR.

---

## ☁️ Deployment

Recommended: Vercel. Steps:

1. Push the `frontend/` folder to your GitHub repo.
2. On Vercel, import the repo and set the project root to `frontend/`.
3. Vercel will detect Next.js and handle builds automatically.

For other platforms, build with `npm run build` and deploy the generated output per your host's docs.

---

## 🤝 Contributing

1. Create a branch: `git checkout -b feat/your-feature`
2. Make changes and run lint/type checks.
3. Commit and push:

```powershell
git add .
git commit -m "feat: describe your change"
git push origin feat/your-feature
```

4. Open a Pull Request and add a short description and testing steps.

Guidelines:
- Keep UI changes accessible and responsive.
- Add unit or integration tests for new behavior where appropriate.

---

## 🧾 Maintainers

Maintained by the Aurora Event Collective frontend team. For ownership and code review, open issues or PRs in this repo.

---

## 📝 Notes & next steps

- I added an optional logo placeholder reference at `public/logo-placeholder.png`. If you want, I can create a simple SVG placeholder and add it to `public/`.
- Consider adding a `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` for external contributors.

---

Thank you!!!!