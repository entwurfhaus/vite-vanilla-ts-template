# vite-vanilla-ts-template

<p align="center">
    <img alt="license" src="https://img.shields.io/github/license/entwurfhaus/vite-vanilla-ts-module?style=flat-square" />
    <img alt="release" src="https://img.shields.io/github/v/tag/entwurfhaus/vite-vanilla-ts-template?label=release&style=flat-square" />
    <img alt="stargazers" src="https://img.shields.io/github/stars/entwurfhaus/vite-vanilla-ts-template?style=flat-square" />
</p>

This is a minimalist Vite `vanilla-ts` template, for developing `ts` supported modules for publishing onto `npm`.

> Check out the older version of this template, https://github.com/entwurfhaus/vite-vanilla-ts-module.
> And always check the `package.json` dependencies - this template scaffolded from Vite 5.x, and compatible with Node 18.x & beyond

```bash
npx degit entwurfhaus/vite-vanilla-ts-template my-awesome-package
```

## Getting started

First, let's install all dependencies:

```bash
pnpm i
```

When you're ready to build and use your new `npm` package, run:

```bash
pnpm build
```

### Why `pnpm` and not `npm` or `yarn`?

This minimalist template is meant to be easily migrated to monorepo frameworks, such as `turbo` (Turborepo) and `nx` (Nx). Thus, it is why files like `tsconfig.json` have a simple configuration.

And pnpm offers several benefits:

1. Efficient disk space usage through a content-addressable store
2. Faster installation times compared to npm and yarn
3. Strict dependency resolution, preventing phantom dependencies
4. Built-in monorepo support with workspaces
5. Compatibility with npm and yarn workflows
6. Improved security with a stricter package management approach

### What is configured in this template?

- Generate declaration Typescript file: `vite-plugin-dts`: A useful Vite plugin that automatically generates and produces the `index.d.ts` file in the `dist` folder.
- Linting: `eslint`: Standard configuration included, together with `eslint-plugin-simple-import-sort` for organizing imports (a must-have for code organization).
- Code coverage: Using `istanbul` integration with `vitest` by default. This is optional and can be reconfigured to use `coverage-c8` (or its future renamed version) if preferred.

> And you can configure & add-on anything you like, to suit your development whether if it is the standalone module repo, or module within a monorepo.

## Github actions (optional)

I've added Github actions in this template - delete the `.github` folder if you're not using Github actions in your devops pipeline.

## Testing

### Unit testing with `vitest`

Run `vitest` (without "watch" mode):

```bash
pnpm test
```

Or run `vitest` with code coverage report:

```bash
pnpm test:coverage
```

### Local testing only

Run below command in your new `npm` package repository. For example, `cd /var/www/my-awesome-package` then run:

```bash
pnpm link --global
```

Lastly, go to your desired application that will use your new `npm` package and run:

```bash
pnpm link /var/www/my-awesome-package
```

## Publishing

### NPM

And when ready to publish to `npm`:

```bash
npm login
npm publish
```

## References

The list of online references & to credit the open-source community, for making mini projects like these possible, **helping developers save many minutes** working.

1. Peter Mekhaeil | How to build an npx starter template - https://github.com/petermekhaeil/create-my-template
2. Netlify | Creating a TypeScript Package with Vite - https://onderonur.netlify.app/blog/creating-a-typescript-library-with-vite/
3. Jason Stuges | Github - https://github.com/jasonsturges/vite-typescript-npm-package
