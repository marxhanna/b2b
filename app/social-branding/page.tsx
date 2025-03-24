"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import img from '../img/logos/nobis_principal_branca.png';
import imgFooter from '../img/logos/nobis_roxo.png';
import heroBG from '../img/branding/brandingCapa.png';
import socials from '../img/branding/socials.png';
import section3img from '../img/branding/section3img.png';
import section4img from '../img/branding/secao4img.png';
import section5img from '../img/branding/secao5img.png';
import palestras from '../img/palestras.png';
import esgcast from '../img/esgcast.png';
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
        <p className="frontPageTitle" id='cb' style={{ fontSize: '8.5vh', textAlign: 'center' }}>
            Conecte impacto socioambiental<br/>ao valor das marcas
        </p>
        <p className='subtitle'>
            Em vez de desperdiçar investimentos com <strong>publicidade ineficaz, faça Social Branding.</strong>
        </p>
        <a className="initBtn" href="#sobre">Saiba Mais</a>
      </div>
    </div>

    <div className='brandingSecao1'>
        <div className='text'>
            <h1 style={{ fontSize: "4.5vh" }}>O cenário da publicidade<br/>digital está <span className='gradient-text'>saturado.</span></h1>
            <br/>
            <p>
                Anúncios que <b>não são vistos</b>, <b>ignorados</b> ou <b>bloqueados</b> por usuários que buscam uma experiência mais autêntica e menos invasiva.
            </p>
            <br/>
            <ul>
                <li>US$ 5,8 bilhões são <b>desperdiçados</b> anualmente com <b>anúncios ineficazes</b>. (ANA)</li>
                <br/>
                <li>Mais de 30% dos investimentos em ads são consumidos por <b>cliques falsos</b> e <b>bots</b>. (Luiz Zaka - DROPS)</li>
                <br/>
                <li>912 milhões de usuários utilizam <b>bloqueadores</b> de anúncios. (Luiz Zaka - DROPS)</li>
            </ul>
        </div>
        <img src={socials.src} style={{ height: "80%" }} className='imgDesktop' />
    </div>
    <div className='brandingSecao2'>
        <h1>A Nobis coloca sua marca no <br/> coração dos consumidores.</h1>
    </div>
    <div className='brandingSecao3'>
        <div className='text'>
          <p>E como funciona?</p>
          <h1>Nossa <span className='gradient-text'>abordagem:</span></h1>
          <ul>
            <li>Co-criação de programas socioambientais</li>
            <li>Escolha do público-alvo</li>
            <li>Qualificação</li>
            <li>Ativação Econômica Mútua</li>
            <li>Monitoramento</li>
          </ul>
          <button>Simples assim!</button>
        </div>
        <img src={section3img.src} className='imgDesktop' />
    </div>
    <div className='brandingSecao4'>
      <img src={section4img.src} className='imgDesktop' />
      <div className='text'>
        <p>Num click!</p>
        <h1>Monitoramento em <span className='gradient-text'>tempo real</span></h1>
        <ul>
          <li>Indicadores de Branding e Expansão de Mercado.</li>
          <li>30 indicadores socioambientais alinhados aos ODS e ESG.</li>
        </ul>
        <button>Dados na palma da mão</button>
      </div>
    </div>
    <div className='brandingSecao5'>
        <div className='title'>
          <h1 style={{ textAlign: "center" }}>Equilíbrio entre <span className='gradient-text'>Impacto<br/>Global</span> e <span className='gradient-text'>Relevância Local</span></h1>
        </div>
        <img style={{ margin: "0 auto", height: "80vh" }} src={section5img.src} id='eq' />
    </div>
    <br/><br/>
    <div className='outrasSolucoes' style={{ height: "80vh" }}>
      <h1>Outras <span className='gradient-text'>Soluções</span></h1>
      <div className='solucoesCards'>
        <div className='solucoesCard'>
          <img src={palestras.src} />
          <h3>Palestras</h3>
          <p>Conhecimentos, reflexões e práticas em ESG.</p>
        </div>
        <div className='solucoesCard'>
          <img src={esgcast.src} />
          <h3>ESGCAST</h3>
          <p>Seu podcast semanal <br/> sobre ESG.</p>
        </div>
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
