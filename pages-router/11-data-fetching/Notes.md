# Notes - 11 Data fetching / Optimizing 

- add <Head> element from next/head
- <Head> gets merged from all components, takes the latest with the same tag
- `_app` is the root application
- `_document` customize the overall html document, has to be a class component instead of a functional component
- Optimize images by using `import Image from 'next/image'`