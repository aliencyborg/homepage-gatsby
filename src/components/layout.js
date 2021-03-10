import * as React from 'react'
import PropTypes from 'prop-types'

import Footer from './Footer'
import NavBar from './NavBar'
import useVisualState from '../hooks/useVisualState'
import './layout.css'

const Layout = ({ children }) => {
  const { isHomePage } = useVisualState()

  return (
    <div className={`layout ${isHomePage ? 'home' : ''}`}>
      <NavBar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
