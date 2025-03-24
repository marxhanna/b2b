"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import img from '../img/logos/nobis_principal_branca.png';
import imgFooter from '../img/logos/nobis_roxo.png';
import heroBG from '../img/quizconsumidor/consumidorBG.png';
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
        <p className="frontPageTitle" id='quizTitle' style={{ fontSize: '11vh', textAlign: 'center', marginBottom: '3%' }}>
        Quiz do<br/>Consumidor
        </p>
        <p className='subtitle' style={{ fontSize: '3vh' }}>
            Ferramenta de <b>pesquisa de comportamento</b> dos consumidores para as <b>dimensões ESG</b>
        </p>
        <a className="initBtn" href="#sobre">Saiba Mais</a>
      </div>
    </div>

    <div className='rotaQuiz'>
    <iframe width="80%" height="900px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=cxnAfcPMGUWdMAbzWUv0Xx6EKStY_ZxLgv5rlQ1m5sZUOEtUWFUyME1OQThOVlJBSFkxM1oxN05IRC4u&embed=true" style={{border: "none", margin: "0 auto"}} allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true"> </iframe>
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
