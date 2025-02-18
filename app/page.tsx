import React from 'react';
import Link from "next/link";
import img from '../app/img/logos/nobis_principal_branca.png';
import imgFooter from '../app/img/logos/nobis_roxo.png';
import heroBG from '../app/img/heroBG.png';

export default function Home() {
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
          ><span className="gradient-text">Contato</span></a>
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
          zIndex: 0 
        }}
      />

      {/* Conteúdo sobreposto */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%', color: '#fff', width: "80%", margin: "0 auto", padding: "0 20px" }}>
        <p className="frontPageTitle">
          ESG É COM A NOBIS
        </p>
        <p>
          A única plataforma que integra soluções em ESG de ponta-a-ponta.
        </p>
        <a className="initBtn" href="#sobre">Conheça nossas soluções</a>
      </div>
    </div>
    </>
  );
}
