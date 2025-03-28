"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import img from '../img/logos/nobis_principal_branca.png';
import imgFooter from '../img/logos/nobis_roxo.png';
import heroBG from '../img/handson/handsonBG.png';
import c1 from '../img/handson/1.png';
import c2 from '../img/handson/2.png';
import c3 from '../img/handson/3.png';
import c4 from '../img/handson/4.png';
import Footer from '../components/footer';
import Header from '../components/header';

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
        <p className="frontPageTitle" style={{ fontSize: '8.5vh', textAlign: 'center' }}>
          Hands-on ESG
        </p>
        <p className='subtitle'>
          Aprenda a <b>vetorizar ESG</b> na<br/>estratégia para <b>gerar resultados</b>.
        </p>
        <a className="initBtn" href="#sobre">Saiba Mais</a>
      </div>
    </div>
    <div className='handsonSecao1' id='sobre'>
        <div className='text'>
          <h1 style={{ fontSize:'5vh', lineHeight: '5vh', marginBottom: '5%' }}><span className='gradient-text'>Agilis:</span> mais do que um conceito, ações que geram resultados.</h1>
          <p>Com a Metodologia Agilis para consultoria, sua empresa aprende, aplica e atinge resultados com ESG.</p>
          <button>Saiba mais</button>
        </div>
        <div className='text'>
          <h1>Aprender</h1>
          <p>Coloque suas equipes na mesma página para dar o primeiro passo.</p>
          <h1>Fazer</h1>
          <p>Implante ESG nas operações de ponta-a-ponta para intensificar a geração de valor e aumentar a competitividade.</p>
          <h1>Crescer</h1>
          <p>Vetorize e mensure o impacto do ESG em todas as áreas do negócio com indicadores e monitoramento estruturado.</p>
        </div>
    </div>
    <div className='title'>
          <p>Como funciona? <a style={{ letterSpacing: "-4px", marginLeft: "1%" }}>----------------</a></p>
          <h1>Academy <span className='gradient-text'>Hands-On</span></h1>
        </div>
    <div className='handsonSecao2'>
        <div className='esghowto'>
          <img src={c1.src} />
          <img src={c2.src} />
          <img src={c3.src} />
          <img src={c4.src} />
        </div>
    </div>
    <Footer />
    </>
  );
}
