import Link from 'next/link'

export const NavLink = ({ name, path }) => {
  return (
    <a>
      <Link href={`${path}`}>{name}</Link>
    </a>
  )
}
