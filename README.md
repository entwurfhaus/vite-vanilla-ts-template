# vite-vanilla-ts-template

<p align="center">
    <img alt="license" src="https://img.shields.io/github/license/entwurfhaus/vite-vanilla-ts-module?style=flat-square" />
    <img alt="release" src="https://img.shields.io/github/v/tag/entwurfhaus/vite-vanilla-ts-template?label=release&style=flat-square" />
    <img alt="visits" src="https://hits.deltapapa.io/github/entwurfhaus/vite-vanilla-ts-template.svg" />
</p>

This is a minimalist Vite `vanilla-ts` template, for developing `ts` supported modules for publishing onto `npm`.

> Check out the older version of this template, https://github.com/entwurfhaus/vite-vanilla-ts-module.
> And always check the `package.json` dependencies - this template scaffolded from Vite 5.x, and compatible with Node 18.x & beyond

## Getting started

Why `pnpm`? This minimalist template is meant to be easily migrated to monorepo frameworks, such as `turbo` (Turborepo) and `nx` (Nx). Thus, it is why files like the `tsconfig.json` is simple.

Install all dependencies:

```bash
pnpm i
```

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

And when ready to publish to `npm`:

```
npm login
npm publish
```

## References

The list of online references & to credit the open-source community, for making mini projects like these possible, **helping developers save many minutes** working.

1. Peter Mekhaeil | How to build an npx starter template - https://github.com/petermekhaeil/create-my-template
2.
