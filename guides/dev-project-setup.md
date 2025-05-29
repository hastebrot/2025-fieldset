## dev: project setup.

vite frontend tooling (v6)
- `❯ bun create vite fieldset-app --template react-swc-ts`
- `❯ cd sources/fieldset-app/`
- `❯ bun install`
- `❯ bun run dev --port 5678`
- `❯ open -a safari --url "http://localhost:5678/"`
- `❯ bunx --bun vite build`
- more: https://bun.sh/guides/ecosystem/vite
- more: https://vite.dev/blog/announcing-vite6.html

react (v19)
- `❯ bun add -d react react-dom`
- `❯ bun add -d @types/react @types/react-dom`
- more: https://react.dev/blog/2024/12/05/react-19

tailwind css (v4)
- `❯ bun add -d tailwindcss @tailwindcss/vite`
- more: https://tailwindcss.com/docs/v4-beta#installing-with-vite

react-router library and framework (v7)
- `❯ bun add -d react-router`
- more: https://reactrouter.com/home#react-router-as-a-framework

react aria components
- `❯ bun add -d react-aria-components`
- more: https://react-spectrum.adobe.com/react-aria/components.html

clsx helper (aliased as clx)
- `❯ bun add -d clsx`
- more: https://github.com/lukeed/clsx

cva helper
- `❯ bun add -d class-variance-authority`
- more: https://github.com/joe-bell/cva

zod schema validation (v4)
- `❯ bun add -d zod`
- more: https://github.com/colinhacks/zod

mobx state management (v6)
- `❯ bun add -d mobx mobx-react-lite`
- more: https://github.com/mobxjs/mobx
