"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import img from '../img/logos/nobis_principal_branca.png';
import imgFooter from '../img/logos/nobis_roxo.png';
import heroBG from '../img/rota/rotaBG.png';

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
       <header className="floating-header transparent" id="header">
      <div className="container-header">
        <div className="logo-header" id="logoHeader">
          <Link href={"/"}><img src={img.src} style={{ height: "80px" }} /></Link>
        </div>
        <div className='navInfo'>
        <nav>
          <ul>
            <li style={{ marginLeft: '-55%' }}><a href="#mvv">Sobre</a></li>
            <li style={{ marginLeft: '20%' }}><Link href="/projetos">Soluções</Link></li>
            <li style={{ marginLeft: '20%' }}><Link href="#nobis">Conteúdo</Link></li>
          </ul>
        </nav>
        <a 
          href="https://wa.me/5541992286680?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços." 
          target="_blank" 
          rel="noopener noreferrer"
          className="button-header"
          ><span>Contato</span></a>
        </div>
      </div>
    </header>
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
      <iframe width="80%" height="650px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=cxnAfcPMGUWdMAbzWUv0Xx6EKStY_ZxLgv5rlQ1m5sZUMVVUSE9BWEFINlRXU1hFVVhZMUQxN0EzQi4u&embed=true" style={{border: "none", margin: "0 auto"}} allowFullScreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
    </div>
    
    <div className="footer">
          <div className="content">
            <div className="footerContent">
                <Link href={'/'}><img src={imgFooter.src} /></Link>
              <div className="footerInfo">
                <div>
                    <h4>Soluções</h4>
                    <a href="https://esg.nobisapp.com.br/paginas/impacto/" target="_blank">Impacto com Monitoramento</a>
                    <a href="https://esg.nobisapp.com.br/paginas/comunicacao-branding/" target="_blank">Comunicação e Branding em ESG</a>
                    <a href="https://esg.nobisapp.com.br/paginas/selo-materialidade/" target="_blank">Selo de Materialidade</a>
                    <a href="https://esg.nobisapp.com.br/paginas/handson-esg/" target="_blank">ESG Hands On</a>
                    <a href="https://esg.nobisapp.com.br/paginas/rota-esg/" target="_blank">Rota ESG</a>
                    <a href="https://esg.nobisapp.com.br/paginas/quiz-do-consumidor/" target="_blank">Quiz do Consumidor</a>
                </div>
                <div>
                    <h4>Sobre Nós</h4>
                    <a href="https://esg.nobisapp.com.br/paginas/sobre/" target="_blank">A Nobis</a>
                    <a href="https://esg.nobisapp.com.br/paginas/politica-de-privacidade/" target="_blank">Política de Privacidade</a>
                    <a href="https://agentes.nobisapp.com.br/" target="_blank">Seja um Parceiro</a>
                    <a href="https://esg.nobisapp.com.br/paginas/imprensa/" target="_blank">Comunicação & Imprensa</a>
                    <Link href={"/transparencia"}>Transparência</Link>
                </div>
                <div>
                    <p>
                        Rua Presidente Faria, 51 <br/>
                        Sala 502, Edifício Farid Surigi <br/>
                        Centro, Curitiba - PR <br/>
                        <br/>
                        <a 
                            href="https://wa.me/5541992286680?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços." 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="whatsapp-button"
                            >
                            Fale Conosco
                        </a>

                    </p>
                </div>
               </div>
            </div>
          </div>
       </div>
    </>
  );
}
