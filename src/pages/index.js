import React from "react"
import GatsbyLink from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from "../components/layouts/Layout"

// resultant data from GraphQL query is passed into 
// our page component via the data prop
const Index = ({ data }) => {
  // use the data contained within the query 
  const {
    site: {
      siteMetadata: { name, role },
    },
  } = data;
  
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-16 lg:py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-black pb-4">{name}</h1>
        <p className="mb-4">{role}</p>
        <GatsbyLink 
          className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
          to='/about'>About Me</GatsbyLink>
      </div>
    </Layout>
  )
}

export default Index

// this is run when Gatsby builds page
export const query = graphql`
  {
    site {
      siteMetadata {
        name
        role
      }
    }
  }
`

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