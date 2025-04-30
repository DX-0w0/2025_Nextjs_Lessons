import Link from 'next/link'

function ClientsPage() {
  // This list should from a database
  const clients = [
    { id: 'max', name: 'Max' },
    { id: 'ted', name: 'Ted' },
    { id: 'susan', name: 'Susan' },
  ]

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.name}`}>{client.name}</Link> */}
            <Link href={{ pathname: 'clients/[id]', query: { id: client.id } }}>
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientsPage
