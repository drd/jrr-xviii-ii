import React from 'react'
import { withSiteData } from 'react-static'
import { Image } from 'cloudinary-react'
import '../styles/home.css'

export default withSiteData(() => (
  <div className="page-content home-page">
    <h1 className="site-title">Joshua Richey</h1>
    <h2 className="site-subtitle">Product Designer</h2>
    <Image
      className="home-image"
      cloudName="joshuar"
      publicId="Hilights"
      w_auto="true"
      cld-responsive="true"
      crop="scale"
      secure="true"
    />
  </div>
))
