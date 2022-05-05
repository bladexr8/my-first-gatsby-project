import React from 'react'
import { navigate } from 'gatsby'

const About = () => {
  const triggerNavigation = () => {
    navigate('/')
  }
  return (
    <div>
      <h1>My About Page</h1>
      <p>This is a sentence about me.</p>
      <button onClick={() => triggerNavigation()}>
        Home Page
      </button>
    </div>
  )
}

export default About