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
      <button
        className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border-2 border-purple-400 text-purple-500 hover:bg-purple-600 hover:text-white"
        onClick={() => triggerNavigation()}>
        Home Page
      </button>
    </Layout>
  )
}

export default About