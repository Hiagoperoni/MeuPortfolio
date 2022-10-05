import React, { Component } from 'react'
import linkedin from '../imagens/linkedin.png'
import github from '../imagens/github.png'
import instagram from '../imagens/instagram.png'


class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Contatos:</p>
        <a rel="noreferrer" href="https://www.linkedin.com/in/hiago-peroni/" target="_blank">
          {/* <img href={linkedin} alt="linkedin" /> */}
          Linkedin
        </a>
        <a rel="noreferrer" href="https://www.instagram.com/hiagoperonidev/" target="_blank">
          {/* <img href={instagram} alt="instagram" /> */}
          Instagram
        </a>
        <a rel="noreferrer" href="https://github.com/Hiagoperoni" target="_blank">
          {/* <img href={github} alt="github" /> */}
          GitHub
        </a>
        <p>E-mail: hiagoperonidev@gmail.com</p>
      </footer>
    )
  }
}

export default Footer;