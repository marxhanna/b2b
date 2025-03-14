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
        <p className="frontPageTitle" style={{ fontSize: '8.5vh', textAlign: 'center' }}>
          Hands-on ESG
        </p>
        <p className='subtitle'>
          Aprenda a <b>vetorizar ESG</b> na<br/>estratégia para <b>gerar resultados</b>.
        </p>
        <a className="initBtn" href="#sobre">Saiba Mais</a>
      </div>
    </div>
    <div className='handsonSecao1'>
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
