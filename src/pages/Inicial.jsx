import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import fotoPerfil from '../imagens/fotoPerfil.png';
import instagram from '../imagens/instagram.png';
import linkedin from '../imagens/linkedin.png';
import github from '../imagens/github.png';

class Inicial extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='heading'>
          <h1>{`Bem-Vindo(a) ao meu Portfólio!`}</h1>
        </div>
        <div className='sessaoInicial'>
          <img src={fotoPerfil} alt="Hiago  Peroni" className="imagemInicial"/>
          <section className='sobre'>
            <div>
              <div className='titleBar'>
                <h3>Olá! Sou o Hiago Peroni e esse é o meu Portfólio!</h3>
              </div>
                <p>Ele é construído em React e aqui eu conto quais são minhas principais Habilidades
                e mostro meus projetos desde o meu começo na vida de Programador!<br/><br/>
                Atualmente sou estudante de Programação na Trybe! Uma escola onde ensinam desde o básico ao avançado de diversas linguagens, marcações ou bibliotecas, como JavaScript, HTML, CSS, React, Redux entre outras, além de ensinar a fazer testes unitários utilizando o Jest e React Testing Library.
              </p>
            </div>
            <div>
              <div className='titleBar'>
                <h4>Minhas Principais Habilidades de Programação são:</h4>
              </div>
              <p>HTML: Avançado</p>
              <p>CSS: Intermediário</p>
              <p>JavaScript: Intermediário/Avançado</p>
              <p>React: Intermediário</p>
              <p>Redux: Iniciante</p>
              <p>Testes com Jest: Avançado</p>
              <p>Testes com React Testing Library: Intermediário</p>
              <p>Docker: Iniciante</p>
              <p>NodeJS: Iniciante</p>
            </div>
          </section>
        </div>
          <div className='redesSociais'>
            <a rel="noreferrer" href="https://www.linkedin.com/in/hiago-peroni/" target="_blank">
              <img src={ linkedin } alt="linkedin" className='logo'/>
            </a>
            <a rel="noreferrer" href="https://www.instagram.com/peroni___/" target="_blank">
              <img src={ instagram } alt="instagram" className='logo'/>
            </a>
            <a rel="noreferrer" href="https://github.com/Hiagoperoni" target="_blank">
              <img src={ github } alt="github" className='logo'/>
            </a>
          </div>
        <Footer />
      </div>
    )
  }
}

export default Inicial;
