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
<h6>Witchfire was presented at <strong>The Game Award Show 2017</strong> revealing our <strong>new IP</strong> which is second <strong>Astronauts</strong> title. We wanted to maintain a mystical atmosphere combined with dynamic and fun gameplay. Early Access was delivered in 2023 with a 12-person team, and available now on Steam & the Epic Games Store. 
</h6>
  <center>
             <a href="https://store.steampowered.com/app/3156770/Witchfire/" target="_blank" rel="noopener noreferrer" className="button primary">
              Steam
              </a> 
                 &nbsp;&nbsp;&nbsp;  / &nbsp;&nbsp;&nbsp; 
              <a href="https://store.epicgames.com/en-US/p/witchfire-db273e" target="_blank" rel="noopener noreferrer" className="button primary">
              Epic Games Store
              </a> 

  </center>
  <figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_scr002)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Raw Engine Footage by Adam Bryła</figcaption>
  </figure>
<h2>Lore </h2>
  <h6>Armed with strange weapons and forbidden pagan magic, hunt a powerful witch holding the key to your salvation. Witchfire is a dark fantasy first person shooter.</h6>
  <figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_scr003)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Raw Engine Footage by Digital Frontiers. </figcaption>
  </figure>
<h2>Articles </h2>
  <h6>My contributions to the Astronauts blog during Witchfire development include a selection of articles I authored:
  <h3 id="unordered">
          </h3>
        <ul>
          <ul>
            <li><a href="https://www.theastronauts.com/2019/03/art-direction-wallpapers/" target="_blank" rel="noopener noreferrer"> <strong>Art Direction Note</strong> - where I tackle inspirations and choices behind our art direction decisions</a>       
  </li>
          </ul>
        </ul>
  </h6>

<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_keyart_sketch)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Key Art sketches by Snapfingers.</figcaption>
</figure>



<h2>Awards </h2>
<h6>
Even though the game is in early access, we were nominated for some awards:
</h6>
<h6>Nominee
  <h3 id="unordered">
          </h3>
          <ul>
          <ul>
            <li><strong>Best game design</strong> at Digital Dragons</li>
          </ul>
          <ul>
            <li><strong>Best game art</strong> at Digital Dragons</li>
          </ul>
          </ul>
  </h6>

      {/* <hr />
      <figure className="post-content-image-game">
                <GatsbyImage
                      image={getImage(post.frontmatter.thumbnail_scr001)}
                      className="kg-image"
                      alt={post.frontmatter.title} />
                  <figcaption>InEngine Footage by Adam Bryła </figcaption>
      </figure>
      */}

      {/*
      <figure className="post-content-image-game">
                <GatsbyImage
                      image={getImage(post.frontmatter.thumbnail_poster)}
                      className="kg-image"
                      alt={post.frontmatter.title} />
                  <figcaption>Witchfire posters by various artists.</figcaption>
      </figure>
      */}


<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_scr001)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Raw Engine Footage by Adam Bryła</figcaption>
</figure>



<h2>Written About Us</h2>



          <h5 id="blockquote">
            <strong>IGN - Jarrett Green</strong>
          </h5>
          <blockquote>
          “I am firmly caught in the spell of this black magic banger.”
          </blockquote>




<h2>Media </h2>
  <h6>

  <ul>
          <ul>
            <li><a href="https://www.youtube.com/-zqjNkdXT94" target="_blank" rel="noopener noreferrer"> <strong></strong> Trailer  that revealed the game at The Game Awards 2019 gala.</a>       
            </li>
            <li><a href="https://youtu.be/QsRX_hGy33A" target="_blank" rel="noopener noreferrer"> <strong></strong> Witchfire - The Wailing Tower Update Teaser.</a>       
            </li>
            <li><a href="https://youtu.be/UM8JVyKtzuI" target="_blank" rel="noopener noreferrer"> <strong></strong> Witchfire - NVIDIA CES 2023.</a>       
            </li>
            
          </ul>
          <ul>
          </ul>
          </ul>

  
  </h6>



 {/* 

TWEEETY NA WYPADEK JAK BY BYŁO API 
https://x.com/TheAstroCrew/status/1823105934702288918

*/}
  





         {/* <iframe width="720"  className="player" height="405" src="https://www.youtube.com/embed/-zqjNkdXT94" title="Witchfire Teaser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 */}
         {/*  <div
          className="post-content-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        */}


</div>
      
 {/*   POST BODY !!!!!!!!!!*/}




          <footer className="author-meta">
          <a href="#">&#x27A4; &#x2794; &#x21a2; &#x279C; &#x27A4; back  &#x21a3; next &#x21de; up &#10602;  &#x21e7; </a>  &nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;<a href="/portfolio/">home &#x21e7; &#x290A; </a>  &nbsp;&nbsp;&nbsp;   | &nbsp;&nbsp;&nbsp;  <a href="/portfolio/games/TheVanishingOfEthanCarter/"> previous game </a>
          
          
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




