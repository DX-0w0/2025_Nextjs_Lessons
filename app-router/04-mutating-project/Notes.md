# Notes - 04 mutating
- Managing data 2 options
  - standalone backend (extra server)
  - integrated nextjs app (reduced complexity, single server)
- Server Actions in forms 
- Default <form > action send to a url, instead in react the action will call a function(formData) `https://developer.mozilla.org/en-US/docs/Web/API/FormData`
- When using `useFormStatus` it must be between <form> tags
- Using `user server` doesn't gurarantee that the code only execute on the server instead install package `server-only` for only server never client such as API_KEYS
- using `useOptimistic` is another hook `https://react.dev/reference/react/useOptimistic` helps client show updated immediately while server is updating in the background

# Production
- npm run build (give back a next folder)
- npm start (run the production version)