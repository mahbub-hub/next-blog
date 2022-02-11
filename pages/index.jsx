import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog list | home </title>
        <meta name="description" content="technology relateted blog" />
      </Head>
      <div className="container  mx-auto">
        <main>
          <h>Breakpoints and media queries</h>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolor
            a, eos maiores nisi eum nihil doloremque, corrupti illo unde
            adipisci eveniet esse. Praesentium odio debitis in quas obcaecati
            et?
          </p>
          <Link className="my-5" href="/about">
            <a className="btn py-2">Go to about page</a>
          </Link>
        </main>
      </div>
    </>
  )
}
