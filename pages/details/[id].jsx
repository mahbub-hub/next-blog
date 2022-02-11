export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await res.json()

  return {
    props: { item: data },
  }
}
function Details({ item }) {
  return (
    <div className="bg-slate-200 p-3">
      <h1> Contact Details: </h1>
      <div className="py-3">
        <h3>{item.name}</h3>
        <p>{item.email}</p>
        <p>{item.address.city}</p>
      </div>
    </div>
  )
}

export default Details
