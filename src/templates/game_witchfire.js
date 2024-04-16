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
          image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images.fallback.src}

        />













        
      <article
        className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
      >

<header className="post-content-header">

          <h1 className="post-content-title">Witchfire</h1>
        </header>




        {post.frontmatter.description && (
          <p className="post-content-excerpt">{post.frontmatter.description}</p>
        )}





<div className="post-content">
      
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
<figure className="kg-card kg-image-card kg-width-wide">
          <GatsbyImage
                image={getImage(post.frontmatter.thumbnail)}
                className="kg-image"
                alt={post.frontmatter.title} />
            <figcaption>Regular image</figcaption>
</figure>



<hr />



          <h2 id="blockquote">
            <strong>Blockquote</strong>
          </h2>
          <blockquote>
            Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan faucibus. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis.
          </blockquote>
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




          <hr />

          <div
          className="post-content-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />





          <h2 id="table">Table</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Item 1</td>
                <td>Ante turpis integer aliquet porttitor.</td>
                <td>29.99</td>
              </tr>
              <tr>
                <td>Item 2</td>
                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                <td>19.99</td>
              </tr>
              <tr>
                <td>Item 3</td>
                <td> Morbi faucibus arcu accumsan lorem.</td>
                <td>29.99</td>
              </tr>
              <tr>
                <td>Item 4</td>
                <td>Vitae integer tempus condimentum.</td>
                <td>19.99</td>
              </tr>
              <tr>
                <td>Item 5</td>
                <td>Ante turpis integer aliquet porttitor.</td>
                <td>29.99</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2} />
                <td>100.00</td>
              </tr>
            </tfoot>
          </table>
          <hr />
          <h2 id="buttons">Buttons</h2>
          <ul className="actions">
            <li>
              <a href="#" className="button primary">
                Primary
              </a>
            </li>
            <li>
              <a href="#" className="button">
                Default
              </a>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <a href="#" className="button primary large">
                Large
              </a>
            </li>
            <li>
              <a href="#" className="button">
                Default
              </a>
            </li>
            <li>
              <a href="#" className="button small">
                Small
              </a>
            </li>
          </ul>
          <ul className="actions fit">
            <li>
              <a href="#" className="button primary fit">
                Fit
              </a>
            </li>
            <li>
              <a href="#" className="button fit">
                Fit
              </a>
            </li>
          </ul>
          <ul className="actions fit small">
            <li>
              <a href="#" className="button primary fit small">
                Fit + Small
              </a>
            </li>
            <li>
              <a href="#" className="button fit small">
                Fit + Small
              </a>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <span className="button primary disabled">Primary</span>
            </li>
            <li>
              <span className="button disabled">Default</span>
            </li>
          </ul>
          <hr />
          <h2 id="forms">Forms</h2>
          <form method="post" action="#">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="demo-name"
                  id="demo-name"
                  defaultValue
                  placeholder="Name"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="demo-email"
                  id="demo-email"
                  defaultValue
                  placeholder="Email"
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <select name="demo-category" id="demo-category">
                  <option value>- Category -</option>
                  <option value={1}>Manufacturing</option>
                  <option value={1}>Shipping</option>
                  <option value={1}>Administration</option>
                  <option value={1}>Human Resources</option>
                </select>
              </div>
              {/* Break */}
              <div className="col-4 col-12-small">
                <input
                  type="radio"
                  id="demo-priority-low"
                  name="demo-priority"
                  defaultChecked
                />
                <label htmlFor="demo-priority-low">Low</label>
              </div>
              <div className="col-4 col-12-small">
                <input
                  type="radio"
                  id="demo-priority-normal"
                  name="demo-priority"
                />
                <label htmlFor="demo-priority-normal">Normal</label>
              </div>
              <div className="col-4 col-12-small">
                <input
                  type="radio"
                  id="demo-priority-high"
                  name="demo-priority"
                />
                <label htmlFor="demo-priority-high">High</label>
              </div>
              {/* Break */}
              <div className="col-6 col-12-small">
                <input type="checkbox" id="demo-copy" name="demo-copy" />
                <label htmlFor="demo-copy">Email me a copy</label>
              </div>
              <div className="col-6 col-12-small">
                <input
                  type="checkbox"
                  id="demo-human"
                  name="demo-human"
                  defaultChecked
                />
                <label htmlFor="demo-human">I am a human</label>
              </div>
              {/* Break */}
              <div className="col-12">
                <textarea
                  name="demo-message"
                  id="demo-message"
                  placeholder="Enter your message"
                  rows={6}
                  defaultValue={""}
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" defaultValue="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
          <hr />
          <h2 id="code">Code</h2>
          <pre>
            <code>
              i = 0;{"\n"}
              {"\n"}while (!deck.isInOrder()) {"{"}
              {"\n"}
              {"    "}print 'Iteration ' + i;{"\n"}
              {"    "}deck.shuffle();{"\n"}
              {"    "}i++;{"\n"}
              {"}"}
              {"\n"}
              {"\n"}print 'It took ' + i + ' iterations to sort the deck.';
            </code>
          </pre>
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