/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

import './styles.css'

function Index() {
    return (
        <>
        <Header />
        <section id="img">
          <div class="mid">
              <img class="img-fluid" src={require('../../assets/images/consciencia.png').default}/>
          </div>
        </section>
    <section id="about" class="aboutBackgourd py-5">
      <div class="row align-items-center container my-5 mx-auto foo">
        <div class="text col-lg-6 col-md-6 col-12 w-50 pt-5 pb-5">
          <h6 class="titleSection">CONSCIRE</h6>
          <h2 class="text-light"> Porque prevenção é o melhor caminho</h2>
          <p class="text-light">Elaborado através da tecnologia, Conscire tem o objetivo de atuar na prevenção ao uso precoce de bebidas alcoólicas por jovens.</p>
          <Link class="btnSection" to="/cadastro">Conscientize-se</Link>
        </div>
        <div class="img col-lg-6 col-md-6 col-12 w-50">
          <img class="img-fluid" src={require('../../assets/images/conscire-index-section-2.svg').default}/>
        </div>
      </div>
    </section>

     {/* <!--pagina - funcionalidades (vai ser de contato) --> */}


     <section id="projeto" class="funcionalidades py-5">
      <div class="row align-items-center container my-5 mx-auto">
        <div class="img col-lg-6 col-md-6 col-12 w-50">
          <img class="img-fluid" src={require('../../assets/images/quem-somos.svg').default}/>
        </div>
        <div class="text col-lg-6 col-md-6 col-12 w-50 pt-5 pb-5">
          <h6>CONSCIRE</h6>
          <h2> Como o projeto atua? </h2>
          <p>Queremos instigar maior pensamento crítico, através de materiais e quizes sobre o uso do álcool entre jovens, como ferramenta de conscientização.</p>
          <Link to="/cadastro">Conscientize-se</Link>
        </div>
      </div>
    </section> 

    <section id="cards" class="service py-5">
      <div class="col mx-auto align-items-center my-5 ">
      <div class="heading text-center pt-5">
        <h2 class="font-weight-bold pb-5 text-warning">O que disponibilizamos</h2>
      </div>
      <div class="row mx-auto justify-content-center align-items-center text-center container">
        <div class="one col-lg-3 col-md-3 col-12 w-25 m-2">
          <img class="img-fluid w-90" src={require('../../assets/images/quiz-card.svg').default}/>
          <h5 class="font-weight-bold pt-4">TEMOS QUIZ</h5>
          <p>E ai, já tomou um gole de consciência no nosso site? Entao venha responder nosso Quiz, marcar muitos pontos e escalar nosso ranking!.</p>
      </div>

      <div class="one col-lg-3 col-md-3 col-12 w-25 m-2">
        <img class="img-fluid w-90" src={require('../../assets/images/ranking.svg').default}/>
        <h5 class="font-weight-bold pt-4">RANKINGS</h5>
        <p>Você consegue ver o seu ranking de pontos e arquivos lidos dentre todos os usuários.</p>
    </div>

    <div class="one col-lg-3 col-md-3 col-12 w-25 m-2">
      <img class="img-fluid w-90 " src={require('../../assets/images/test-audit-card.svg').default}/>
      <h5 class="font-weight-bold pt-4">TESTE AUDIT</h5>
      <p>O AUDIT - Alcool Use Disorders Identification Test é um instrumento de avaliação desenvolvido pela Organização Mundial de Saúde (OMS).</p>
  </div>
    </div>
    </div>
    </section>
            <Footer />
        </>
    )
}

export default Index