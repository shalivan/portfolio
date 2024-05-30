import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout"
import Seo from "../components/seo"
// eslint-disable-next-line


const GameAFPage = (props) => {

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


<h6>Afterfall, formerly known as <strong>Bourgeoisie: Pearl of the Wasteland</strong>, started as a concept for an RPG game set in a post-apocalyptic Eastern European setting. It evolved as a fan project and was eventually sold to Nicolas Games S.A., where it devolved into a shooter.
</h6>

I had a pleasure to Art Direct several parts of universe during project lifetime. 



<h2>Lore </h2>
<h6>Post-apo.

</h6>


<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_scr004)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Concept arts done by team.</figcaption>
</figure>






<h2>Trailer </h2>


<iframe width="266" height="151" src="https://www.youtube.com/embed/xUL5yPTW9Gk" title="Afterfall  Insanity  E3 2010   Teaser Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


--- 

Reel showing my involvment in gameplay: 

<iframe title="vimeo-player" src="https://player.vimeo.com/video/35271180?h=8d1d7dcc52" width="640" height="360" frameborder="0"    allowfullscreen></iframe>






         {/*  <div
          className="post-content-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

*/}


</div>
      
 {/*   POST BODY !!!!!!!!!!*/}









          <footer className="post-content-footer">
          </footer>



        </article>


      </Layout>
    );
};

GameAFPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default GameAFPage;

export const GameAFPageQuery = graphql`
  query GameAFPage {
    site {
        siteMetadata {
          title
          social{
            twitter
            facebook
          }
        }
      }
    markdownRemark(frontmatter: {templateKey: {eq: "game_afterfall"}}) {
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
          thumbnail_keyart_sketch {
            childImageSharp {
              gatsbyImageData
            }
          }
        thumbnail_poster {
          childImageSharp {
            gatsbyImageData
          }
        }



        }
        html
      }
  }
`;




