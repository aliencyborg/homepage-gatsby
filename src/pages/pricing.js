import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PricingPage = () => (
  <Layout>
    <SEO title="AlienCyborg Pricing" />
    <div className="pricing">
      <div>
        <h1>Pricing</h1>
      </div>
      <div>
        <div>Web Site Design and Development</div>
        <div>
          <div>
            <span>Simple </span>
            <span>$500</span>
          </div>
          <div>
            <span>Standard </span>
            <span>$1000</span>
          </div>
          <div>
            <span>Premium </span>
            <span>$2000</span>
          </div>
        </div>
      </div>
      <div>
        <div>WordPress or Drupal</div>
        <div>
          <div>
            <span>Simple </span>
            <span>$1000</span>
          </div>
          <div>
            <span>Standard </span>
            <span>$2000</span>
          </div>
          <div>
            <span>Premium </span>
            <span>$4000</span>
          </div>
        </div>
      </div>
      <div>
        <div>Feature-Rich Web Application</div>
        <div>
          <div>
            <span>Simple </span>
            <span>$2000</span>
          </div>
          <div>
            <span>Standard </span>
            <span>$4000</span>
          </div>
          <div>
            <span>Premium </span>
            <span>$8000</span>
          </div>
        </div>
      </div>
      <div>
        <h2>Hosting</h2>
      </div>
      <div>
        <span>Static Web Site with HTTPS and Analytics </span>
        <span>$2 per month</span>
      </div>
      <div>
        <span>Web Application, Drupal, or Wordpress </span>
        <span>$12 per month</span>
      </div>
      <div>
        <span>Premium Cloud Hosting with CDN </span>
        <span>and traffic management </span>
        <span>starting at $32 per month</span>
      </div>
      <div>
        <h2>Other Services:</h2>
        <span>
          <Link to="/contact">Talk to Us!</Link>
        </span>
      </div>
    </div>
  </Layout>
)

export default PricingPage
