import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout"
import Seo from "../components/seo"
// eslint-disable-next-line


const GameAPage = (props) => {

// JAK NIE ZADZIAŁA TO MOZANA USTAWI MANUALNIEL   const siteTitle = "Your Static Title Here";
// <h1 className="post-content-title">{post.frontmatter.title}</h1>
  const siteTitle = props.data.site.siteMetadata.title

    const { markdownRemark: post, site } = props.data;

    return (
        <Layout location={props.location} title={siteTitle } social={site.siteMetadata.social}>
        <Seo keywords={[`Gatsby Theme`, `Free Gatsby Template`, `Clay Gatsby Theme`]}
          title={post.frontmatter.title}
          description={post.frontmatter.description || ''}
          //image={post.frontmatter.thumbnail ? post.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images.fallback.src : null}
          //image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images.fallback.src} 
        />        







<article
        className={`post-content-game ${post.frontmatter.thumbnail || `no-image`}`}
      >

 <header className="post-content-header">
 <h1 className="post-content-title">{post.frontmatter.title}</h1>    {/*<h1 className="post-content-title">Witchfire</h1>*/}
 </header>

        {post.frontmatter.description && (
          <p className="post-content-excerpt">{post.frontmatter.description}</p>
        )
      }

          {post.frontmatter.thumbnail && (
            <div className="post-content-image-game">
              <GatsbyImage
                image={getImage(post.frontmatter.featuredimage)}
                className="kg-image"
                alt={post.frontmatter.title} />
            </div>
          )} 








{/* THUMB BEFORE BODY  */}




{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}


{/*   #######################################  POST CONTENT */}

<div className="post-content">
<h6>
The Awakening is an unpublished concept game that combines the aesthetics of theater and dreams, where unconscious choices shape the world around us and lead through a world of light and sound.
</h6>
<center>



</center>



<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_scr001)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption></figcaption>
</figure>



<h2>Lore</h2>



<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_scr003)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption></figcaption>
</figure>



-------------


<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_scr002)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption></figcaption>
</figure>




<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_scr004)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption></figcaption>
</figure>

<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_scr005)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption></figcaption>
</figure>

<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_scr006)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption></figcaption>
</figure>

<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_scr007)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption></figcaption>
</figure>

























</div>














      
 {/*   POST BODY !!!!!!!!!!*/}



          <footer className="post-content-footer">
          </footer>



        </article>


      </Layout>
    );
};

GameAPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default GameAPage;

export const GameAPageQuery = graphql`
  query GameAPage {
    site {
        siteMetadata {
          title
          social{
            twitter
            facebook
          }
        }
      }
    markdownRemark(frontmatter: {templateKey: {eq: "game_awakening"}}) {
        frontmatter {
          title
          description


          thumbnail {
            childImageSharp {
              gatsbyImageData
            
            }
          }


          thumbnail_scr001 {
            childImageSharp {
              gatsbyImageData
            }
          }
          thumbnail_scr002 {
            childImageSharp {
              gatsbyImageData
            }
          }
          
          thumbnail_scr003 {
            childImageSharp {
              gatsbyImageData
            }
          }
          featuredimage {
            childImageSharp {
              gatsbyImageData
            }
          }

          thumbnail_scr004 {
            childImageSharp {
              gatsbyImageData
            }
          }

          thumbnail_scr005 {
            childImageSharp {
              gatsbyImageData
            }
          }


          
          thumbnail_scr006 {
            childImageSharp {
              gatsbyImageData
            }
          }


          
          thumbnail_scr007 {
            childImageSharp {
              gatsbyImageData
            }
          }

          



        }
        html
      }
  }
`;




