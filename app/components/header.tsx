import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import img from '../img/logos/nobis_principal_branca.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        setIsScrolled(true);
      } else {
        header.classList.add("transparent");
        header.classList.remove("solid");
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <header
      id={isMobile ? "" : "header"}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="logo-header">
          <Link href="/">
            <img src={img.src} alt="Logo" className="h-16" />
          </Link>
        </div>

        {/* Botão do menu sanduíche (mobile) */}
        <button
          className={`lg:hidden p-2 rounded-md transition-all ${
            isScrolled ? "bg-black/50 text-white" : "bg-transparent text-gray-700"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Navegação padrão (Desktop) */}
        <nav
          className={`hidden lg:flex items-center space-x-8 text-white font-semibold transition-all ${
            isScrolled ? "px-4 py-2 rounded-lg" : "bg-transparent"
          }`}
        >
        <ul className="flex space-x-8 list-none">
           <li><a href="/">Home</a></li>
            <li><a href="/#sobre">Sobre</a></li>
            <li><Link href="/#solucoes">Soluções</Link></li>
            
        </ul>

          {/* Botão de contato */}
          <a
            href="https://wa.me/5541992286680?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="button-header"
          >
            Contato
          </a>
        </nav>

        {/* Menu Mobile (Dropdown Lateral) */}
        <div
  className={`fixed inset-0 transition-opacity duration-300 ${
    isOpen ? "bg-black/50 opacity-100 visible" : "opacity-0 invisible"
  } lg:hidden`}
  onClick={() => setIsOpen(false)} // Fecha ao clicar fora
>
  <div
    className={`absolute top-0 right-0 w-4/5 max-w-[300px] h-full bg-black/50 text-white p-6 transform transition-transform duration-300 ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}
    onClick={(e) => e.stopPropagation()} // Impede fechamento ao clicar dentro
  >
    {/* Ícone de Fechar */}
    <button className="absolute top-4 right-4 text-white" onClick={() => setIsOpen(false)}>
      <X size={30} />
    </button>

    {/* Links */}
    <ul className="text-lg font-semibold space-y-6 mt-12 list-none">
      <li><a href="#mvv" className="block py-2" onClick={() => setIsOpen(false)}>Sobre</a></li>
      <li><Link href="/#solucoes" className="block py-2" onClick={() => setIsOpen(false)}>Soluções</Link></li>
      <li><Link href="#nobis" className="block py-2" onClick={() => setIsOpen(false)}>Conteúdo</Link></li>
    </ul>

    {/* Botão de contato */}
    <a
      href="https://wa.me/5541992286680?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
      target="_blank"
      rel="noopener noreferrer"
      className="block text-white text-center py-2 border border-white rounded-[20px] mt-6 hover:bg-white hover:text-black transition"
      onClick={() => setIsOpen(false)}
    >
      Contato
    </a>
  </div>
</div>
      </div>
    </header>
  );
}