import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../imagens/logo-fundo.png'

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/" className="navItem">
            <p>Home</p>
          </Link>
          <img src={logo} alt='Logo HP' className="logo"/>
          <Link to="/projetos" className="navItem">
            <p>Projetos</p>
          </Link>
        </nav>
        
      </header>
    )
  }
}

export default Header;
