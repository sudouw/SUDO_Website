import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import spotify from '../img/social/Spotify_Icon_RGB_Black.png'
import instagram from '../img/social/instagram.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="SUDO" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About Us
              </Link>
              <a className="navbar-item" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pg/SudoUW/events/">
                Events
              </a>
              <Link className="navbar-item" to="/blog">
                Latest Stories
              </Link>
              <a className="navbar-item" target="_blank" rel="noopener noreferrer" href="http://store.sudo.world">
                Store
              </a>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a className="navbar-item" title="facebook" href="https://www.facebook.com/SudoUW">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '2em', height: '2em' }}
                />
              </a>
              <a className="navbar-item" title="spotify" href="https://open.spotify.com/show/5dV2wtrBVC4BxMr6xtwF5h?fbclid=IwAR1GAyBGVQE4xlyfjZ7X9ZpcdNv8vVsDR0Qao6ky6duLKE-vXOvqJH4xJG8">
                <img
                  src={spotify}
                  alt="Spotify"
                  style={{ width: '2em', height: '2em' }}
                />
              </a>
              <a className="navbar-item" title="instagram" href="https://www.instagram.com/sudo_uw/">
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '2em', height: '2em' }}
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
