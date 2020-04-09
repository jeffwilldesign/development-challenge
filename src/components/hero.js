import { Link } from "gatsby"
import React from "react"

const Hero = () => (
  <div class="hero">
    <div class="hero__background"></div>

    <div class="hero__text">
      <h2 class="h3">New Games & Accessories</h2>
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
