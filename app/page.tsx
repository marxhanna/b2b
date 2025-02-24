"use client";

import React, { useEffect } from 'react';
import Link from "next/link";
import img from '../app/img/logos/nobis_principal_branca.png';
import imgFooter from '../app/img/logos/nobis_roxo.png';
import heroBG from '../app/img/heroBG.png';
import teste from '../app/img/time/Marina.png';
import certificados from '../app/img/certificados.png';

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return; // Garante que só execute no cliente

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
        <p className="frontPageTitle">
          ESG é com a Nobis 
        </p>
        <p className='subtitle'>
          A <strong>única</strong> plataforma que integra soluções em ESG de <strong>ponta-a-ponta</strong>.
        </p>
        <a className="initBtn" href="#sobre">Conheça nossas soluções</a>
      </div>
    </div>
    <div className="solucoes" id="solucoes">

    </div>
    <div className='section'>
        <div className='text'>
          <p className='floatingText'>Até agora, você investiu em assistência ou impacto?</p>
          <h2>Impacto socioambiental com <span className='gradient-text'>monitoramento</span></h2>
          <p className='desc'>Saiba em tempo real os impactos que seus investimentos promovem para as pessoas, comunidades e o planeta.</p>
          <button className='descBtn'>Como sua empresa pode gerar valor?</button>
        </div>
        <img src={teste.src} className='imgSolutions right' />
    </div>
    <div className='section'>
        <img src={teste.src} className='imgSolutions left' />
        <div className='text right'>
          <h2>Comunicação e <br/> Social <span className='gradient-text'>Branding</span></h2>
          <p className='desc'>Até agora sua empresa fez campanhas para dizer que é responsável ou investiu em causas que realmente conectam sua marca a seu público?</p>
          <button className='descBtn'>A Nobis é o novo canal de comunicação!</button>
        </div>
    </div>
    <div className='section'>
    <div className='text'>
          <h2>Selo de <span className='gradient-text'>Materialidade</span></h2>
          <p className='desc'>Materialidade de Investimentos em ESG para auditoria e <i>due dilligence</i> em tempo real.</p>
          <button className='descBtn'>Certificação dos Investimentos em Impacto</button>
        </div>
        <img src={teste.src} className='imgSolutions right' />
    </div>
    <div className='section'>
    <img src={teste.src} className='imgSolutions left' />
        <div className='text'>
          <h2>Hands-On <span className='gradient-text'>ESG</span></h2>
          <p className='desc'>Aprenda e implante ESG com um framework ideal para sua empresa gerar resultados.</p>
          <button className='descBtn'>ESG como Vetor Estratégico do Negócio</button>
        </div>
    </div>
    <div className='section'>
    <div className='text'>
          <h2>Rota <span className='gradient-text'>ESG</span></h2>
          <p className='desc'>Descubra o nível de maturidade da sua organização em ESG.</p>
          <button className='descBtn'>Faça o teste!</button>
        </div>
        <img src={teste.src} className='imgSolutions right' />
    </div>
    <div className='section'>
    <img src={teste.src} className='imgSolutions left' />
        <div className='text'>
          <h2>Quiz do Consumidor <span className='gradient-text'>ESG</span></h2>
          <p className='desc'>Descubra o seu nível de conhecimento e comportamento em relação às práticas de consumo ESG.</p>
          <button className='descBtn'>Responda ao Quiz!</button>
        </div>
    </div>
    <div className='certificados'>
        <img src={certificados.src} />
    </div>
    <div className='outrasSolucoes'>
      <h1>Outras <span className='gradient-text'>Soluções</span></h1>
      <div className='solucoesCards'>
        <div className='solucoesCard'>
          <img src={teste.src} />
          <h3>Palestras</h3>
          <p>Conhecimentos, reflexões e práticas em ESG.</p>
        </div>
        <div className='solucoesCard'>
          <img src={teste.src} />
          <h3>ESGCAST</h3>
          <p>Seu podcast semanal <br/> sobre ESG.</p>
        </div>
      </div>
    </div>
    <div className='equipe'>

    </div>
    <div className='noticias'>

    </div>
    </>
  );
}
