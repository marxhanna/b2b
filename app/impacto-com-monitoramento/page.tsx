"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import img from '../img/logos/nobis_principal_branca.png';
import imgFooter from '../img/logos/nobis_roxo.png';
import heroBG from '../img/impacto/impactoCapa.png';
import presenca from '../img/impacto/presenca.png';
import mockup from '../img/impacto/mockup.png';
import reportings from '../img/impacto/reportings.png';
import selo from '../img/impacto/selo.jpeg';
import passo1 from '../img/impacto/passo1.png';
import passo2 from '../img/impacto/passo2.png';
import passo3 from '../img/impacto/passo3.png';
import passo4 from '../img/impacto/passo4.png';
import passo5 from '../img/impacto/passo5.png';
import rep1 from '../img/impacto/rep1.png';
import rep2 from '../img/impacto/rep2.png';
import rep3 from '../img/impacto/rep3.png';
import rep4 from '../img/impacto/rep4.png';
import Header from '../components/header';
import Footer from '../components/footer';
import etno from '../img/impacto/etnodesenvolvimento.jpg';
import empre from '../img/impacto/carrossel4.png';

export default function Home() {
  return (
    <>
    <Header />
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }} id="section1">
      {/* Imagem de fundo */}
      <img src={heroBG.src} 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          objectFit: 'cover',
          objectPosition: 'top',
          zIndex: 0
        }}
      /> 

      {/* Conteúdo sobreposto */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#fff', width: "80%", margin: "5% auto", padding: "0 20px" }}>
        <p className="frontPageTitle">
            Monitoramento e Selo de Materialidade ESG
        </p>
        <p className='subtitle'>
            Invista em Impacto Socioambiental com <strong>tecnologia</strong> e <strong>resultados garantidos</strong>.
        </p>
        <a className="initBtn" href="#sobre">Saiba Mais</a>
      </div>
    </div>

    <div className='presencaDigital'>
        <div className='title'>
            <p>Transformação de ponta-a-ponta <a style={{ letterSpacing: "-4px", marginLeft: "1%" }} className='traco'>-----------------------</a></p>
            <h1>Desenvolvemos, implantamos e monitoramos <br/> projetos de Impacto com <span className='gradient-text'>Presença Digital.</span></h1>
        </div>
        <a 
          href="https://wa.me/5541992286680?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços." 
          target="_blank" 
          rel="noopener noreferrer"
          ><img src={presenca.src} style={{ margin: "0 auto" }} className='imgDesktop' /></a>
        <div className='imgMobile'>
          <img src={passo1.src} style={{ margin: "0 auto" }} />
          <img src={passo2.src} style={{ margin: "0 auto" }} />
          <img src={passo3.src} style={{ margin: "0 auto" }} />
          <img src={passo4.src} style={{ margin: "0 auto" }} />
          <a 
          href="https://wa.me/5541992286680?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços." 
          target="_blank" 
          rel="noopener noreferrer"
          ><img src={passo5.src} style={{ margin: "0 auto" }} /></a>
        </div>
    </div>
    <div className='impactoSecao2'>
        <img src={mockup.src} className='imgDesktop' />
        <div className='text'>
            <h1>Materialidade dos <br/><span className='gradient-text'>Investimentos Socioambientais</span></h1>
            <p>
                <b>Digital</b>
                <br/>
                Monitoramento de indicadores de impacto em tempo real.
                <br/><br/>
                <b>Rastreável</b>
                <br/>
                Due Diligence para validação de investimentos em impacto socioambiental.
                <br/><br/>
                <b>Transparente</b>
                <br/>
                Fácil, acessível e respeitado.
            </p>
        </div>
    </div>
    <div className='impactoSecao3 outrasSolucoes'>
      <h1>Alguns dos nossos projetos</h1>
      <div className='solucoesCards'>
        <div className='solucoesCard'>
          <img src={empre.src} />
          <h3>Impacto para Mulheres</h3>
          <p>Qualificação e <br/>Empreendedorismo</p>
        </div>
        <div className='solucoesCard'>
          <img src={etno.src} />
          <h3>Etnodesenvolvimento</h3>
          <p>Geração de valor com <br/> preservação</p>
        </div>
      </div>
    </div>
    <div className='impactoSecao4'>
        <div className='title'>
            <p>Histórias Reais <a style={{ letterSpacing: "-4px", marginLeft: "1%" }} className='traco'>-----------------------</a></p>
            <h1>Pessoas <span className='gradient-text'>Reais.</span></h1>
        </div>
        <div className="playlistContainer">
            <iframe style={{ borderRadius: "40px", margin: "0 auto" }} width="80%" height="800" src="https://www.youtube.com/embed/videoseries?si=Rnbquy9ihCsdkP3Q&amp;list=PLGUiEiyT-j64Fd-3oAXavx9D0kyBmQ7LN" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>  
        </div>
    </div>
    <div className='impactoSecao5'>
        <div className='title'>
            <p>Materialidade e Certificação de Impacto <a style={{ letterSpacing: "-4px", marginLeft: "1%" }} className='traco'>-----------------------</a></p>
            <h1>Seu investimento socioambiental <br/>validado para  <span className='gradient-text'>reportings ESG.</span></h1>
        </div>
        <img style={{ margin: "0 auto" }} src={reportings.src} className='imgDesktop' />
        <div className='imgMobile'>
          <img src={rep1.src} style={{ margin: "0 auto" }} />
          <img src={rep2.src} style={{ margin: "0 auto" }} />
          <img src={rep3.src} style={{ margin: "0 auto" }} />
          <img src={rep4.src} style={{ margin: "0 auto" }} />
        </div>
    </div>
    <div className='impactoSecao6' id='selo'>
        <img src={selo.src} style={{ width: '80%', margin: '0 auto' }} />
    </div>

    <Footer />
    </>
  );
}
