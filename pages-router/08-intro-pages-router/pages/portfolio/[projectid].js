import { useRouter } from 'next/router'

function PortfolioProjectPage() {
  const router = useRouter()

  console.log(router.pathname)
  // console.log(router.query)
  //send a request to some backend server to fetch piece of data with id of router.query.projectid

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  )
}

export default PortfolioProjectPage
