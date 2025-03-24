"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import img from '../img/logos/nobis_principal_branca.png';
import imgFooter from '../img/logos/nobis_roxo.png';
import heroBG from '../img/esgcast/esgcastBG.png';
import esgcast from '../img/esgcast/esgcast.png';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const header = document.getElementById("header") as HTMLElement | null;
      const section1 = document.getElementById("section1") as HTMLElement | null;

      if (!header || !section1) return;

      const section1Bottom = section1.offsetTop + section1.offsetHeight;
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY >= section1Bottom) {
        header.classList.add("solid");
        header.classList.remove("transparent");
      } else {
        header.classList.add("transparent");
        header.classList.remove("solid");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);
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
        <p className="frontPageTitle" style={{ fontSize: '15vh', textAlign: 'center', marginBottom: '3%' }}>
        ESGCAST
        </p>
        <p className='subtitle' style={{ fontSize: '3vh' }}>
        O <b>primeiro</b> podcast do Brasil<br/>focado em <b>ESG</b>.
        </p>
        <a className="initBtn" href="#sobre">Saiba Mais</a>
      </div>
    </div>

    <div className='esgcastInfo'>
      <div className='esgcastContentText'>
        <div>
          <h1>Pow<br/>ered<br/><span>by Nobis</span></h1>
        </div>
        <div className='vl'></div>
        <div className='esgcastContentTextInfo'>
          <p>
            O primeiro podcast de ESG focado em contextos atuais,<br/>com diálogos, debates com relevância e conhecimento. 
            <br/>
            <span>Atualmente com mais de 3000 reproduções em 10 países.</span></p>
        </div>
      </div>
      <div className='esgcastContentPlaylist'>
        <iframe style={{ borderRadius: "12px", margin: "0 auto"}} src="https://open.spotify.com/embed/playlist/1y0rOHpyMRsr6BUOfS86Qs?utm_source=generator&theme=0" width="80%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>

    <div className='disponibilidade'>
      <div className='title'>
        <h1>Disponível nas<br/><span className='gradient-text'>plataformas</span></h1>
      </div>
      <div className='disponibilidadeContent'>
        <div className='esgcastImg'><img src={esgcast.src} /></div>
        <div>
          <div className='serviceCard'></div>
          <div className='serviceCard'></div>
          <div className='serviceCard'></div>
          <div className='serviceCard'></div>
        </div>
      </div>
    </div>
    
    <Footer/ >
    </>
  );
}
