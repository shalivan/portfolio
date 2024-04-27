import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCardBio from "../components/postCardBio"

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

{/* 
<figure className="kg-card kg-image-card">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Regular image</figcaption>
          </figure>
*/}

<h6>Research in space and enviroment for realtime engins. Interested in: Art, Culture, Creating new IP's, RnD, Design, Procedural Graphic, Shading, Audio Visuals,  and Fractals. Trying to contribute in non conventional projects, and pushing boundaries. Lately spend too much time in game development. </h6>




<h2>Credits </h2>

<h4>Credited as Art Director</h4>
<h3 id="unordered">
</h3>
<h6>
<ul> 
          <ul>
            <li><strong>Witchfire</strong>  (2024): Art Director</li>
          </ul>   
          <ul>
            <li><strong>The Vanishing of Ethan Carter</strong> (2015): Astronaut</li>
          </ul>          <ul>
            <li><strong>Afterfall</strong>(2012): Art Director</li>
          </ul>          
</ul>
</h6>

<h4>Credited as an Artist</h4>
<h3 id="unordered">
</h3>
<h6>
<ul> 
          <ul>
            <li>NecroVisioN (2009): Artistst</li>
          </ul>
          <ul>
            <li>Kholat (2015)</li>
          </ul>
</ul>
</h6>


<h4>Acknowledgments</h4>
<h6>
<ul>
<ul>
            <li>Superhot (2016)</li>
          </ul>
          <ul>
            <li>Seven: The Days Long Gone (2017)</li>
          </ul>
          <ul>
            <li>MouseCraft (2014)</li>
          </ul>
</ul>
</h6>





<h2>Awards</h2>
<h6>

<ul>
          <ul>
            <li><a href="https://awards.bafta.org/award/2015/games/game-innovation" target="_blank" rel="noopener noreferrer">BAFTA for <strong>Game Innovation </strong></a></li> (2015)
          </ul>            
          
          <ul>
            <li>VMAG for ”Indie 2014” (2014) </li>
          </ul>
          <ul>
            <li>EDGE Award for ”Best Visual Design” </li>
          </ul>
          <ul>
            <li>Digital Dragons for “Best Visual Art”</li>
          </ul>
</ul>
          </h6>





<hr />

  {/* Cards */}

      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCardBio
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>

      

      






  {/* Below cards */}




  <hr />

<h2 id="heading-level-2">Contact</h2>

<hr />





  <p>
  <a href="#"><h3>up</h3></a>. <a href="#"><h3>home</h3></a>.
 </p>


 </div>









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