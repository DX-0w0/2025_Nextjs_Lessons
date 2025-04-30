# Notes 08 - Pages router

- Folder structure `index.js` is special name file for each route, it can be nested by adding addtional folder structure or just the file itself as the route
- Dynamic path using `[placeholder-name].js` or as a folder. Mulitple dynamic path when nested
- using the `import { useRouter } from 'next/router'` hook to get access to dynmanic router property
- catch all routes by using `[...placeholder-name].js` using useRouter().query give by an array of paths separated by /
- Using next component `<Link href=>` rather than building using a string href={`/clients/${client.name}`} it can also use a object ` href={{ pathname: 'clients/[id]', query: { id: client.name } }}`
- Custom not found page. Use special file named `404.js`
- File based routing (nextjs)
  - No extra boilderplate, just use folders and filenames to create routes
- Code based routing (react + react-router)
  - create extra route path <Switch> <Route path='/products'>