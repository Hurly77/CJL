import React from 'react'
import { Footer, NavBar } from '@/layout/*'

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer content={"hello world"} />
    </div>
  )
}

export default Layout
