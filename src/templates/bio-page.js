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


<div className="post-content">XXxx 

asdawda   

<h2 id="images">Images</h2>
          <figure className="kg-card kg-image-card">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Regular image</figcaption>
          </figure>
          <figure className="kg-card kg-image-card kg-width-wide">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Large image</figcaption>
          </figure>
          <figure className="kg-card kg-image-card kg-width-full">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Full bleed image</figcaption>
          </figure>



          <h1 id="heading-level-1">Heading Level 1</h1>
          <h2 id="heading-level-2">Heading Level 2</h2>
          <h3 id="heading-level-3">Heading Level 3</h3>
          <h4 id="heading-level-4">Heading Level 4</h4>
          <h5 id="heading-level-5">Heading Level 5</h5>
          <h6 id="heading-level-6">Heading Level 6</h6>
          <hr />
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


          <h2 id="blockquote">
            <strong>Typography</strong>
          </h2>




          <blockquote>
            Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan faucibus. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis.
          </blockquote>
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