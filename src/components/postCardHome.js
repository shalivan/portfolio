import React from "react"
import { Link } from "gatsby"
//    ZAMIAN !!!  ${props.count % 3 (2 w 1 lini) 

export default props => (
  <article
  className={`${props.count === 1 ? "post-card-bio" : props.count === 2 || props.count === 3 ? "post-card-dev" : props.count === 4 ? "post-card-cover" : "post-card-large"} ${
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
