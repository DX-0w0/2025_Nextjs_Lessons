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