import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => (
  <footer className="Footer">
    <span>© {new Date().getFullYear()} AlienCyborg LLC.</span>
    <span>
      Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </span>
    <span>
      <StaticImage
        src="../images/gatsby-icon.png"
        width={16}
        quality={25}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="Gatsby logo"
      />
    </span>
  </footer>
)

export default Footer
