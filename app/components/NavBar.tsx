import Link from "next/link"

const NavBar = () => {
  return (
    <div className="navbar bg-neutral">
      <div className="container">
        <div className="flex-1">
          <Link href="/">Icon</Link>
        </div>
        <div className="flex-none">
          <Link href="/create" className="btn btn-ghost">Create post</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar