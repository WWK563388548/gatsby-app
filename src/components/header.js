import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../style/header.css';

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img width="64" src={require("../images/logo3.png")} />
      </Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/donate">
        <button>Donate</button>
      </Link>
  </div>
</div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
