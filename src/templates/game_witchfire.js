import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout"
import Seo from "../components/seo"
// eslint-disable-next-line


const GameWFPage = (props) => {

// JAK NIE ZADZIAŁA TO MOZANA USTAWI MANUALNIEL   const siteTitle = "Your Static Title Here";
// <h1 className="post-content-title">{post.frontmatter.title}</h1>
  const siteTitle = props.data.site.siteMetadata.title

    const { markdownRemark: post, site } = props.data;

    return (
        <Layout location={props.location} title={siteTitle } social={site.siteMetadata.social}>
        <Seo keywords={[`Gatsby Theme`, `Free Gatsby Template`, `Clay Gatsby Theme`]}
          title={post.frontmatter.title}
          description={post.frontmatter.description || ''}
          image={post.frontmatter.thumbnail ? post.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images.fallback.src : null}
          // {/* TAK BYLO: image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images.fallback.src} */}
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
                image={getImage(post.frontmatter.thumbnail)}
                className="kg-image"
                alt={post.frontmatter.title} />
            </div>
          )} 








{/* THUMB BEFORE BODY  */}




{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}


{/*   #######################################  POST CONTENT */}

<div className="post-content">


<h6>Witchfire was presented on <strong>The Game Award Show 2017</strong> revealing our <strong>new IP</strong>  which is second <strong>Astronauts</strong> title. We want to maintain mystical atmosphere combined with dynamic and fun gameplay. </h6>



<h4>Game Backstory</h4>
<h6>Armed with strange weapons and forbidden pagan magic, hunt a powerful witch holding the key to your salvation. Witchfire is a dark fantasy first person shooter.</h6>

<hr />

<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnailx)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Regular image</figcaption>
</figure>


<h2>Articles </h2>

<h6>A selection of articles authored for the Astro Blog:


<h3 id="unordered">
          </h3>
          <ul>
            <li><a href="https://www.theastronauts.com/2019/03/art-direction-wallpapers/" target="_blank" rel="noopener noreferrer">Art Direction Note</a></li>
          </ul>

</h6>




<h2>Game Awards Trailer </h2>


<iframe width="720" height="405" src="https://www.youtube.com/embed/-zqjNkdXT94" title="Witchfire Teaser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


<hr />

<h2>Store </h2>

<center>

              <a href="https://store.epicgames.com/en-US/p/witchfire-db273e" target="_blank" rel="noopener noreferrer" className="button primary">
              Epic Games Store
              </a>

              </center>

<hr />


## Image 1 GatsbyImage
<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnailx)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Regular image</figcaption>
</figure>


<h2>Awards </h2>

Nominee: 

- DD 24 - 


<hr />


          <hr />

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

GameWFPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default GameWFPage;

export const GameWFPageQuery = graphql`
  query GameWFPage {
    site {
        siteMetadata {
          title
          social{
            twitter
            facebook
          }
        }
      }
    markdownRemark(frontmatter: {templateKey: {eq: "game_witchfire"}}) {
        frontmatter {
          title
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData
            
            }
          }


          thumbnailx {
            childImageSharp {
              gatsbyImageData
            }
          }



        }
        html
      }
  }
`;