# Notes

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
  