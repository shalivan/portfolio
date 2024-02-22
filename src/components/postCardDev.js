import React from "react"
import { Link } from "gatsby"
//    ZAMIAN !!!  ${props.count % 3 (2 w 1 lini) 

export default props => (
  <article
    className={`post-card-dev ${props.count > 4 && `post-card-large-dev`} ${
      props.postClass
    } ${props.node.frontmatter.thumbnail ? `with-image` : `no-image`}`}
    style={
      props.node.frontmatter.thumbnail && {
        backgroundImage: `url(${
          props.node.frontmatter.thumbnail.childImageSharp.fluid.src
        })`,
      }
    }
  >
    <Link to={props.node.fields.slug.split('/').slice(2, -1).join('/') === '' ? '/' : `/${props.node.fields.slug.split('/').slice(2, -1).join('/')}`} className="post-card-link">
      <div className="post-card-content">
        <h2 className="post-card-title">
          {props.node.frontmatter.title }
        </h2>
      </div>
    </Link>
  </article>
)






//import React from "react"
//import { Link } from "gatsby"
//                          ${props.count % 3    className={`post-card ${props.count % 4 === 0 && `post-card-large-cam`} ${
//    className={`post-card ${props.count % 4 === 0 ? `post-card-large` : `` } ${
//  export default props => (
//    <article
//      className={`post-card ${`post-card-large-cam`} ${
//        props.postClass
//      } ${props.node.frontmatter.thumbnail ? `with-image` : `no-image`}`}
//      style={
//        props.node.frontmatter.thumbnail && {
//          backgroundImage: `url(${
//            props.node.frontmatter.thumbnail.childImageSharp.fluid.src
//          })`,
//        }
//      }
//    >
//      <Link to={props.node.fields.slug.split('/').slice(2, -1).join('/') === '' ? '/' : `/${props.node.fields.slug.split('/').slice(2, -1).join('/')}`} className="post-card-link">
//        <div className="post-card-content">
//          <h2 className="post-card-title">
//            {props.node.frontmatter.title }
//          </h2>
//        </div>
//      </Link>
//    </article>
//  )