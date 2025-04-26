- [Notes - 01 starting](#notes---01-starting)
- [Notes - 02 foodie](#notes---02-foodie)
- [Notes - 03 Deep Dive](#notes---03-deep-dive)
- [Notes - 04 mutating](#notes---04-mutating)
- [Notes - 05 cache](#notes---05-cache)
- [Notes - 06 optimization](#notes---06-optimization)
- [Notes - 07 authentication](#notes---07-authentication)

# Notes - 01 starting

- Inside the app folder, the `page.js|jsx` and `layout.js|jsx` are reserved words they use react jsx code, either `.js` or `.jsx` are both acceptable. They are `server component` and NOT CLIENT component. If you console.log it will log onto the terminal rather than the browser client.
- To add a new route create a new folder and add a `page.js` file
- Backend executes the server component function and the client-side receives and renders the code
- The `layout.js` needs at least 1 at the root level, layout file can be nested inside folder
- export const `metadata` is a reserved name. Is an object {title: "", description: ", ...}
- The layout is a wrapper around 1 or more pages, they work hand in hand. The page is also the children that will be injected into the layout
- Using the reserved work `icon.png` at root level of the app, will turn it into a favicon
- A list of reserved words
  - page.js
  - layout.js
  - not-found.js
  - error.js
  - loading.js
  - route.js
- To load route dynamically it needs a special folder using the `[]` with a key inside, could be [slug], [key], [id], anything, it would be used to find the exact dynamic path when its known. All `page.js` comes with `props` parameter. Use it to destruct and get the `params` object. Using params[the-name-of-dynamic-folder] to get back the actual dynamic path

  # Notes - 02 foodie

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

# Notes - 03 Deep Dive

- Inside a route folder, `parallel route`, create a new folder with `@AnyName` create as many sibling or parallel route
- Normally the layout page will have a `children` prop, but with parallel route, the layout page will have a prop for each of the parallel folder name `@`
- When working with parallel route all nested route structure must be the same else there would be an error. To resolve not same structure you can add a reserve filename `default.js` to the default parallel route folder. If the `default.js` and the `page.js` are the same content you can remove the page.js
- If you want to use the `page.js` instead of the `default.js` in parallel route, you don't need the extra default parallel folder that will have the `default.js` file. Have the `page.js` next to the `layout.js` at the route root. The `layout.js` will have the children prop and the other parallel folder names.
- The catch all route instead of folder named `[anyname]` change it to `[[...anyname]]` this will catch all routes nested under the parent folder
  - `[anyone]` parent/dynamic
  - `[[...anyone]]` parent/dynamic1/dynamic2/dynamic3...
- When using the catch all route, only use `page.js` inside the `[[...anyone]]` folder, any `page.js` under the parent route folder will be in conflict because the catch all route will `CATCH ALL` routes under the parent.
- Adding a `+` in front of a string number `+'3213'`it will convert to a number
- The file `error.js` recommand to add `use client` at top of file because error could occur oon both server and client
- An `intercepting route` can be access by creating a `(.)sameRouteName` folder. The `.` is the `url pathway`, NOT FILEPATH
  - (.) same level
  - (..) one level above
  - (..)(..) 2 level above
  - (...) root app directory
    `https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes`
- Best to use `intercepting route` with `parallel route`, creating overlay modals
- Intercepting routes allows you to load a route from another part of your application within the current layout. This routing paradigm can be useful when you want to display the content of a route without the user switching to a different context.
- User navagate programmatically `useRouter` hook from next/navigation
- Grouping routes by using `route groups` to achieve create a folder with `(anyname)`. When seting up route groups pages,layout,error,not-found CANNOT be on the same level as those route groups
- `Route handler` resevered filename `route.js` has methods name of GET, POST, PATCH, PUT, DELETE, has a given request argument. Useful in handling communication with 3th party and external api
- Another useful route handler, reserved filename `middleware.js` should be at root project folder, function named `middleware` has a given request argument, matcher and config `https://nextjs.org/docs/app/building-your-application/routing/middleware`

Fetching and loading data
- Method #1 - Hard coding
- Method #2 -`client-side fetching` use `use client` useEffect and fetch() method. Not ideal
- Method #3 - `serve-side fetch` use convert root function into async and call the fetch() method directly, (fetch is nodejs) \*Ideal way
- Method #4 - Fetching directly from the database since nextjs is server component (not allow when setting component to 'use client')
- `loading.js` file is use when awaiting data to be fetched, use `Suspense` from 'react for more granular when awaiting data

# Notes - 04 mutating

- Managing data 2 options
  - standalone backend (extra server)
  - integrated nextjs app (reduced complexity, single server)
- Server Actions in forms
- Default <form > action send to a url, instead in react the action will call a function(formData) `https://developer.mozilla.org/en-US/docs/Web/API/FormData`
- When using `useFormStatus` it must be between <form> tags
- Using `user server` doesn't gurarantee that the code only execute on the server instead install package `server-only` for only server never client such as API_KEYS
- using `useOptimistic` is another hook `https://react.dev/reference/react/useOptimistic` helps client show updated immediately while server is updating in the background

Production
- npm run build (give back a next folder)
- npm start (run the production version)

# Notes - 05 cache

- request memoization
  - stores data withe same configuration
  - avoid duplicate data fetches
  - cache only persists during request
- data cache
  - reuses fetched data until revalidated
- full route cache
  - stores rendered html and RSC at build time
  - cache persists until revalidated
- router cache
  - stores the RSC ini memory of browser
- docs `https://nextjs.org/docs/app/building-your-application/caching`
- nextjs 14 uses default `cache: 'force-cache',`
- nextjs 15 uses default `cache: 'no-store',`
- setting to control the cache inside the option of fetch
- there are 2 reserved variable that needs to be exported to no cache
  ```
  export const revalidate = 5 // same as next: { revalidate: 5 }
  export const dynamic = 'force-dynamic' // same as cache: 'no-store'
  ```
  ![Build route](public/route.png)
- adding a no cache to the route of messages, in build there is a different symbol instead of a circle
- using `revalidatePath()` is only on demand to revalid the cache
- using `revalidateTag()` clear those pages that has those tags, set in config option in fetch
- having `import { cache } from 'react'` inside the local database source, prevent duplicate call
- -having `import { unstable_cache as nextCache } from 'next/cache'` store the data cache, its an async fn

# Notes - 06 optimization

- using the nextjs <Image /> `https://nextjs.org/docs/pages/api-reference/components/image`
- use the sizes prop is recommended instead of width and height
- the `src` takes in an object, src can take in a url if it also has w and h, recommend to use fill instead
- external host. edit next.config to accept hostname
- setting property of `priority` will prevent it from lazy loading
- using the `fill` property will take up all available room, has css of absolute. Therefore set parent element to have position: relative
- use `loader` prop to transform the image url
- metadata `https://nextjs.org/docs/app/building-your-application/optimizing/metadata`
- static must use `export const metadata = {}` in page or layout
- dynamic meta use `export async function generateMetadata(data) {}` in page or layout
- Setting metadata on the layout ensure all pages gets metadata, if page already has metadata it will merge with layout overwriting to that of the page metadat

# Notes - 07 authentication

- Using .bind() to preconfigure the function when called
