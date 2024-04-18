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
        className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
      >

<header className="post-content-header">

         <h1 className="post-content-title">{post.frontmatter.title}</h1>
         {/*<h1 className="post-content-title">Witchfire</h1>*/}
        </header>

        {post.frontmatter.description && (
          <p className="post-content-excerpt">{post.frontmatter.description}</p>
        )}


{/* THUMB BEFORE BODY  */}






{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}


{/*   #######################################  thumbnail removed */}
{/*        {post.frontmatter.thumbnail && (
          <div className="post-content-image">
            <GatsbyImage
              image={getImage(post.frontmatter.thumbnail)}
              className="kg-image"
              alt={post.frontmatter.title} />
          </div>
        )} 
*/}




{post.frontmatter.thumbnails && post.frontmatter.thumbnails.map((thumbnail, index) => (
  <div key={index} className="post-content-image">
    <GatsbyImage
      image={getImage(post.frontmatter.thumbnail)}
      className="kg-image"
      alt={post.frontmatter.title}
    />
  </div>
))}




<GatsbyImage
                image={getImage(post.frontmatter.thumbnail)}
                className="kg-image"
                alt={post.frontmatter.title} />


{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}{/* POST CONTENT  */}

XXXXX

<figure className="kg-card kg-image-card kg-width-wide">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Witchfire keyart </figcaption>
</figure>

{/*   #######################################  body html from md */}


IMG XXXD


<div className="post-content">
<figure className="kg-card kg-image-card kg-width-wide">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Witchfire keyart </figcaption>
</figure>


<h6>Witchfire was presented on <strong>The Game Award Show 2017</strong> revealing our <strong>new IP</strong>  which is second <strong>Astronauts</strong> title. We want to maintain mystical atmosphere combined with dynamic and fun gameplay. </h6>


<h2 id="blockquote">
            <strong>Blockquote</strong>
          </h2>
          <blockquote>
          Witchfire was presented on <strong>The Game Award Show 2017</strong> revealing our <strong>new IP</strong>  which is second <strong>Astronauts</strong> title. We want to maintain mystical atmosphere combined with dynamic and fun gameplay. 

          </blockquote>
          <hr />



Armed with strange weapons and forbidden pagan magic, hunt a powerful witch holding the key to your salvation. Witchfire is a dark fantasy first person shooter.

## Game Awards Trailer \


<iframe width="720" src="https://www.youtube.com/embed/-zqjNkdXT94" title="Witchfire Teaser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



{/* width="1053" height="601" */}








<hr />
## Image 1 GatsbyImage
<figure className="kg-card kg-image-card">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnailx)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Regular image</figcaption>
</figure>


## Image 1 GatsbyImage xxx old
<figure className="kg-card kg-image-card">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Regular image</figcaption>
</figure>

## Image 1 GatsbyImage xx1 old
<figure className="kg-card kg-image-card">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Regular image</figcaption>
</figure>

## Image 1 GatsbyImage xx2 old
<figure className="kg-card kg-image-card">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Regular image</figcaption>
</figure>

## Image 1 GatsbyImage xx3 old



<hr />



          <h2 id="images">Images</h2>

          ## Image 2 img src

          <img src="dev/CoverWF01.jpg" alt="Witchfire Key Art"></img>

<p>Witchfire was presented on <strong>The Game Award Show 2017</strong> revealing our <strong>new IP</strong> which is second <strong>Astronauts</strong> title. We want to maintain mystical atmosphere combined with dynamic and fun gameplay.</p>


## Image 3 
<img src="/img/dev/games/12-copy-1.jpg" alt="Digital Frontiers screenshots"></img>
<p>Screen by: Digital Frontiers</p>

<p>Armed with strange weapons and forbidden pagan magic, hunt a powerful witch holding the key to your salvation. Witchfire is a dark fantasy first person shooter.</p>

<h2>Game Awards Trailer</h2>


<h1>HTML</h1>

          <hr />

          <div
          className="post-content-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />






          <hr />
          <h2 id="grid-system">Grid system</h2>
          <div className="row">
            <div className="col-12">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                12
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                3
              </div>
            </div>
            <div className="col-9">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                9
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                6
              </div>
            </div>
            <div className="col-6">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                6
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
          </div>
          <div className="row">

          </div>
        </div>
      
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