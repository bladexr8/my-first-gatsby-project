import React from 'react'
import { navigate } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layouts/Layout'

const About = ({ data }) => {
  
  const {
    markdownRemark: { html },
  } = data;
  
  const triggerNavigation = () => {
    navigate('/')
  }
  
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-16 lg:py-24 text-center">
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
        <button
          className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          onClick={() => triggerNavigation()}>
          Home Page
        </button>
      </div>
    </Layout>
  )
}

export default About

export const query = graphql`
  {
    markdownRemark(frontmatter: { type: { eq: "bio" }
 }) {
      html
    }
  }
`;
