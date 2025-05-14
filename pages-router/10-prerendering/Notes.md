# Notes - 10 prerendering

- /pages >> routes
- two forms of pre-rendering
  - 1. `static generation`
    - build during build timer
    - pages are prepared ahead of time (pre generated)
    - can be cache by server / CDN
    - special named function `async function getStaticProps(context){...}` this function will never be expose on client-side, Code written inside could access file-system since its not client-side. Server-side function. Return an object with keys such as `props, revalidate, notFound, redirect`
    - using `getStaticProps` you want to generate page ahead of time
  - 2. `server side rendering`
  
- process.cwd() is the current working directory (the root)
- SSG (static side generation)
- ISG (Incremental Static Generation)
  - re-generate on every request at every x seconds (can only be seen in production build)
  - add a `revalidate` in the return on the `getStaticProps` function
- Dynamic pages are not to pre-generate the pages, because there are multiple pages with different data. Generate by `just in time`
- Dynamic pages [id].js also need to known which [id] values are available ig. id=1, id=2 ...
  - use `aysnc function getStaticPaths(){ ... }`
  - having the `fallback: true`, any additional path that are not pre-generated in the paths key, are generated just in time, the fallback path JIT are not generated instantly. ig manually adding the path directly to the url. Add a fallback check until data is available 
  - By using the ` fallback: 'blocking'` There is no need for check data because it will wait until data is available. 
  - Both the getStaticProps and getStaticPaths are needed in dynamic paths

- server-side rendering
- use `export async function getServerSideProps(){...} `

- Fetching, using a third party hook `useSWR` https://swr.vercel.app/
- Combining both pre-generated and fetching data, pre-generated data during build, fetching new data after the build in production