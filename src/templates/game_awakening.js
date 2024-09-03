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
The Awakening, is never published concept game that reasemble theater concer gig and dream asthetic and philosophy </h6>
<center>

<a href="https://store.steampowered.com/app/258520/The_Vanishing_of_Ethan_Carter" target="_blank" rel="noopener noreferrer" className="button primary">
              Steam 
              </a> 
              <a href="https://store.epicgames.com/pl/p/the-vanishing-of-ethan-carter" target="_blank" rel="noopener noreferrer" className="button primary">
              Epic Game store 
              </a> 

              

</center>
<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption></figcaption>
</figure>

<h2>Lore</h2>

<h6>
You play the game as Paul Prospero, an occult-minded detective who receives a disturbing letter from Ethan Carter. Realizing the boy is in grave danger, Paul arrives at Ethan’s home of Red Creek Valley, where things turn out to be even worse than he imagined. Ethan has vanished in the wake of a brutal murder, which Paul quickly discerns might not be the only local murder worth looking into.
</h6>

<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_scr001)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption></figcaption>
</figure>

<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_scr002)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption></figcaption>
</figure>

<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_scr003)}
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




