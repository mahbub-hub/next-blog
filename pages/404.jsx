import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function NotFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])
  return (
    <div>
      <h1>Ooooops...</h1>
      <p>That page cannot be found.</p>
      <p>
        Go back to home page{' '}
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </div>
  )
}

export default NotFound
