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
- react `Suspense` component is used for loading or waiting for resource to be loaded, fallback property renders DOM element when data is still being fetched
- Nuxtjs `loading.js` file does the same logic as react `Suspense` component
- By using `Suspense` you able to control only certain portion of the component to wait until data is loaded, rather than everything on the component 
- Use the reserved `error.js` file to handle any error, will catch error on that route or anything nested under that route, its better to limit to a define route rather than placing it at root app. Must be `use client`
- The `notFound()` from next/navigation will show the closes `not-found.js` or `error.js`
- When <input type='file' /> use JS `new FileReader()` to read a file stored on the computer
- A function that has `use server` inside, is a function that only excute on the server. Example <form action={}> we can now set the `action` to the async function 
- Having the directive `use server` at top of file instead of inside function. All functions on the file are now server only function
- Package `xss` prevent cross script attack when using `dangerouslySetInnerHTML`
- Pacage `fs` file system to read and write to local computer
- In sql can insert value with ? or @key, values and keys must be in the same order     
 ```
VALUES (?, ?, ?, ?, ?, ?, ?, ? )
or 
VALUES (
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )
```
- The hook `useFormStatus` from 'react-dom' can only be used with <form ></form>
- Its a good practice to validate on `server side` for valid data
- The hook `useFormState` from 'react-dom' handles the form response, takes two arg, the actionFn and initalState
- Running `npm run build` give you a production build of the app
- Running `npm run dev` starts the development server `npm start` starts the production server
- When doing a production build, next does caching very aggressively for pre-generated pages, it's does not refetch when data changes, to resolve import `revalidatePath()` from 'next/cache'. Takes in 2 args, 1st is the path, 2nd is either 'page' just for that page or 'layout' for that page and nested pages. Using revalidate will throw away old cache for those pages. To revalidate the whole app `revalidatePath('/', 'layout')`
- For metadata on page or layout next look for the `metadata` varaiable, on dynamic page it looks for the function `generateMetadata()`  