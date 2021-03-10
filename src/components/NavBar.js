import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import MenuIcon from './MenuIcon'
import NavBarLink from './NavBarLink'
import useVisualState from '../hooks/useVisualState'

const NavBar = () => {
  const { navMenuIsExpanded, toggleNavMenu } = useVisualState()
  return (
    <header className="NavBar">
      <div>
        <Link to="/">
          <StaticImage
            src="../images/logo-v2.png"
            quality={50}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="AlienCyborg logo"
          />
        </Link>
      </div>
      <div>
        <Link to="/">AlienCyborg</Link>
      </div>
      <div>
        <button onClick={() => toggleNavMenu()}>
          <MenuIcon />
        </button>
      </div>
      <div>
        <div className={navMenuIsExpanded ? 'expanded' : ''}>
          <NavBarLink route="/contact">Contact Us</NavBarLink>
          <NavBarLink route="/pricing">Pricing</NavBarLink>
          <NavBarLink route="/services">Services</NavBarLink>
        </div>
      </div>
    </header>
  )
}

export default NavBar
