import React from "react"
import GatsbyLink from 'gatsby-link'
import Layout from "../components/layouts/Layout"

const Index = () => {
  
  return (
    <Layout>
      <h1>My Landing Page</h1>
      <p>This is my landing page.</p>
      <GatsbyLink to='/about'>About Me</GatsbyLink>
      
    </Layout>
  )
}

export default Index

/**
 * button navigation example
 * import { navigate } from 'gatsby'

 * const triggerNavigation = () => {
    navigate('/about')
  }
 * <button onClick={() => triggerNavigation()}>
        About Me
      </button>
 */