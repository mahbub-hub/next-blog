import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: { contacts: data },
  }
}

function contact({ contacts }) {
  return (
    <div>
      <h1 className="font-5xl font-bold">Contact List:</h1>
      {contacts.map((item) => (
        <div key={item.id} className=" my-1 bg-slate-100 px-3 py-3">
          <Link href={`/details/${item.id}`}>
            <a>
              <h1>{item.name}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default contact
