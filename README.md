# Design UI

![npm](https://img.shields.io/npm/v/@troychaplin79/design-ui)

Personal design system and react component library of [Troy Chaplin](https://github.com/troychaplin)

The library is built with:

-   [React](https://reactjs.org/)
-   [Storybook](https://storybook.js.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Vite](https://vitejs.dev/)

## Get Started

Install dependencies

```
yarn install
```

Start up Storybook

```
yarn storybook
```

Build

```
yarn build
```

## Deployment

This project uses GitHub Actions to deploy the [NPM Package](https://www.npmjs.com/package/@troychaplin79/design-ui) and to build the [Storybook docs](https://troychaplin.github.io/design-ui/).

## How to use in a project

Install the package:

```
yarn add @troychaplin79/design-ui
```

Import the css file:

```css
/* yourmaincssfile.css */
@import '../node_modules/@troychaplin79/design-ui/dist/index.css';
```

## TailwindCSS

The CSS for this library is built with Tailwind. If the project you are building also uses Tailwind you can include this library as follows:

```css
/* yourmaincssfile.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@import '../node_modules/@troychaplin79/design-ui/dist/index.css';
```

Update your [Tailwind config file](https://tailwindcss.com/docs/configuration):

```javascript
// tailwind.config.js
module.exports = {
    content: ['./node_modules/@troychaplin79/design-ui/**/*.{js,ts,jsx,tsx}'],
}
```

## References

-   [Setting up Storybook 7 with Vite and Tailwind CSS](https://medium.com/kantega/setting-up-storybook-7-with-vite-and-tailwind-css-8e39f4343011)
-   [Build a Custom React Component Library With Storybook 7 Beta and Vite 4 in 2023](https://betterprogramming.pub/build-a-custom-react-component-library-with-storybook-7-beta-and-vite-4-in-2023-c52db4d733c0)
