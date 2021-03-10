import * as React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ServicesPage = () => (
  <Layout>
    <SEO title="AlienCyborg Services" />
    <div className="services">
      <div>
        <h1>Services</h1>
      </div>
      <div>
        <ul>
          <li>Web Page Design and Development</li>
          <li>Single-Page Web Applications</li>
          <li>Content Management Solutions</li>
          <li>SquareSpace Customization</li>
          <li>WordPress Customization</li>
          <li>Drupal Customization</li>
          <li>Cloud Configuration</li>
          <li>Database Management</li>
          <li>Affordable Hosting</li>
          <li>Audio Processing</li>
          <li>Sound Design</li>
          <li>E-Commerce</li>
          <li>HTML Games</li>
          <li>and more!</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default ServicesPage
