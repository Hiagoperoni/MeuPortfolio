import React, { Component } from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import fotoPerfil from '../imagens/fotoPerfil.png'

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
              <h3>Olá! Sou o Hiago Peroni e esse é o meu Portfólio!</h3>
                <p>Ele é construído em React e aqui eu conto quais são minhas principais Habilidades
                e mostro meus projetos desde o meu começo na vida de Programador!<br/><br/>
                Atualmente sou estudante de Programação na Trybe! Uma escola onde ensinam desde o básico ao avançado de diversas linguagens, marcações ou bibliotecas, como JavaScript, HTML, CSS, React, Redux entre outras, além de ensinar a fazer testes unitários utilizando o Jest e React Testing Library.
              </p>
            </div>
            <div>
              <h4>Minhas Principais Habilidades de Programação são:</h4>
              <p>HTML: Avançado</p>
              <p>CSS: Intermediário</p>
              <p>JavaScript: Intermediário/Avançado</p>
              <p>React: Intermediário</p>
              <p>Redux: Iniciante</p>
              <p>Testes com Jest: Avançado</p>
              <p>Testes com React Testing Library: Intermediário</p>
              <p>API Rest: Intermediário</p>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Inicial;
