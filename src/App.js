import React, { useState, useEffect, memo } from 'react';
import {
  Menu,
  X,
  Pill,
  HelpCircle,
  BellRing,
  Users,
  Heart,
  Activity,
  Brain,
  Check,
  ArrowRight,
  Monitor,
  Smartphone,
  RefreshCw,
  User,
  Camera,
  Lock,
  Eye,
  Globe,
  Mic,
  Database,
  Server,
  Code,
  FileJson,
  Image,
  Cpu,
  Building,
  Accessibility,
  MessageSquare,
  FileText,
  Cloud,
  TrendingUp,
  Shield,
  Sparkles
} from 'lucide-react';

// ------------------ Navbar ------------------
const Navbar = memo(({ isScrolled, toggleMenu, isMenuOpen }) => {
  // Definimos los enlaces con sus anclas correspondientes.
  const navLinks = [
    { href: "#problema", label: "El Problema" },
    { href: "#solucion", label: "Nuestra Solución" },
    { href: "#tecnologia", label: "Tecnología Usada" },
    { href: "#impacto", label: "Impacto Social" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" className="inline-flex items-center mr-8 group" aria-label="oPills Home">
          <div className="mr-2 text-teal-500 transition-all duration-300 group-hover:scale-110">
            <Pill size={28} strokeWidth={2.5} aria-hidden="true" />
          </div>
          <span className="text-2xl font-bold tracking-wide text-teal-500 group-hover:text-teal-400 transition-colors">
            oPills
          </span>
        </a>
        <nav aria-label="Navegación principal">
          <ul className="hidden lg:flex space-x-6">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-medium tracking-wide py-2 px-1 relative hover:text-teal-400 transition-colors after:absolute after:bottom-0 after:left-0 after:bg-teal-500 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Menú móvil */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar Menú" : "Abrir Menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="p-2 -mr-1 rounded-full bg-gray-800/80 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
          >
            {isMenuOpen ? <X className="w-5" aria-hidden="true" /> : <Menu className="w-5" aria-hidden="true" />}
          </button>
          {isMenuOpen && (
            <div id="mobile-menu" className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <a href="#hero" className="inline-flex items-center group" aria-label="oPills Home">
                    <div className="mr-2 text-teal-500 group-hover:scale-110 transition-all duration-300">
                      <Pill size={24} strokeWidth={2.5} aria-hidden="true" />
                    </div>
                    <span className="text-2xl font-bold tracking-wide text-teal-500 group-hover:text-teal-400 transition-colors">
                      oPills
                    </span>
                  </a>
                  <button
                    onClick={toggleMenu}
                    aria-label="Cerrar Menú"
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                  >
                    <X className="w-5" aria-hidden="true" />
                  </button>
                </div>
                <nav aria-label="Navegación móvil">
                  <ul className="space-y-4">
                    {navLinks.map(link => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={toggleMenu} // Cerrar el menú al hacer clic en un enlace
                          className="block py-2 font-medium tracking-wide hover:text-teal-400 transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
});

Navbar.displayName = 'Navbar';

// ------------------ Sección: Hero (Optimizado para móviles) ------------------
const Hero = () => {
  return (
    <section 
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 text-white px-4 overflow-hidden py-20 md:py-0"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculos decorativos - Reducidos para móviles */}
        <div className="absolute top-16 left-8 w-32 sm:w-56 h-32 sm:h-56 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-8 right-8 w-40 sm:w-80 h-40 sm:h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 sm:w-72 h-32 sm:h-72 bg-teal-600/10 rounded-full blur-3xl"></div>
        
        {/* Malla de puntos - Más pequeña en móviles */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
               backgroundSize: '15px 15px'
             }}>
        </div>
        
        {/* Formas de píldoras flotantes - Adaptadas para móviles */}
        <div className="absolute top-1/4 left-1/4 w-8 sm:w-14 h-4 sm:h-7 bg-teal-500/30 rounded-full transform rotate-45 animate-float-slow"></div>
        <div className="absolute top-2/3 right-1/3 w-6 sm:w-12 h-3 sm:h-6 bg-teal-400/30 rounded-full transform -rotate-12 animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 sm:w-10 h-2.5 sm:h-5 bg-teal-600/30 rounded-full transform rotate-30 animate-float-fast"></div>
        <div className="absolute top-1/2 right-1/4 w-5 sm:w-8 h-2.5 sm:h-4 bg-teal-500/30 rounded-full transform rotate-15 animate-float-medium"></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 sm:w-14 h-4 sm:h-7 bg-teal-400/30 rounded-full transform -rotate-20 animate-float-slow"></div>
      </div>

      {/* Contenedor principal - Centrado en la página con mejor padding vertical en móviles */}
      <div className="max-w-5xl mx-auto z-10 text-center px-3 sm:px-4 pt-16 md:pt-0">
        {/* Logo/Badge superior */}
        <div className="inline-flex items-center bg-gray-900/40 rounded-full px-3 py-1 mb-6 backdrop-blur-sm border border-gray-700/50">
          <span className="flex h-2 w-2 sm:h-2.5 sm:w-2.5 relative">
            <span className="animate-ping absolute h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-teal-500"></span>
          </span>
          <span className="ml-2 text-xs font-medium">Gestión inteligente de medicación</span>
        </div>
        
        {/* Título principal - Ajustado para móviles */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6 leading-tight max-w-3xl mx-auto px-1">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-300">
            Toda tu medicación
          </span>
          <br />
          <span className="relative">
            en la palma de tu mano
            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 8C150 -8 250 18 295 8" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </span>
        </h1>
        
        {/* Descripción - Texto más compacto en móviles */}
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed px-1">
          oPills revoluciona la gestión de medicamentos con una plataforma accesible para todos, utilizando tecnología de vanguardia para mejorar tu calidad de vida y garantizar un seguimiento óptimo de tu tratamiento.
        </p>
        
        {/* Botones de llamada a la acción - Mejor espacio vertical en móviles */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2">
  <a
    href="#solucion"
    className="bg-teal-500 hover:bg-teal-600 text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 hover:scale-105 transform transition-all duration-300 text-sm sm:text-base"
  >
    Descubre la Solución
  </a>
  <a
    href="#tecnologia"
    className="group border-2 border-gray-300 hover:border-white text-gray-300 hover:text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
  >
    Ver Funcionalidades
    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </a>
</div>

        {/* Tarjetas con características clave - Mejor altura y espaciado en móviles */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 max-w-xs sm:max-w-3xl mx-auto sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-3 sm:p-4 hover:bg-gray-800/40 transition-all hover:scale-105 hover:border-teal-500/30">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <BellRing size={16} className="text-teal-400" aria-hidden="true" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Recordatorios Inteligentes</h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Nunca olvides una dosis con alertas personalizadas que se adaptan a tu rutina diaria
            </p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-3 sm:p-4 hover:bg-gray-800/40 transition-all hover:scale-105 hover:border-teal-500/30">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Users size={16} className="text-teal-400" aria-hidden="true" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Accesibilidad total</h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Interactúa con oPills sin necesidad de usar las manos, ideal para personas con movilidad reducida
            </p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-3 sm:p-4 hover:bg-gray-800/40 transition-all hover:scale-105 hover:border-teal-500/30 sm:col-span-2 md:col-span-1">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Brain size={16} className="text-teal-400" aria-hidden="true" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-1">IA Avanzada</h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Tecnología que aprende tus patrones y optimiza la gestión de tu medicación automáticamente
            </p>
          </div>
        </div>
      </div>
      
      {/* Flecha de scroll down - Mejor posicionada en móviles */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#problema" className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </a>
      </div>
      
      {/* Animaciones para los elementos flotantes - Ligeramente más suaves en móviles */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-15px) rotate(45deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-10px) rotate(-12deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) rotate(30deg); }
          50% { transform: translateY(-8px) rotate(30deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

// ------------------ Sección: El Problema (Expandida) ------------------
const ProblemSection = () => {
  // Datos principales sobre el problema
  const problemStats = [
    { value: "+50%", label: "de la población no gestiona adecuadamente su medicación" },
    { value: "66%", label: "de los errores médicos están relacionados con la medicación" },
    { value: "125.000M€", label: "costo anual por problemas relacionados con medicamentos en Europa" },
  ];

  // Tarjetas de problemas principales
  const problemCards = [
    {
      title: "Seguimiento Deficiente",
      description: "Control ineficaz en el seguimiento de dosis y tratamientos que puede derivar en complicaciones médicas graves, hospitalizaciones y deterioro de la salud.",
      borderColor: "border-red-500",
      icon: <Activity size={32} className="text-red-500" />
    },
    {
      title: "Saturación Sanitaria",
      description: "El sistema sanitario se sobrecarga debido al mal manejo de la medicación, generando consultas innecesarias, reingresos hospitalarios y mayor presión asistencial.",
      borderColor: "border-yellow-500",
      icon: <Users size={32} className="text-yellow-500" />
    },
    {
      title: "Dificultad de Acceso",
      description: "Personas con discapacidad o poca experiencia tecnológica enfrentan barreras para llevar un control preciso de su medicación, aumentando su vulnerabilidad.",
      borderColor: "border-orange-500",
      icon: <HelpCircle size={32} className="text-orange-500" />
    },
    {
      title: "Falta de Integración",
      description: "Las soluciones actuales no se adaptan adecuadamente a las necesidades reales de los usuarios ni se integran con los sistemas de salud existentes.",
      borderColor: "border-teal-500",
      icon: <RefreshCw size={32} className="text-teal-500" />
    }
  ];

  // Casos de personas afectadas
  const affectedPersonas = [
    {
      name: "Adultos mayores",
      description: "Con múltiples medicamentos y posibles problemas de memoria",
      percentage: "78%",
      challenges: ["Olvidos frecuentes", "Confusión entre medicamentos", "Dificultad con la tecnología"]
    },
    {
      name: "Personas con discapacidad",
      description: "Enfrentan barreras adicionales para la gestión correcta",
      percentage: "65%",
      challenges: ["Limitaciones visuales o motoras", "Dificultad para leer etiquetas", "Opciones poco accesibles"]
    },
    {
      name: "Pacientes crónicos",
      description: "Requieren medicación a largo plazo y rutinas estrictas",
      percentage: "82%",
      challenges: ["Tratamientos complejos", "Fatiga por medicación", "Cambios frecuentes en prescripciones"]
    }
  ];

  return (
    <section id="problema" className="px-4 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900/0 opacity-50 -z-10"></div>
      
      {/* Encabezado de la sección */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-block p-2 bg-teal-600/20 rounded-lg mb-4">
          <HelpCircle size={32} className="text-teal-500" aria-hidden="true" />
        </div>
        <h2 className="text-5xl font-bold text-white mb-4">El Problema</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-teal-400 mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
          Una gran parte de la población consume medicación sin un seguimiento adecuado, generando riesgos graves para la salud, deteriorando la calidad de vida e incrementando la carga sobre los sistemas sanitarios.
        </p>
        
        {/* Estadísticas principales */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {problemStats.map((stat, index) => (
            <div key={index} className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg">
              <p className="text-4xl font-bold text-teal-400 mb-2">{stat.value}</p>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Tarjetas de problemas principales */}
      <div className="max-w-6xl mx-auto mb-20">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Desafíos principales</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemCards.map((card, index) => (
            <div 
              key={index} 
              className={`bg-gray-800/70 p-6 rounded-xl border-l-4 ${card.borderColor} hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-${card.borderColor.replace('border-', '')}/10`}
            >
              <div className="flex justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Barreras existentes */}
      <div className="max-w-6xl mx-auto mb-20">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Barreras en las soluciones actuales</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-xl">
            <h4 className="text-xl font-semibold text-teal-400 mb-4">Limitaciones tecnológicas</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✖</span>
                <p>Interfaces complejas que requieren habilidades digitales avanzadas</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✖</span>
                <p>Falta de opciones para control por voz o asistentes accesibles</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✖</span>
                <p>Diseños no adaptados para personas con discapacidad visual o motora</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✖</span>
                <p>Ausencia de reconocimiento automático de medicamentos</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-xl">
            <h4 className="text-xl font-semibold text-teal-400 mb-4">Problemas de integración</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✖</span>
                <p>Falta de conexión con cuidadores o profesionales sanitarios</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✖</span>
                <p>Sistemas aislados que no comparten información con centros médicos</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✖</span>
                <p>Recordatorios básicos sin capacidad de adaptación a rutinas personales</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✖</span>
                <p>Ausencia de análisis de adherencia al tratamiento y tendencias</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Grupos especialmente afectados */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Grupos especialmente afectados</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {affectedPersonas.map((persona, index) => (
            <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden shadow-xl">
              <div className="bg-teal-900/50 p-4">
                <h4 className="text-xl font-semibold text-white">{persona.name}</h4>
                <p className="text-sm text-gray-300">{persona.description}</p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Problemas con la medicación</span>
                    <span className="text-lg font-bold text-teal-400">{persona.percentage}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: persona.percentage }}></div>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium text-gray-400 mb-2">Principales desafíos:</h5>
                  <ul className="space-y-1">
                    {persona.challenges.map((challenge, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Llamada a la acción */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <p className="text-xl text-gray-300 mb-8 italic">
          "La gestión incorrecta de medicamentos no es solo un problema de salud individual, 
          sino un desafío socioeconómico que requiere soluciones innovadoras y accesibles para todos."
        </p>
        <a href="#solucion" className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-lg">
          <span>Descubre cómo oPills resuelve estos problemas</span>
          <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

// ------------------ Sección: Funcionalidades Avanzadas ------------------
const FeatureCard = memo(({ title, description, icon, borderColor }) => (
  <div
    className={`bg-gray-800/70 p-6 rounded-xl border-l-4 ${borderColor} hover:scale-105 transform transition-all`}
  >
    <div className="flex justify-center mb-4">
      <div className="bg-gradient-to-br from-teal-600 to-teal-800 p-3 rounded-full">
        {icon}
      </div>
    </div>
    <h4 className="font-bold text-teal-400 mb-2 text-center">{title}</h4>
    <p className="text-gray-300 text-sm text-center">{description}</p>
  </div>
));

FeatureCard.displayName = 'FeatureCard';



// ------------------ Sección: Inteligencia Artificial Avanzada ------------------
const AIFeature = memo(({ icon, title, description }) => (
  <div className="flex flex-col items-center">
    {icon}
    <span className="text-teal-400 font-semibold mt-2">{title}</span>
    <p className="text-gray-300 text-sm text-center">{description}</p>
  </div>
));

AIFeature.displayName = 'AIFeature';


// Componente para estadísticas animadas
const AnimatedStat = ({ value, label, icon }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  
  // Efecto para animar el contador
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < numericValue) {
          return prevCount + 1;
        }
        clearInterval(interval);
        return numericValue;
      });
    }, 20);
    
    return () => clearInterval(interval);
  }, [numericValue]);
  
  return (
    <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-teal-500/10 hover:scale-105 transition-all duration-300">
      <div className="flex flex-col items-center">
        <div className="mb-3 bg-teal-900/50 w-16 h-16 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-3xl font-bold text-teal-400 mb-2">{count}%</h3>
        <p className="text-center text-gray-300">{label}</p>
      </div>
    </div>
  );
};

// Componente para tarjetas de objetivos de desarrollo sostenible (ODS)
const SDGCard = ({ number, title, description, icon }) => (
  <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        <div className="w-12 h-12 rounded-lg bg-teal-900 flex items-center justify-center text-white font-bold relative">
          <span>ODS</span>
          <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-xs">
            {number}
          </span>
        </div>
      </div>
      <div>
        <div className="flex items-center mb-2">
          <div className="mr-2 text-teal-400">
            {icon}
          </div>
          <h4 className="font-semibold text-white">{title}</h4>
        </div>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  </div>
);

const ImpactSection = () => {
  // Definición de estadísticas
  const stats = [
    { 
      value: "85%", 
      label: "Mejora en adherencia a tratamientos", 
      icon: <TrendingUp size={28} className="text-teal-400" /> 
    },
    { 
      value: "62%", 
      label: "Reducción en errores de medicación", 
      icon: <Shield size={28} className="text-teal-400" /> 
    },
    { 
      value: "40%", 
      label: "Menos complicaciones médicas", 
      icon: <Heart size={28} className="text-teal-400" /> 
    },
    { 
      value: "93%", 
      label: "Satisfacción de usuarios", 
      icon: <Sparkles size={28} className="text-teal-400" /> 
    }
  ];

  // Definición de ODS (Objetivos de Desarrollo Sostenible)
  const sdgs = [
    {
      number: 3,
      title: "Salud y Bienestar",
      description: "oPills contribuye directamente a mejorar la salud y calidad de vida mediante una gestión más eficiente de tratamientos médicos.",
      icon: <Heart size={20} />
    },
    {
      number: 10,
      title: "Reducción de Desigualdades",
      description: "Nuestra tecnología accesible reduce barreras para personas con discapacidad y adultos mayores en el sistema sanitario.",
      icon: <Accessibility size={20} />
    },
    {
      number: 9,
      title: "Industria, Innovación e Infraestructura",
      description: "Aplicamos innovación tecnológica para resolver desafíos sociales, mejorando la infraestructura sanitaria.",
      icon: <Building size={20} />
    }
  ];

  // Definición de principios EVISAR (del PDF) usando iconos de lucide-react
  const principles = [
    {
      icon: <Accessibility size={32} className="text-teal-500" />,
      title: "Inclusión",
      description: "Diseño universal accesible para todas las personas"
    },
    {
      icon: <Shield size={32} className="text-teal-500" />,
      title: "Responsabilidad",
      description: "Uso ético de la tecnología y los datos de salud"
    },
    {
      icon: <Heart size={32} className="text-teal-500" />,
      title: "Cuidado",
      description: "Enfoque centrado en el bienestar integral del paciente"
    },
    {
      icon: <Activity size={32} className="text-teal-500" />,
      title: "Eficiencia",
      description: "Optimización de recursos sanitarios y tiempo del paciente"
    },
    {
      icon: <Check size={32} className="text-teal-500" />,
      title: "Eficacia",
      description: "Resultados medibles en la mejora de la adherencia al tratamiento"
    },
    {
      icon: <TrendingUp size={32} className="text-teal-500" />,
      title: "Precisión",
      description: "Exactitud en la administración de medicamentos y dosis"
    }
  ];

  return (
    <section id="impacto" className="px-4 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative">
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-t from-teal-900/20 to-gray-900/20 -z-10"></div>
      
      {/* Encabezado de la sección */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-block p-2 bg-teal-600/20 rounded-lg mb-4">
          <Heart size={30} className="text-teal-500" aria-hidden="true" />
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">Impacto Social</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-teal-400 mx-auto mb-6"></div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          oPills va más allá de ser una simple aplicación; es una herramienta de transformación
          social que promueve la equidad sanitaria, la autonomía personal y
          la sostenibilidad de los sistemas de salud.
        </p>
      </div>
      
      {/* Estadísticas de impacto */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedStat 
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
      
      {/* Contribución a Objetivos de Desarrollo Sostenible */}
      <div className="max-w-6xl mx-auto mb-20">
        <h3 className="text-2xl font-bold text-white text-center mb-10">
          Contribución a los Objetivos de Desarrollo Sostenible
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {sdgs.map((sdg, index) => (
            <SDGCard
              key={index}
              number={sdg.number}
              title={sdg.title}
              description={sdg.description}
              icon={sdg.icon}
            />
          ))}
        </div>
      </div>
      
      {/* Principios oPills (EVISAR del PDF) */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Nuestros Principios
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 mt-1">
                  {principle.icon}
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-medium text-teal-400">{principle.title}</h4>
                  <p className="mt-1 text-gray-300">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <blockquote className="text-xl italic text-gray-300 max-w-3xl mx-auto">
              "La verdadera innovación tecnológica no solo mejora vidas individuales, 
              sino que construye un sistema más equitativo, accesible y sostenible para todos."
            </blockquote>
            <p className="mt-4 text-teal-400 font-medium">— Equipo oPills</p>
          </div>
        </div>
      </div>
      
      {/* Llamada a la acción */}
      <div className="max-w-3xl mx-auto mt-20 text-center">
        <h3 className="text-2xl font-bold text-white mb-6">Únete a la transformación de la salud digital</h3>
        <p className="text-gray-300 mb-8">
          Descubre cómo oPills está mejorando la calidad de vida de personas en todo el mundo
          a través de la tecnología accesible y centrada en el usuario.
        </p>
        <a 
    href="mailto:ochat2006@gmail.com" 
    className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-teal-500/20"
  >
    <span>Contáctanos</span>
    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </a>
      </div>
    </section>
  );
};
// Componente para representar una píldora individual en el mockup
const MedicationCard = ({ icon, name, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-3">
      <div className="flex flex-col items-center">
        <div className={`mb-2 text-${color}-500`}>
          {icon}
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="/api/placeholder/60/30" 
            alt="Medication" 
            className="w-12 h-6 bg-cream-100 rounded-full mb-2" 
            style={{
              background: 'linear-gradient(to right, #f8d7da, #fff3cd)',
              borderRadius: '999px'
            }}
          />
          <p className="text-gray-900 text-xs font-bold mt-1">{name}</p>
        </div>
      </div>
    </div>
  );
};

// Componente para representar un grupo de medicamentos por momento del día
const MedicationTimeGroup = ({ title, medications, bgColor }) => {
  return (
    <div className={`mb-4 rounded-lg p-3 ${bgColor}`}>
      <h4 className="text-gray-900 font-bold text-sm mb-2">{title}</h4>
      <div className="grid grid-cols-2 gap-2">
        {medications.map((med, index) => (
          <MedicationCard 
            key={index}
            icon={med.icon}
            name={med.name}
            color={med.color}
          />
        ))}
      </div>
    </div>
  );
};

const CaregiversSection = () => {
  const [activeTab, setActiveTab] = useState('app'); // 'app' o 'portal'

  // Rutas de las imágenes de los mockups (actualiza estas rutas según tus archivos)
  const appMockupImageUrl = '/galeria/mockupmovil.jpg'; 
  const portalMockupImageUrl = '/galeria/mockupordenador.jpg';

  return (
    <section id="solucion" className="px-4 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative">
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-teal-900/20 to-gray-900/20 -z-10"></div>
      
      {/* Encabezado de la sección */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-block p-2 bg-teal-600/20 rounded-lg mb-4">
          <Users size={30} className="text-teal-500" aria-hidden="true" />
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">La solución: oPills</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-teal-400 mx-auto mb-6"></div>
        <p className="text-lg text-gray-300">
          oPills permite una conexión perfecta entre pacientes y cuidadores, facilitando
          el monitoreo remoto y una atención médica personalizada.
        </p>
      </div>
      
      {/* Navegación entre pestañas */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1 bg-gray-800/60 rounded-lg backdrop-blur-sm">
          <button
            onClick={() => setActiveTab('app')}
            className={`px-5 py-2 rounded-md font-medium transition-all ${
              activeTab === 'app' 
                ? 'bg-teal-500 text-white shadow-lg' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <div className="flex items-center">
              <Smartphone size={18} className="mr-2" />
              App Usuario
            </div>
          </button>
          <button
            onClick={() => setActiveTab('portal')}
            className={`px-5 py-2 rounded-md font-medium transition-all ${
              activeTab === 'portal' 
                ? 'bg-teal-500 text-white shadow-lg' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <div className="flex items-center">
              <Monitor size={18} className="mr-2" />
              Portal de Cuidador
            </div>
          </button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Columna izquierda: Fotografía del mockup */}
        <div className="flex justify-center">
          {activeTab === 'app' ? (
            <img 
              src={appMockupImageUrl} 
              alt="Mockup de la App" 
              className="w-64 h-auto rounded-lg shadow-2xl" 
            />
          ) : (
            <img 
              src={portalMockupImageUrl} 
              alt="Mockup del Portal Web" 
              className="w-full max-w-[600px] h-auto rounded-lg shadow-2xl"
              />
          )}
        </div>
        
        {/* Columna derecha: Características */}
        <div>
          <h3 className="text-2xl font-bold text-teal-400 mb-6">
            {activeTab === 'app' 
              ? 'Gestión intuitiva de medicamentos' 
              : 'Control completo para cuidadores'}
          </h3>
          
          <div className="space-y-6">
            {activeTab === 'app' ? (
              <>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-900 text-teal-400">
                      <Pill size={18} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium text-white">Organiza por momentos del día</h4>
                    <p className="mt-2 text-gray-300">
                      Medicamentos agrupados por momentos específicos del día para facilitar su toma 
                      y evitar confusiones u olvidos.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-900 text-teal-400">
                      <Activity size={18} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium text-white">Identificación visual</h4>
                    <p className="mt-2 text-gray-300">
                      Cada medicamento se identifica claramente con su nombre e iconos intuitivos que 
                      representan su función terapéutica.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-900 text-teal-400">
                      <RefreshCw size={18} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium text-white">Sincronización automática</h4>
                    <p className="mt-2 text-gray-300">
                      La información sobre la toma de medicamentos se sincroniza automáticamente con 
                      el portal del cuidador en tiempo real.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-900 text-teal-400">
                      <Users size={18} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium text-white">Gestión de múltiples pacientes</h4>
                    <p className="mt-2 text-gray-300">
                      Permite supervisar a varios pacientes desde un único panel, ideal para 
                      familiares o profesionales sanitarios.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-900 text-teal-400">
                      <Activity size={18} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium text-white">Alertas en tiempo real</h4>
                    <p className="mt-2 text-gray-300">
                      Recibe notificaciones instantáneas sobre medicamentos olvidados o 
                      cambios en los patrones de adherencia.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-900 text-teal-400">
                      <Brain size={18} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium text-white">Informes detallados</h4>
                    <p className="mt-2 text-gray-300">
                      Genera reportes completos sobre la adherencia al tratamiento que pueden 
                      compartirse con el equipo médico.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
          
        </div>
      </div>
      
      {/* Integración y seguridad */}
      <div className="mt-20 bg-gray-800/40 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white mb-4">Integración segura y privada</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            La comunicación entre la app del usuario y el portal del cuidador está protegida 
            con la más alta seguridad, garantizando la privacidad de los datos médicos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-700/50 p-6 rounded-lg hover:bg-gray-700/80 transition-colors">
            <div className="w-12 h-12 bg-teal-900/50 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-teal-400 text-center mb-2">Datos encriptados</h4>
            <p className="text-gray-300 text-center text-sm">
              Toda la información médica se almacena y transmite con encriptación de grado médico.
            </p>
          </div>
          
          <div className="bg-gray-700/50 p-6 rounded-lg hover:bg-gray-700/80 transition-colors">
            <div className="w-12 h-12 bg-teal-900/50 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-teal-400 text-center mb-2">Control de permisos</h4>
            <p className="text-gray-300 text-center text-sm">
              Los usuarios deciden qué información comparten y con quién la comparten.
            </p>
          </div>
          
          <div className="bg-gray-700/50 p-6 rounded-lg hover:bg-gray-700/80 transition-colors">
            <div className="w-12 h-12 bg-teal-900/50 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-teal-400 text-center mb-2">Registro de actividad</h4>
            <p className="text-gray-300 text-center text-sm">
              Historial completo de accesos y cambios para garantizar transparencia y seguridad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ------------------ Sección: Tecnología y Funcionalidades ------------------

const TechnologySection = () => {
  // Estado para la pestaña activa
  const [activeTab, setActiveTab] = useState('funcionalidades');
  
  // Datos para las diferentes pestañas
  const tabData = {
    funcionalidades: {
      title: "Funcionalidades Avanzadas",
      description: "oPills ofrece un conjunto completo de herramientas diseñadas para facilitar la gestión de medicamentos de manera intuitiva y accesible para todos.",
      items: [
        {
          icon: <BellRing size={24} className="text-white" />,
          title: "Recordatorios Inteligentes",
          description: "Alertas personalizadas basadas en los hábitos del usuario, que se adaptan a sus rutinas y ofrecen flexibilidad para medicamentos según necesidad."
        },
        {
          icon: <Camera size={24} className="text-white" />,
          title: "Escaneo de Medicamentos",
          description: "Reconocimiento automático mediante la cámara que identifica medicamentos por su aspecto, forma o código de barras."
        },
        {
          icon: <Mic size={24} className="text-white" />,
          title: "Control Total por Voz",
          description: "Interacción manos libres mediante comandos de voz naturales para todas las funciones de la aplicación."
        },
        {
          icon: <Users size={24} className="text-white" />,
          title: "Portal para Cuidadores",
          description: "Plataforma web que permite a familiares o profesionales sanitarios supervisar y apoyar la adherencia al tratamiento."
        },
        {
          icon: <Activity size={24} className="text-white" />,
          title: "Análisis de Adherencia",
          description: "Reportes detallados sobre el cumplimiento del tratamiento y tendencias para identificar patrones."
        },
        {
          icon: <Check size={24} className="text-white" />,
          title: "Verificación de Interacciones",
          description: "Alerta sobre posibles interacciones entre medicamentos para prevenir problemas de salud."
        }
      ]
    },
    tecnologias: {
      title: "Tecnologías Utilizadas",
      description: "oPills está construido sobre una arquitectura robusta y moderna que garantiza un rendimiento óptimo, escalabilidad y seguridad.",
      items: [
        {
          icon: <Code size={24} className="text-white" />,
          title: "Frontend Web (React) y Móvil (Jetpack Compose)",
          description: "Interfaces de usuario multiplataforma con React para web y Jetpack Compose para la experiencia nativa en Android."
        },
        {
          icon: <Server size={24} className="text-white" />,
          title: "Backend Web (Spring Boot) y Móvil (Kotlin)",
          description: "Servidores robustos y escalables que gestionan la lógica de negocio para las aplicaciones web y móvil."
        },
        {
          icon: <Database size={24} className="text-white" />,
          title: "Base de datos con Supabase",
          description: "Almacenamiento persistente que permite gestionar información de manera flexible y segura a través de la API OpenAI Supabase."
        },
        {
          icon: <Mic size={24} className="text-white" />,
          title: "Microservicio de Transcripción de Voz con OpenAI Whisper",
          description: "Microservicio Flask que procesa comandos de voz y los convierte a texto utilizando la API OpenAI Whisper."
        },
        {
          icon: <Image size={24} className="text-white" />,
          title: "Microservicio de Análisis de Imágenes y Reconocimiento de Texto",
          description: "Microservicio Flask que analiza imágenes de medicamentos utilizando Remove.bg API y OpenAI Imágenes."
        },
        {
          icon: <MessageSquare size={24} className="text-white" />,
          title: "Microservicio de Resolución de Consultas sobre Medicamentos y Tratamientos",
          description: "Microservicio Flask que procesa y responde a preguntas de los usuarios sobre medicamentos y tratamientos."
        },
        {
          icon: <FileText size={24} className="text-white" />,
          title: "Microservicio de Generación de Explicaciones Detalladas con OpenAI",
          description: "Microservicio Flask que genera explicaciones detalladas sobre medicamentos utilizando la API OpenAI texto."
        },
        {
          icon: <FileJson size={24} className="text-white" />,
          title: "Microservicio de Conversión de Respuestas a Estructura JSON",
          description: "Microservicio Flask que estructura la información textual en formato JSON para su procesamiento avanzado."
        }
      ]
    },
    
    ia: {
      title: "Inteligencia Artificial Avanzada",
      description: "oPills integra múltiples tecnologías de IA para ofrecer una experiencia personalizada, accesible y eficiente en la gestión de medicamentos.",
      items: [
        {
          icon: <Mic size={24} className="text-white" />,
          title: "API OpenAI Whisper",
          description: "Servicio externo que proporciona reconocimiento de voz avanzado para transcribir comandos hablados a texto."
        },
        {
          icon: <Image size={24} className="text-white" />,
          title: "APIs externas de procesamiento visual",
          description: "Remove.bg API y OpenAI Imágenes para el análisis y reconocimiento de medicamentos mediante fotografías."
        },
        {
          icon: <Cloud size={24} className="text-white" />,
          title: "API OpenAI texto",
          description: "Servicio externo de procesamiento de lenguaje natural para generar y analizar contenido textual relacionado con medicamentos."
        }
      ]
    }
  };
  
  
  // Iconos para la sección "Cómo funciona"
  const howItWorksSteps = [
    {
      icon: <Camera size={32} className="text-teal-400" />,
      title: "Registra tus medicamentos",
      description: "Usa la cámara o la voz para añadir fácilmente tus medicamentos a la aplicación."
    },
    {
      icon: <BellRing size={32} className="text-teal-400" />,
      title: "Recibe recordatorios",
      description: "oPills te notifica en el momento adecuado para tomar cada medicamento."
    },
    {
      icon: <Check size={32} className="text-teal-400" />,
      title: "Confirma las tomas",
      description: "Marca como tomado cada medicamento para llevar un seguimiento preciso."
    },
    {
      icon: <Activity size={32} className="text-teal-400" />,
      title: "Supervisa tu adherencia",
      description: "Visualiza informes y comparte la información con cuidadores si lo deseas."
    }
  ];
  
  return (
    <section id="tecnologia" className="px-4 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative">
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-teal-900/20 to-gray-900/20 -z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-block p-2 bg-teal-600/20 rounded-lg mb-4">
          <Brain size={30} className="text-teal-500" aria-hidden="true" />
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">Tecnología Avanzada</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-teal-400 mx-auto mb-6"></div>
        <p className="text-lg text-gray-300">
          oPills combina tecnologías de vanguardia para ofrecer una experiencia intuitiva, 
          accesible y segura que revoluciona la forma de gestionar la medicación.
        </p>
      </div>
      
      {/* Demostración visual */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-xl">
          {/* Elementos decorativos de fondo */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Cómo funciona oPills</h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Línea conectora entre pasos */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-teal-500 to-transparent transform -translate-x-1/2 z-0"></div>
                  )}
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 z-10 relative">
                      {step.icon}
                      <div className="absolute -right-1 -bottom-1 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        {index + 1}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2 text-center">{step.title}</h4>
                    <p className="text-gray-300 text-center text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs de navegación */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-800/60 rounded-lg backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('funcionalidades')}
              className={`px-5 py-2 rounded-md font-medium transition-all ${
                activeTab === 'funcionalidades' 
                  ? 'bg-teal-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <div className="flex items-center">
                <Check size={18} className="mr-2" />
                Funcionalidades
              </div>
            </button>
            <button
              onClick={() => setActiveTab('tecnologias')}
              className={`px-5 py-2 rounded-md font-medium transition-all ${
                activeTab === 'tecnologias' 
                  ? 'bg-teal-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <div className="flex items-center">
                <Code size={18} className="mr-2" />
                Tecnologías
              </div>
            </button>
            <button
              onClick={() => setActiveTab('ia')}
              className={`px-5 py-2 rounded-md font-medium transition-all ${
                activeTab === 'ia' 
                  ? 'bg-teal-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <div className="flex items-center">
                <Brain size={18} className="mr-2" />
                Inteligencia Artificial
              </div>
            </button>
          </div>
        </div>
        
        {/* Contenido de la pestaña activa */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-teal-400 mb-4 text-center">{tabData[activeTab].title}</h3>
          <p className="text-gray-300 mb-10 text-center max-w-3xl mx-auto">{tabData[activeTab].description}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabData[activeTab].items.map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-800/70 p-6 rounded-xl hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 border border-gray-700"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-teal-600 to-teal-800 p-3 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h4 className="font-bold text-teal-400 mb-2 text-center">{item.title}</h4>
                <p className="text-gray-300 text-sm text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Sección de arquitectura tecnológica */}
      <div className="max-w-6xl mx-auto mt-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Arquitectura Segura y Avanzada</h3>
            <p className="text-gray-300 mb-6">
              oPills ha sido diseñado con una arquitectura robusta de microservicios que integra tecnologías de vanguardia
              para el procesamiento de audio, imágenes y lenguaje natural, priorizando la seguridad y privacidad de los datos médicos.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-900 text-teal-400">
                    <Cpu size={18} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Servidores especializados</h4>
                  <p className="mt-1 text-gray-300 text-sm">
                    5 servidores Flask gestionan diferentes tipos de datos: audio a texto, foto a texto, texto a JSON, consultas y descripción.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-900 text-teal-400">
                    <Server size={18} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Backend dual</h4>
                  <p className="mt-1 text-gray-300 text-sm">
                    Backend web con Spring Boot y móvil con Kotlin, conectados a Supabase para una gestión eficiente de los datos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-900 text-teal-400">
                    <Cloud size={18} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">APIs inteligentes</h4>
                  <p className="mt-1 text-gray-300 text-sm">
                    Integración con servicios externos como OpenAI Whisper, Imágenes, y texto, además de Remove.bg para procesamiento visual.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
            
            {/* Diagrama simplificado de arquitectura */}
            <div className="relative">
              {/* Nivel de Frontend */}
              <div className="border border-gray-700 rounded-lg p-4 bg-gray-800/70 mb-4">
                <h5 className="font-medium text-teal-400 mb-3 flex items-center">
                  <Globe size={18} className="mr-2" />
                  Frontend
                </h5>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-700/60 p-2 rounded text-center">
                    <p className="text-xs text-gray-300">Web</p>
                    <p className="text-xs text-teal-400">React</p>
                  </div>
                  <div className="bg-gray-700/60 p-2 rounded text-center">
                    <p className="text-xs text-gray-300">Móvil</p>
                    <p className="text-xs text-teal-400">Jetpack Compose</p>
                  </div>
                </div>
              </div>
              
              {/* Flecha de conexión */}
<div className="flex justify-center mb-4">
  <div className="w-0.5 h-12 bg-gray-600 relative">
    <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 border-x-8 border-x-transparent border-t-8 border-t-gray-600"></div>
  </div>
</div>
              
              {/* Nivel de Backend */}
              <div className="border border-gray-700 rounded-lg p-4 bg-gray-800/70 mb-4">
                <h5 className="font-medium text-teal-400 mb-3 flex items-center">
                  <Server size={18} className="mr-2" />
                  Backend
                </h5>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-700/60 p-2 rounded text-center">
                    <p className="text-xs text-gray-300">Web</p>
                    <p className="text-xs text-teal-400">Spring Boot</p>
                  </div>
                  <div className="bg-gray-700/60 p-2 rounded text-center">
                    <p className="text-xs text-gray-300">Móvil</p>
                    <p className="text-xs text-teal-400">Kotlin</p>
                  </div>
                  <div className="bg-gray-700/60 p-2 rounded text-center">
                    <p className="text-xs text-gray-300">DB</p>
                    <p className="text-xs text-teal-400">Supabase</p>
                  </div>
                </div>
              </div>
              
              {/* Flecha de conexión */}
<div className="flex justify-center mb-4">
  <div className="w-0.5 h-12 bg-gray-600 relative">
    <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 border-x-8 border-x-transparent border-t-8 border-t-gray-600"></div>
  </div>
</div>
              
              {/* Nivel de Servidores Python */}
              <div className="border border-gray-700 rounded-lg p-4 bg-gray-800/70 mb-4">
                <h5 className="font-medium text-teal-400 mb-3 flex items-center">
                  <Code size={18} className="mr-2" />
                  Servidores Python (Flask)
                </h5>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <div className="bg-gray-700/60 p-2 rounded text-center">
                    <p className="text-xs text-gray-300">Audio a texto</p>
                  </div>
                  <div className="bg-gray-700/60 p-2 rounded text-center">
                    <p className="text-xs text-gray-300">Foto a texto</p>
                  </div>
                  <div className="bg-gray-700/60 p-2 rounded text-center">
                    <p className="text-xs text-gray-300">Texto a JSON</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-700/60 p-2 rounded text-center">
                    <p className="text-xs text-gray-300">Consultas</p>
                  </div>
                  <div className="bg-gray-700/60 p-2 rounded text-center">
                    <p className="text-xs text-gray-300">Descripción</p>
                  </div>
                </div>
              </div>
              
              {/* Flecha de conexión */}
<div className="flex justify-center mb-4">
  <div className="w-0.5 h-12 bg-gray-600 relative">
    <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 border-x-8 border-x-transparent border-t-8 border-t-gray-600"></div>
  </div>
</div>
              
              {/* Nivel de Servicios Externos */}
              <div className="border border-gray-700 rounded-lg p-4 bg-gray-800/70">
                <h5 className="font-medium text-teal-400 mb-3 flex items-center">
                  <Cloud size={18} className="mr-2" />
                  Servicios Externos
                </h5>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-700/60 p-2 rounded text-center">
                    <p className="text-xs text-gray-300">Remove.bg API</p>
                  </div>
                  <div className="bg-gray-700/60 p-2 rounded text-center">
                    <p className="text-xs text-gray-300">OpenAI Imágenes</p>
                  </div>
                  <div className="bg-gray-700/60 p-2 rounded text-center">
                    <p className="text-xs text-gray-300">OpenAI Whisper</p>
                  </div>
                  <div className="bg-gray-700/60 p-2 rounded text-center">
                    <p className="text-xs text-gray-300">OpenAI texto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// ------------------ Footer ------------------
const FooterLink = memo(({ href, children }) => (
  <a href={href} className="text-teal-400 hover:text-teal-300 transition-colors">
    {children}
  </a>
));

FooterLink.displayName = 'FooterLink';

const FooterSection = memo(({ title, children }) => (
  <div>
    <p className="text-base font-bold tracking-wide text-gray-300">{title}</p>
    {children}
  </div>
));

FooterSection.displayName = 'FooterSection';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { href: "#problema", label: "El Problema" },
    { href: "#solucion", label: "La Solución: oPills" },
    { href: "#tecnologia", label: "Funcionalidades Avanzadas" },
    { href: "#impacto", label: "Impacto Social" },
  ];

  return (
    <footer className="px-4 pt-16 pb-8 bg-gray-900/80 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a href="#hero" className="inline-flex items-center group mb-6" aria-label="oPills Home">
              <div className="mr-2 text-teal-400 transition-all duration-300 group-hover:scale-110">
                <Pill size={28} strokeWidth={2.5} aria-hidden="true" />
              </div>
              <span className="text-2xl font-bold tracking-wide text-teal-400 group-hover:text-teal-300 transition-colors">
                oPills
              </span>
            </a>
            <p className="text-gray-400 mb-6">
              Toda tu medicación en la palma de tu mano. Una solución innovadora y accesible para gestionar tu salud con tecnología de vanguardia.
            </p>
          </div>
          
          <FooterSection title="Contacto">
            <ul className="mt-2 space-y-2">
              <li className="flex items-start">
                <span className="mr-1 text-gray-400">Email:</span>
                <FooterLink href="mailto:info@opills.com">ochat2006@gmail.com</FooterLink>
              </li>
            </ul>
          </FooterSection>
          
          <FooterSection title="Enlaces">
            <ul className="mt-2 space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterSection>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-5 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            © {currentYear} oPills. Todos los derechos reservados.
          </p>
          <div className="flex mt-4 md:mt-0 space-x-6">
            <a href="/privacy" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
              Política de Privacidad
            </a>
            <a href="/terms" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
              Términos de Servicio
            </a>
            <a href="/cookies" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ------------------ Componente Principal ------------------
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    
    // Listener para el scroll
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup del listener al desmontar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para alternar el menú móvil
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  // Efecto para prevenir desplazamiento cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="overflow-x-hidden min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar isScrolled={isScrolled} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <main>
        <Hero />
        <ProblemSection />
        <CaregiversSection/>
        <TechnologySection/>
        <ImpactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;