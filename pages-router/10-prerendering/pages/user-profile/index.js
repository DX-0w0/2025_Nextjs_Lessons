function UserProfilePage(props) {
  const { username } = props
  return <h1>{username}</h1>
}

export default UserProfilePage

export async function getServerSideProps(context) {
  const { params, req, res } = context

  // console.log('server side code')

  return {
    props: {
      username: 'Max',
    },
  }
}
