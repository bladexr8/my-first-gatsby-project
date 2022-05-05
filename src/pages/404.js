import GatsbyLink from 'gatsby-link'
import React from 'react'
import Layout from '../components/layouts/Layout'

const NotFound = () => {
  return (
    <Layout>
      <h1>Oh no!</h1>
      <p>The page you were looking for does not exist!.</p>
      <GatsbyLink to='/'>Take me home</GatsbyLink>
    </Layout>
  )
}

export default NotFound