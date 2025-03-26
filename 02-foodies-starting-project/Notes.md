# Notes

```
https://nextjs.org/docs
```

- There are buildin components that are optimizated `https://nextjs.org/docs/app/api-reference/components`
  - Font, Form, Image, Link, Script
- Using buildin <Link> keep it as a single page app
- using <Image> lazy load image and add additional property to best serve the image, by adding `priority` to the image it no longer lazy load but load immediately, which help in preventing content shift and LCP
- Using scoped styling using .module.css or .module.scss
- There are `React server components` (RSC) and `Client components`
- By DEFAULT, all React components (in Nextjs) are RSC
- RSC is better for SEO, the source is already loaded for crawler, in client its just an empty page
- In client components, they are pre-rendered on the server, and potentially re-render on the client (useState, useEffect, eventHandler, e.g.: onClick) features that are only available on client
- Add `'use client'` to top of component file that are Client components to be used with RSC
- When using `use client` use it at the lowest or smallest client component when possible, avoid setting at the highest level we want to keep `RSC`  
- The `Image` component from next, use the fill property if you don't know the width or height of the image in advance
- Using `.mjs` compared to normal `.js` file, .mjs support `import and export` which are part of `ES module` compared to regular `CommonJS` when targeting node.js
  - When running node `node filename.mjs`
- Since nextjs components are all server component, rather making a `fetch` call which is client side, we could directly call the database
- better-sqlite3 `run()` to insert, `all()` to get back all, `get()` to get back a single
- Server component we are allow to make it into `async` function which is not allowed on the client component 
- The file `loading.js` is a reserved name like `page` and `layout`
- The `layout` is used to define shared layouts for your application. It allows you to create persistent UI components like navigation bars, sidebars, or footers that remain consistent across different pages. It will consume sibling `page.js` and all `page.js` nested in subroutes