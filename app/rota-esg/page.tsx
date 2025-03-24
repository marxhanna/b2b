"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import img from '../img/logos/nobis_principal_branca.png';
import imgFooter from '../img/logos/nobis_roxo.png';
import heroBG from '../img/rota/rotaBG.png';
import Header from '../components/header';
import Footer from '../components/footer';

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
        <p className="frontPageTitle" id='rotaTitle' style={{ fontSize: '15vh', textAlign: 'center', marginBottom: '3%' }}>
          Rota ESG
        </p>
        <p className='subtitle'>
            Descubra o <b>nível de maturidade</b> da<br/>sua organização em ESG
        </p>
        <a className="initBtn" href="#sobre">Saiba Mais</a>
      </div>
    </div>

    <div className='rotaQuiz'>
      <iframe width="80%" height="650px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=cxnAfcPMGUWdMAbzWUv0Xx6EKStY_ZxLgv5rlQ1m5sZUMVVUSE9BWEFINlRXU1hFVVhZMUQxN0EzQi4u&embed=true" style={{border: "none", margin: "0 auto"}} allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true"> </iframe>
    </div>
    
    <Footer />
    </>
  );
}
