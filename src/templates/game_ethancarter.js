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

<h6>Some of articles I authored for Astro Blog during development:


<h3 id="unordered">
          </h3>
        <ul>
          <ul>
             <li><a href="https://www.theastronauts.com/2013/05/making-of-ethan-carter-at-the-mountains-of-madness/" target="_blank" rel="noopener noreferrer"> <strong>At the Mountains of Madness</strong> - Making of Ethan Carter </a></li>
             <li><a href="https://www.theastronauts.com/2014/02/approached-3d-foliage-vanishing-ethan-carter/" target="_blank" rel="noopener noreferrer"> <strong>2014/02/18 How We Approached 3D Foliage in The Vanishing of Ethan Carter</strong> - Some Unreal3 technical tricks, photogrametry and process </a></li>
            <li><a href="https://www.theastronauts.com/2013/02/the-creative-process-indie-vs-aaa/" target="_blank" rel="noopener noreferrer"> <strong>2013/02/27 The Creative Process: INDIE VS AAA</strong> -  First Astro blog post with my thoughts after moving from +60 team to 5 people studio </a></li>
            </ul>
        </ul>



<h3 id="unordered">
          </h3>
        <ul>
          <ul>
            <li><a href="culture.pl/en/article/polish-game-the-vanishing-of-ethan-carter-awarded-by-bafta" target="_blank" rel="noopener noreferrer"> <strong>Polish Game The Vanishing of Ethan Carter Awarded by BAFTA</strong> - ...</a></li>
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




<h2>Awards </h2>


<h4>Winner </h4>
<h6>


<ul>
            <li><strong>Game Innovation</strong>at The British Academy Video Games Award</li>
            <li><strong>Indie 2014</strong>at VMAG</li>
            <li><strong>Best Visual Design</strong>at EDGE</li>
            <li><strong>Best Visual Art</strong>at Digital Dragons</li>


</ul>

<h4>Nominations:</h4>
<ul>
    <li>PC <strong>GOTY</strong> at Gamespot</li>
    <li><strong>Debut Game</strong> at The British Academy Video Games Award</li>
    <li><strong>New Intellectual Property</strong> at The British Academy Video Games Award</li>
    <li><strong>Best Visual Design</strong> at Golden Joystick Award</li>   
    <li><strong>Outstanding Achievement in Game Direction</strong> at D.I.C.E.</li>
    <li><strong>Outstanding Achievement in Art Direction</strong> at D.I.C.E.</li>
    <li><strong>Adventure Game of the Year</strong> @ D.I.C.E.</li>
    <li><strong>Best Independend</strong> @ The Game Awards</li>
    <li><strong>Excellence in Visual Achievement</strong> @ SXSW Gaming Awards</li>
    <li><strong>Innovation Award</strong> at Game Developers Choice Award</li>
    <li><strong>Best Debiut</strong> at Game Developers Choice Award</li>
    <li><strong>Best Narrative</strong> at Game Developers Choice Award</li>
    <li><strong>Best PC Game</strong> at ING</li>
    <li><strong>Best Graphics-Technology</strong> at ING</li>
    <li><strong>Best Story</strong> at ING</li>
    <li><strong>Best Adventure</strong> at ING</li>
    <li><strong>Best game design</strong> at Digital Dragons</li>
    <li><strong>Best polish game</strong> at Digital Dragons</li>
 
</ul>

<h4>Honorable Mentions:</h4>
<ul>
    <li><strong>Best Visual Art</strong> at Game Developers Choice Award</li>
    <li><strong>Excelent in Graphic</strong> at IGF</li>
    <li>Seumas McNallyGrand Prize at IGF</li>
</ul>


</h6>


The Vanishing of Ethan Carter wins for Game Innovation wins Best Game | BAFTA Games Awards 2015:

<iframe width="2312" height="1017" src="https://www.youtube.com/embed/hFgVQuBDeHU" title="The Vanishing of Ethan Carter wins for Game Innovation wins Best Game | BAFTA Games Awards 2015" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>










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




