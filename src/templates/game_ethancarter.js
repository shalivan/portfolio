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
          image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images.fallback.src} 
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


<h6>
The Vanishing of Ethan Carter was created inhouse by <strong>8 people</strong> team and is <strong>first IP by The Astronauts</strong>. Originaly we made it in Unreal 3, was later ported to Unreal 4 at PC, Xbox, Playstation and Nintendo Switch. With oneiric atmosphere and visuals that takes you to magical valley of Red Creek which was inspired by traditional Poland  scenery. Game was recived verry  warmly with <strong>83 metascore</strong> and end up with over <strong>a million of copies sold</strong>. Also recive few prestige awards nominations and was honored with the <strong>BAFTA award</strong> in Game Innovation category. Some of my deeper development thoughts can be found on those few Astro blogposts: 
</h6>


<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_scr002)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>InEngine Footage by Adam Bryła</figcaption>
</figure>



<center>

              <a href="https://store.steampowered.com/app/258520/The_Vanishing_of_Ethan_Carter" target="_blank" rel="noopener noreferrer" className="button primary">
              STEAM
              </a>

</center>




<h2>Articles </h2>

<h6>Some of my articles i wrote for Astro Blog:


 

- []()   
- []()
- []()  


Article form Culture magazine:
- At []( )  


<h3 id="unordered">
          </h3>
        <ul>
          <ul>
            <li><a href="https://www.theastronauts.com/2013/02/the-creative-process-indie-vs-aaa/" target="_blank" rel="noopener noreferrer"> <strong>The Creative Process: INDIE VS AAA</strong> - ...</a></li>
            <li><a href="https://www.theastronauts.com/2014/02/approached-3d-foliage-vanishing-ethan-carter/" target="_blank" rel="noopener noreferrer"> <strong>How We Approached 3D Foliage in The Vanishing of Ethan Carter</strong> - ...</a></li>
            <li><a href="https://www.theastronauts.com/2013/05/making-of-ethan-carter-at-the-mountains-of-madness/" target="_blank" rel="noopener noreferrer"> <strong>At the Mountains of Madness</strong> - ...</a></li>
          </ul>
        </ul>

</h6>

<h3 id="unordered">
          </h3>
        <ul>
          <ul>
            <li><a href="culture.pl/en/article/polish-game-the-vanishing-of-ethan-carter-awarded-by-bafta" target="_blank" rel="noopener noreferrer"> <strong>Polish Game The Vanishing of Ethan Carter Awarded by BAFTA</strong> - ...</a></li>
</ul>
        </ul>

<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_keyart_sketch)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Key Art sketches by Snapfingers.</figcaption>
</figure>








<h2>Awards </h2>

Even though the game is in early access, we were nominated for some awards:
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


<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_scr003)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>InEngine Footage by Digital Frontiers. </figcaption>
</figure>

{/* <hr />

<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_scr001)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>InEngine Footage by Adam Bryła </figcaption>
</figure>
*/}
<h2>Lore </h2>

<h6>Armed with strange weapons and forbidden pagan magic, hunt a powerful witch holding the key to your salvation. Witchfire is a dark fantasy first person shooter.</h6>


<figure className="post-content-image-game">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail_poster)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Witchfire posters by various artists.</figcaption>
</figure>





<h2>Trailers </h2>

Trailer  that revealed the game at The Game Awards gala:

<iframe width="720"  className="player" height="405" src="https://www.youtube.com/embed/-zqjNkdXT94" title="Witchfire Teaser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>









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




