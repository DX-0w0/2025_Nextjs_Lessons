# 03 - Deep Dive

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

## Fetching and loading data

- Method #1 - Hard coding
- Method #2 -`client-side fetching` use `use client` useEffect and fetch() method. Not ideal
- Method #3 - `serve-side fetch` use convert root function into async and call the fetch() method directly, (fetch is nodejs) *Ideal way
- Method #4 - Fetching directly from the database since nextjs is server component (not allow when setting component to 'use client')
- `loading.js` file is use when awaiting data to be fetched, use `Suspense` from 'react for more granular when awaiting data