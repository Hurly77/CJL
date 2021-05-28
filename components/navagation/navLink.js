import Link from 'next/link'

const NavLink = ({ name, path }) => {
  return (
    <a>
      <Link href={`${path}`}>{name}</Link>
    </a>
  )
}

export default NavLink