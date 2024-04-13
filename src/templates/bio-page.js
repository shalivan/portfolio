import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCardTypo from "../components/postCardTypo"

// eslint-disable-next-line
const WorkPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const social = data.site.siteMetadata.social
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle} social={social}>
      <Seo keywords={[`Gatsby Theme`, `Free Gatsby Template`, `Clay Gatsby Theme`]}
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.description || ''}
        image={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid.src}

      />

      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
        </header>
      )}





  {/* BODY OF PAGE */}
  {/* Above cards */}


<div className="post-content">

  


          <h2 id="blockquote">
            <strong>Artist / Art Director</strong>
          </h2>
          <blockquote>
Research in space and enviroment for realtime engins. Interested in: Art, Culture, Creating new IP's, RnD, Design, Procedural Graphic, Shading, Audio Visuals,  and Fractals. Trying to contribute in non conventional projects, and pushing boundaries. Lately spend too much time in game development. 

          </blockquote>
          <hr />
          
          <h2 id="heading-level-2">Software:  </h2>

          Here is some of great tech I'm used to use and explore on daily basis:

          <img src="/img/dev/adam-bryla-2.jpg" alt="Additional Image" />

          <hr />

          <h2 id="heading-level-2">Contact:  </h2>

          <hr />




</div>



  {/* Cards */}

      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCardTypo
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>


  {/* Below cards */}


  <p>
            This is{" "}
            <strong>
              <strong>bold</strong>
            </strong>{" "}
            and this is{" "}
            <strong>
              <strong>strong</strong>
            </strong>
            . This is{" "}
            <em>
              <em>italic</em>
            </em>{" "}
            and this is{" "}
            <em>
              <em>emphasized</em>
            </em>
            . This is <sup>superscript</sup>text and this is{" "}
            <sub>subscript</sub> text. This is <u>underlined</u> and this is
            code:{" "}
            <code>
              for (;;) {"{"} ... {"}"}
            </code>
            . Finally, this is a <a href="#">link</a>.
          </p>












    </Layout>
  )
}
export default WorkPage
export const WorkPageQuery = graphql`
query IndexPage {
  site {
    siteMetadata {
      title
      author
      social{
        twitter
        facebook
      }
    }
  }
  markdownRemark(frontmatter: {templateKey: {eq: "bio-page"}}) {
    frontmatter {
      title
      description
      thumbnail {
        childImageSharp {
          fluid(maxWidth: 1360) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    
  }
  allMarkdownRemark(
    filter: {frontmatter: {templateKey: {eq: "bio-sub-page"}}}
    limit: 30
    sort: {frontmatter: {date: DESC}}
  ) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD:MM:YYYY hh:mm a")
          title
          description
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 1360) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`;