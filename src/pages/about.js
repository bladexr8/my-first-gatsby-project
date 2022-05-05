import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../components/layouts/Layout'

const About = () => {
  const triggerNavigation = () => {
    navigate('/')
  }
  return (
    <Layout>
      <h1>My About Page</h1>
      <p>This is a sentence about me.</p>
      <button onClick={() => triggerNavigation()}>
        Home Page
      </button>
    </Layout>
  )
}

export default About