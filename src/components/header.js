import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import Image from './image'

const Header = ({headerImage}) => (
  <div
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    <Img title="header" sizes={headerImage.sizes}/>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        br
        </Link>
      </h1>
    </div>
  </div>
)


Header.defaultProps = {
  headerImage: ``,
}

export default Header
