# Notes

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
