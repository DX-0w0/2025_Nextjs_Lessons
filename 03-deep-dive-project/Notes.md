# 03 - Deep Dive
- Inside a route folder, `parallel route`, create a new folder with `@AnyName` create as many sibling or parallel route
- Normally the layout page will have a `children` prop, but with parallel route, the layout page will have a prop for each of the parallel folder name `@`
- When working with parallel route all nested route structure must be the same else there would be an error. To resolve not same structure you can add a reserve filename `default.js` to the default parallel route folder. If the `default.js` and the `page.js` are the same content you can remove the page.js 
- The catch all route instead of folder named `[anyname]` change it to `[[...anyname]]` this will catch all routes nested under the parent folder 
  - `[anyone]` parent/dynamic
  - `[[...anyone]]` parent/dynamic1/dynamic2/dynamic3...
- When using the catch all route, only use `page.js` inside the `[[...anyone]]` folder, any `page.js` under the parent route folder will be in conflict because the catch all route will `CATCH ALL` routes under the parent. 