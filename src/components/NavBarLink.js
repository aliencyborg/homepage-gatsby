import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const NavBarLink = ({ children, route }) => (
  <Link className="NavBarLink" to={route}>
    {children}
  </Link>
)

export default NavBarLink

NavBarLink.propTypes = {
  children: PropTypes.node.isRequired,
  route: PropTypes.string.isRequired,
}
