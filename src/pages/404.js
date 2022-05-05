import GatsbyLink from 'gatsby-link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h1>Oh no!</h1>
      <p>The page you were looking for does not exist!.</p>
      <GatsbyLink to='/'>Take me home</GatsbyLink>
    </div>
  )
}

export default NotFound