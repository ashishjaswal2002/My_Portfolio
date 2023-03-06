import React from 'react'
import { Link } from 'react-router-dom'
export const OpenNavBar = () => {
  return (
    <div>
     <Link to='/'>
        Home
     </Link>
     <Link to='/'>
        Projects
     </Link>
     <Link to='/'>
        Blog
     </Link>
    </div>
  )
}
