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



<header className="post-content-header">

         <h1 className="post-content-title">Artist</h1>
         {/*<h1 className="post-content-title">Witchfire</h1>*/}
        </header>


  {/* BODY OF PAGE */}
  {/* Above cards */}


<div className="post-content">


<figure className="kg-card kg-image-card">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Regular image</figcaption>
          </figure>

          
<h6>Research in space and enviroment for realtime engins. Interested in: Art, Culture, Creating new IP's, RnD, Design, Procedural Graphic, Shading, Audio Visuals,  and Fractals. Trying to contribute in non conventional projects, and pushing boundaries. Lately spend too much time in game development. </h6>





          <hr />

          <h2 id="heading-level-2">Contact:  </h2>

          <hr />


<h2>Credits </h2>

<h4>Credited in:</h4>
<h3 id="unordered">
          </h3>
          <ul>
            <li>The Vanishing of Ethan Carter (2015): The Astronauts</li>
          </ul>          <ul>
            <li>Afterfall: InSanity(2012): Art Director</li>
          </ul>          <ul>
            <li>NecroVisioN (2009): Environment Artistst</li>
          </ul>

<h4>Special Thanks:</h4>
<ul>
            <li>Seven: The Days Long Gone (2017)</li>
          </ul>
          <ul>
            <li>Superhot (2016)</li>
          </ul>
          <ul>
            <li>Kholat (2015)</li>
          </ul>
          <ul>
            <li>MouseCraft (2014)</li>
          </ul>


<h2>Awards</h2>


<hr />

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

      </div>







  {/* Below cards */}


  <p>
  <a href="#"><h3>up</h3></a>. <a href="#"><h3>home</h3></a>.
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