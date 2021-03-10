import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="index">
        <div>
          <h1>AlienCyborg</h1>
          <h2>It&apos;s Probably Fine.</h2>
        </div>
        <div>
          <div>
            <StaticImage
              src="../images/logo-v1.png"
              width={300}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="AlienCyborg Logo black & white"
            />
          </div>
          <div>
            <StaticImage
              src="../images/logo-v2.png"
              width={300}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="AlienCyborg Logo color"
            />
          </div>
        </div>
        <div>
          <div>
            We build websites for entrepreneurs by sheer grit and creativity,
            because a great website is a force multiplier.
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
