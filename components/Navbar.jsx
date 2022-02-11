import Image from 'next/image'
import Link from 'next/link'
function Navbar() {
  return (
    <>
      <div className="navbar mb-2 text-slate-500">
        <div className="mx-2 flex-none px-2">
          <Image src="/vercel.svg" width={80} height={50} />
        </div>
        <div className="mx-5 flex-1">
          <div className="hidden items-stretch lg:flex">
            <Link className="btn btn-ghost rounded-btn btn-sm" href="/">
              <a className="mx-3">Home</a>
            </Link>
            <Link className="btn btn-ghost rounded-btn btn-sm" href="/about">
              <a className="mx-3">About</a>
            </Link>
            <Link className="btn btn-ghost rounded-btn btn-sm" href="/contact">
              <a className="mx-3">Contact</a>
            </Link>
          </div>
        </div>
        <div className="flex-none">
          <button className="btn btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-none">
          <button className="btn btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="my-3 border-t"></div>
    </>
  )
}

export default Navbar
