import React from 'react'
import Link from 'next/link'

import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link>
    </nav>
  )
}

export default Navbar