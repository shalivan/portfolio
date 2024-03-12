import React from "react"
import { Link } from "gatsby"
//    ZAMIAN !!!  ${props.count % 3 (2 w 1 lini) 

export default props => (
  <article
 //  className={`${props.count === 1 ? "post-card-biosq" : props.count === 2 || props.count === 3 ? "post-card-dev" : props.count === 3 ? "post-card-cam" : "post-card-cover"} ${
  // className={`post-card ${props.count % 3 === 0 && `post-card-cover`} ${

  className={`post-card ${props.count % 3 === 0 ? 'post-card-twosquares-min' : 'post-card-cover' } ${
 
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
