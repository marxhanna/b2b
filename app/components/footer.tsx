import Link from 'next/link';
import imgFooter from '../img/logos/nobis_roxo.png';


const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="footerContent">
          <Link href={'/'}>
            <img src={imgFooter.src} alt="Logo Footer" />
          </Link>
          <div className="footerInfo">
            <div>
              <h4>Soluções</h4>
              <a href="https://esg.nobisapp.com.br/impacto-com-monitoramento/" target="_blank" rel="noopener noreferrer">
                Impacto com Monitoramento
              </a>
              <a href="https://esg.nobisapp.com.br/social-branding/" target="_blank" rel="noopener noreferrer">
                Comunicação e Branding em ESG
              </a>
              <a href="https://esg.nobisapp.com.br/impacto-com-monitoramento#selo" target="_blank" rel="noopener noreferrer">
                Selo de Materialidade
              </a>
              <a href="https://esg.nobisapp.com.br/hands-on-esg/" target="_blank" rel="noopener noreferrer">
                ESG Hands On
              </a>
              <a href="https://esg.nobisapp.com.br/rota-esg/" target="_blank" rel="noopener noreferrer">
                Rota ESG
              </a>
              <a href="https://esg.nobisapp.com.br/quiz-do-consumidor/" target="_blank" rel="noopener noreferrer">
                Quiz do Consumidor
              </a>
            </div>
            <div>
              <h4>Sobre Nós</h4>
              <a href="https://esg.nobisapp.com.br/#sobre/" target="_blank" rel="noopener noreferrer">
                A Nobis
              </a>
              <a href="https://esg.nobisapp.com.br/politica-de-privacidade/index.html" target="_blank" rel="noopener noreferrer">
                Política de Privacidade
              </a>
              <a href="https://agentes.nobisapp.com.br/" target="_blank" rel="noopener noreferrer">
                Seja um Parceiro
              </a>
              {/* <a href="https://esg.nobisapp.com.br/paginas/imprensa/" target="_blank" rel="noopener noreferrer">
                Comunicação & Imprensa
              </a> */}
              <Link href={"/transparencia"}>Transparência</Link>
            </div>
            <div>
              <p>
                Rua Presidente Faria, 51 <br />
                Sala 502, Edifício Farid Surigi <br />
                Centro, Curitiba - PR <br />
                <br />
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
  );
};

export default Footer;
