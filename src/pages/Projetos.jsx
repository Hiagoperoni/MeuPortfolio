import React, { Component } from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import pixelsArt from '../imagens/pixelsArt.png'
import shoppingCart from '../imagens/shoppingCart.png'
import solarSystem from '../imagens/solarSystem.png'
import trybeTunes from '../imagens/trybeTunes.png'
import trybeWarts from '../imagens/trybeWarts.png'
import tryunfo from '../imagens/tryunfo.png'


class Projetos extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='heading'>
            <h1>Projetos</h1>
        </div>
        <div className="paginaProjetos">
          <h3>Aqui está toda minha evolução na programação! Desde o meu primeiro projeto usando apenas HTML, CSS e JavaScript, até meu último utilizando React e Redux.
            <br></br>
            Você pode acessar o projeto clicando na imagem dele!
          </h3>
          <section className="projetosSection">
            <article className="articleProjeto">
              <a rel="noreferrer" href="https://hiago-pixels-art.netlify.app/" target="_blank">
                <img src={ pixelsArt } alt="projeto PixelsArt" className="imagensProjetos" />
              </a>
              <div className="tituloProjeto">
                <h3>Projeto Pixels Art</h3> 
              </div>
              <p>Meu Primeiro Projeto!</p>
              <p>Foi um projeto contruído para aprimorar a lógica de programação, juntamente com o JavaScript para fazer as funções de selecionar cores, trocar as cores dos "pixels" ao clicar neles e poder fazer pequenos desenhos.</p>
            </article>
            <article className="articleProjeto">
              <a rel="noreferrer" href="https://hiago-trybewarts.netlify.app" target="_blank">
                <img src={ trybeWarts } alt="projeto TrybeWarts" className="imagensProjetos" />
              </a>
              <div className="tituloProjeto">
                <h3>Projeto TrybeWarts</h3>
              </div>
              <p>Meu Segundo Projeto!</p>
              <p>Foi um projeto contruído em duplas, para trabalhar o PairProgramming, por isso foi um projeto mais simples, apennas um formulário para a entrada em uma "Escola Mágica de Programação.</p>
            </article>
            <article className="articleProjeto">
              <a rel="noreferrer" href="https://hiago-shopping-cart.netlify.app" target="_blank">
                <img src={ shoppingCart } alt="projeto Shopping Cart" className="imagensProjetos" />
              </a>
              <div className="tituloProjeto">
                <h3>Projeto Shopping Cart</h3>
              </div>
              <p>Meu Terceiro Projeto!</p>
              <p>Foi um dos mais desafiadores! Foi o primeiro projeto que tive que consultar dados em uma API e retorná-los para a página usando apenas JavaScript. Por ser muito desafiador, foi um dos mais gratificantes de ter concluído. Consiste em ser uma página de um site de compras, juntamente a um carrinho de compras que é atualizado sempre ao clicar em algum produto, mostrando suas especificações e o valor total da compra</p>
            </article>
            <article className="articleProjeto">
              <a rel="noreferrer" href="https://hiago-solar-system.netlify.app" target="_blank">
                <img src={ solarSystem } alt="projeto Solar System" className="imagensProjetos" />
              </a>
              <div className="tituloProjeto">
                <h3>Projeto Solar System</h3>
              </div>
              <p>Meu Quarto Projeto!</p>
              <p>Acho meu projeto mais bonito esteticamente. Foi meu último projeto usando apenas JavaScript. Ele consiste em mostrar os planetas do Sistema Solar e embaixo todas as missões feitas para esses planetas.</p>
            </article>
            <article className="articleProjeto">
              <a rel="noreferrer" href="https://hiago-tryunfo.netlify.app" target="_blank">
                <img src={ tryunfo } alt="projeto Tryunfo" className="imagensProjetos" />
              </a>
              <div className="tituloProjeto">
                <h3>Projeto Tryunfo</h3>
              </div>
              <p>Meu Quinto Projeto!</p>
              <p>Esse foi meu primeiro projeto utilizando o React! Foi bastante complicado pois, por mais que se pareça com o JavaScript, ainda possuía algumas ferramentas que não sabia utilizar completamente. Esse projeto é a criação de um baralho de Super Trunfo, onde o próprio usuário coloca as cartas que quiser, com os atributos que preferir.</p>
            </article>
            <article className="articleProjeto">
              <a rel="noreferrer" href="https://hiago-trybetunes.netlify.app" target="_blank">
                <img src={ trybeTunes } alt="projeto TrybeTunes" className="imagensProjetos" />
              </a>
              <div className="tituloProjeto">
                <h3>Projeto TrybeTunes</h3>
              </div>
              <p>Meu Sexto Projeto!</p>
              <p>Um projeto mais rebuscado no React, com diversas funcionalidades, rotas de páginas e buscas em API. Esse projeto consiste em um aplicativo de Músicas, onde o usuário faz o login, pesquisa o Artista e o aplicativo retorna todos os albuns disponiveis na API daquele artista e, quando o album é clicado, abre uma página com todas as músicas desse album.</p>
            </article>
          </section>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Projetos;
