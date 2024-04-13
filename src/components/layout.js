import React from "react"
import { Link } from "gatsby"
import { useLocation } from '@reach/router';

const Layout = props => {
  const data = useLocation()
  const { title, children, social } = props
  // const path = props&&props.location&&props.location

 // >?Addcategory
  // contct example 
              //  <li className={`nav-home  ${data.pathname.includes('/contact') ? 'nav-current' : ""} `} role="menuitem">
              //  <Link to={`/contact`}>projects</Link>
              //  </li>

  // formating  example 
               // <li className={`nav-home  ${data.pathname.includes('/elements') ? 'nav-current' : ""} `} role="menuitem">
                //  <Link to={`/elements`}>typo</Link>
               // </li>

  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
            <li className={`nav-home  ${data.pathname === '/' ? 'nav-current' : ""} `} role="menuitem">
                <Link to={`/`}>Home</Link>
              </li>
              
              <li className={`nav-home  ${data.pathname.includes('/dev') ? 'nav-current' : ""} `} role="menuitem">
                <Link to={`/dev`}>real time</Link>
              </li>


              
              <li className={`nav-home  ${data.pathname.includes('/cam') ? 'nav-current' : ""} `} role="menuitem">
                <Link to={`/cam`}>photo</Link>
              </li>

              <li className={`nav-home  ${data.pathname.includes('/pro') ? 'nav-current' : ""} `} role="menuitem">
                <Link to={`/pro`}>cg</Link>
              </li>

              <li className={`nav-home  ${data.pathname.includes('/typo') ? 'nav-current' : ""} `} role="menuitem">
                <Link to={`/typo`}>typo</Link>
              </li>


              <li className={`nav-home  ${data.pathname.includes('/bio') ? 'nav-current' : ""} `} role="menuitem">
                <Link to={`/bio`}>bio</Link>
              </li>

            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <Link
                to={`https://facebook.com/${social.facebook}`}
                title="X"
                target="_blank"
                rel="noopener noreferrer"
              >
                Artstation
              </Link>
              <Link
                to={`https://instagram.com/${social.twitter}`}
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </Link>

              
              <Link
                to={`https://github.com/lilxyzz/gatsby-clay`}
                title="Artstation"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>

              
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Built with {""}
        <a
          href="https://gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
        Gatsby
        </a>
         
      </footer>
    </div>
  )
}

export default Layout
