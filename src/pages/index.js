import React from "react"
import GatsbyLink from 'gatsby-link'
import { navigate } from 'gatsby'

const Index = () => {
  const triggerNavigation = () => {
    navigate('/about')
  }
  return (
    <div>
      <h1>My Landing Page</h1>
      <p>This is my landing page.</p>
      <GatsbyLink to='/about'>About Me</GatsbyLink>
      <button onClick={() => triggerNavigation()}>
        About Me
      </button>
    </div>
  )
}

export default Index