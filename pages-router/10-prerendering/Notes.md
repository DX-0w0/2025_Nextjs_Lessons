# Notes - 10 prerendering

- /pages >> routes
- two forms of pre-rendering
  - 1. static generation
    - build during build timer
    - pages are prepared ahead of time
    - can be cache by server / CDN
    - special named function `async function getStaticProps(context){...}` this function will never be expose on client-side, Code written inside could access file-system since its not client-side. Server-side function
  - 2. server side rendering
- process.cwd() is the current working directory (the root)
- SSG (static side generation)