import { Link } from "gatsby"
import React from "react"

const Hero = () => (
  <div className="hero">
    <div className="hero__background"></div>

    <div className="hero__text">
      <h2 className="h3">New Games & Accessories</h2>
      <h1>Monthly packages.<br />
      Excitement delivered daily.</h1>

      <p>What’s the best way to shop for the latest video games and peripherals? How about never
      shopping at all? You’ll get new stuff on your doorstep — every month.</p>

      <Link
        className="button"
        to="/"
      >
        Get Started
      </Link>
    </div>
  </div>
)

export default Hero
