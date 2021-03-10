import * as React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
    <SEO title="AlienCyborg Contact" />
    <div className="contact">
      <div>
        <h1>Contact</h1>
      </div>
      <div>
        <span>Start a conversation </span>
        <a href="mailto:hello@aliencyb.org">hello@aliencyb.org</a>
      </div>
    </div>
  </Layout>
)

export default ContactPage
