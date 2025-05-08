import React from 'react';
import {
  Menu,
  X,
  Pill,
  ArrowRight
} from 'lucide-react';

// ------------------ Navbar ------------------
const Header = ({ isMobile }) => {
  // No mostrar el header en dispositivos móviles
  if (isMobile) {
    return null;
  }
  
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo oPills */}
        <div className="flex items-center">
          <img src="/galeria/oPills_logo.png" alt="oPills logo" className="h-12 w-12 mr-2" />
          <span className="text-xl font-bold text-gray-900 tracking-tight">oPills</span>
        </div>
        {/* Logo OSIX */}
        <div className="flex items-center">
          <img src="/galeria/osix_poweredby.png" alt="OSIX logo" className="h-10 w-auto" />
        </div>
      </div>
    </header>
  );
};

// Barra superior de logos
const TopLogosBar = () => {
  // Detectar si estamos en vista móvil
  const [isMobileView, setIsMobileView] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    
    checkMobileView();
    window.addEventListener('resize', checkMobileView);
    
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);
  
  return (
    <div 
      className={`w-full bg-white flex flex-wrap justify-center items-center gap-4 md:gap-8 px-2 md:px-12 ${isMobileView ? 'py-3' : 'py-8'}`}
    >
      <img 
        src="/galeria/osix_poweredby.png" 
        alt="OSIX" 
        className={`${isMobileView ? 'h-8 w-auto' : 'h-14 md:h-20 w-auto'}`} 
        style={{ objectFit: 'contain' }}
      />
      <img 
        src="/galeria/eit_logo.png" 
        alt="EIT" 
        className={`${isMobileView ? 'h-8 w-auto' : 'h-14 md:h-20 w-auto'}`} 
        style={{ objectFit: 'contain' }}
      />
      <img 
        src="/galeria/avte.png" 
        alt="AVTE" 
        className={`${isMobileView ? 'h-8 w-auto' : 'h-14 md:h-20 w-auto'}`} 
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
};

// Sección central con móvil - Rediseñada según la imagen de referencia exacta
const CentralShowcase = () => (
  <section id="central-showcase"
    className="w-full py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16"
    style={{
      background: "linear-gradient(90deg, #f8d7da 0%, #e3e6f5 100%)"
    }}
  >
    <div className="max-w-6xl mx-auto relative">
      {/* Contenedor principal con diseño de 3 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-4">
        
        {/* Columna izquierda */}
        <div className="flex flex-col space-y-8 md:space-y-16">
          <div className="text-center md:text-right">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">Don't lose any dosis!</h3>
            <p className="text-base text-gray-800">Because your health deserves precision.</p>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">Answers when you need them!</h3>
            <p className="text-base text-gray-800">Because your health deserves confidence.</p>
          </div>
        </div>
        
        {/* Columna central con el móvil y círculo */}
        <div className="relative flex justify-center items-center py-4">
          {/* Círculo rosa de fondo */}
          <img
            src="/galeria/pink_circle.png"
            alt="Fondo círculo"
            className="absolute w-[300px] h-[300px] md:w-[350px] md:h-[350px] z-0"
          />
          
          {/* Teléfono con mockup de la app */}
          <img
            src="/galeria/phone.png"
            alt="Mockup móvil"
            className="relative z-10 w-[400px] md:w-[450px]"
          />
        </div>
        
        {/* Columna derecha */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">The right medicine, at the right time!</h3>
            <p className="text-base text-gray-800">Because your health deserves clarity.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ------------------ Sección: Accesibilidad ------------------
const AccessibilitySection = () => (
  <section
    className="w-full flex justify-center items-center pt-0 md:pt-4 pb-16 md:pb-20 px-4 sm:px-6 md:px-8 lg:px-16"
    style={{
      background: "linear-gradient(90deg, #f8d7da 0%, #e3e6f5 100%)"
    }}
  >
    <div className="max-w-7xl w-full flex flex-col items-center">
      {/* Título */}
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">Taking accessibility to the next level</h2>
      
      {/* Iconos de accesibilidad */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-4 mb-16 w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-2 flex items-center justify-center">
            <img src="/galeria/microphone.png" alt="Voice Recognition" className="w-12 h-12" />
          </div>
          <p className="text-sm font-medium text-black text-center">Voice<br/>Recognition</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-2 flex items-center justify-center">
            <img src="/galeria/eye.png" alt="Computer Vision" className="w-12 h-12" />
          </div>
          <p className="text-sm font-medium text-black text-center">Computer<br/>Vision</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-2 flex items-center justify-center">
            <img src="/galeria/font.png" alt="Big Fonts" className="w-12 h-12" />
          </div>
          <p className="text-sm font-medium text-black text-center">Big Fonts</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-2 flex items-center justify-center">
            <img src="/galeria/contrats.png" alt="High Contrasts" className="w-12 h-12" />
          </div>
          <p className="text-sm font-medium text-black text-center">High<br/>Contrasts</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-2 flex items-center justify-center">
            <img src="/galeria/one.png" alt="Only One Screen" className="w-12 h-12" />
          </div>
          <p className="text-sm font-medium text-black text-center">Only One<br/>Screen</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-2 flex items-center justify-center">
            <img src="/galeria/volume.png" alt="Text To Speech" className="w-12 h-12" />
          </div>
          <p className="text-sm font-medium text-black text-center">Text To<br/>Speech</p>
        </div>
      </div>
      
      {/* Pasos numerados */}
      <div className="w-full max-w-3xl mx-auto space-y-8">
        {/* Paso 1 */}
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <img src="/galeria/1.png" alt="Step 1" className="w-14 h-14" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-black">Register with your phone number</h3>
        </div>
        
        {/* Paso 2 */}
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <img src="/galeria/2.png" alt="Step 2" className="w-14 h-14" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-black">Add your medicines by voice, text or image</h3>
        </div>
        
        {/* Paso 3 */}
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <img src="/galeria/3.png" alt="Step 3" className="w-14 h-14" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-black">Keep track of your dosis and get reminders every day</h3>
        </div>
        
        {/* Paso 4 */}
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <img src="/galeria/4.png" alt="Step 4" className="w-14 h-14" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-black">Get summaries and resolve your doubts through our chatbot.</h3>
        </div>
      </div>
    </div>
  </section>
);

// ------------------ Sección: Hero (Nuevo diseño) ------------------
const Hero = ({ isMobile }) => {
  // Si estamos en móvil, mostrar diseño adaptado con las imágenes especificadas
  if (isMobile) {
    return (
      <section className="relative w-full min-h-screen overflow-hidden">
        <div 
          style={{
            width: "100%",
            height: "100vh",
            background: "linear-gradient(90deg, #f8d7da 0%, #e3e6f5 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start", // Cambiado para mejor control del espacio
            alignItems: "center",
            padding: "1rem",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Header con logos */}
          <div className="w-full flex justify-between items-center z-20 px-4 pt-2 pb-4">
            {/* Logo oPills a la izquierda */}
            <img 
              src="/galeria/logo_web.png" 
              alt="oPills logo" 
              className="h-12 w-auto" 
            />
            
            {/* Logo OSIX a la derecha */}
            <img 
              src="/galeria/osix_poweredby.png" 
              alt="OSIX logo" 
              className="h-9 w-auto" 
            />
          </div>
          
          {/* Contenedor principal para mejor control del espacio */}
          <div className="flex flex-col justify-between h-[calc(100vh-80px)] w-full z-10">
            {/* Texto principal - Subido un poco más */}
            <div className="text-center mt-4 px-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                <span className="block">Step into</span>
                <span className="block">the smartest</span>
                <span className="block">most accessible</span>
                <span className="block">medical tracker</span>
              </h2>
            </div>
            
            {/* Espacio flexible para empujar la imagen hacia abajo */}
            <div className="flex-grow"></div>
          </div>
          
          {/* Imágenes de pastillas - Ahora más arriba */}
          <div 
            className="absolute z-0" 
            style={{
              bottom: "0",
              width: "100%",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <img 
              src="/galeria/pillsnobg.png" 
              alt="Pills" 
              style={{
                width: "100%",
                maxWidth: "500px",
                marginBottom: "-20px" // Para que parezca que sale de la pantalla
              }} 
            />
          </div>
        </div>
      </section>
    );
  }

  // En escritorio, mostrar el diseño completo
  return (
    <section 
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/galeria/UpscaledPills.jpg')",
        backgroundSize: "100% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Contenido principal - Solo visible en escritorio */}
      <div className="flex flex-row h-screen">
        {/* Texto */}
        <div className="w-1/2 flex flex-col justify-center pl-16">
          <h1 className="text-6xl font-bold text-gray-900 leading-tight">
            <span className="block">Step into</span>
            <span className="block">the smartest</span>
            <span className="block">most accessible</span>
            <span className="block">medical tracker</span>
          </h1>
          
          <p className="mt-6 mb-8 text-lg text-gray-700">
            Keep track of your medication flawlessly with our smart app
          </p>
          
          <a 
            href="#central-showcase" 
            className="flex items-center w-fit bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-full transition-all"
          >
            Get started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

// ------------------ Sección: Segmentos de Mercado ------------------
const MarketSegmentsSection = () => (
  <section className="w-full relative overflow-hidden">
    {/* Fondo con degradado que cubre toda la sección */}
    <div className="absolute inset-0 w-full"
      style={{ 
        background: "linear-gradient(90deg, #f8d7da 0%, #e3e6f5 100%)"
      }}>
    </div>
    
    {/* Fondo con forma de onda - la sección azul es la redondeada */}
    <div className="absolute inset-0 w-full flex items-center justify-center pointer-events-none">
      {/* Fondo azul circular */}
      <div 
        className="hidden md:block"
        style={{
          width: '2000px',
          height: '1000px',
          background: 'linear-gradient(to right, #3B82F6, #60A5FA)',
          borderRadius: '50% / 50%',
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      />
    </div>
    
    <div className="relative z-20 pt-12 md:pt-24 pb-12 md:pb-20">
      
      {/* Contenedor para la imagen de Adam y los círculos superpuestos */}
      <div className="relative flex items-center justify-center w-full" style={{ minHeight: '600px', '@media (min-width: 768px)': { minHeight: '1100px' } }}>
        {/* Círculo azul de fondo, centrado - más pequeño en móvil */}
        <div 
          className="md:hidden"
          style={{
            width: '1000px',
            height: '600px',
            background: 'linear-gradient(to right, #3B82F6, #60A5FA)',
            borderRadius: '50% / 50%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        />
        <div 
          className="hidden md:block"
          style={{
            width: '2100px',
            height: '1200px',
            background: 'linear-gradient(to right, #3B82F6, #60A5FA)',
            borderRadius: '50% / 50%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        />
        {/* Imagen de las manos (Adán), centrada y encima del círculo */}
        <img 
          src="/galeria/UpscaledAdam.png" 
          alt="AI and Human Connection" 
          className="relative z-10 w-full h-auto max-w-full mx-auto"
        />
      </div>
      
      {/* Posicionamiento exacto de los círculos como en la imagen */}
      
      {/* Círculo B2C - esquina superior izquierda */}
      <div className="absolute top-[15%] md:top-[15%] left-[8%] md:left-[25%] z-10">
        <div className="w-36 h-36 md:w-60 md:h-60 relative">
          <img
            src="/galeria/pink_circle.png"
            alt="B2C Background"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h3 className="text-2xl md:text-4xl font-bold mb-0.5">B2C</h3>
            <ul className="text-center text-[11px] md:text-base space-y-0.5">
              <li>Sick people</li>
              <li>Care givers</li>
              <li>Family members</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Círculo B2B - esquina superior derecha */}
      <div className="absolute top-[15%] md:top-[15%] right-[8%] md:right-[25%] z-10">
        <div className="w-36 h-36 md:w-60 md:h-60 relative">
          <img
            src="/galeria/pink_circle.png"
            alt="B2B Background"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h3 className="text-2xl md:text-4xl font-bold mb-0.5">B2B</h3>
            <ul className="text-center text-[11px] md:text-base space-y-0.5">
              <li>Residences</li>
              <li>Insurance Companies</li>
              <li>Private clinics</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Círculo B2B2C - parte inferior central */}
      <div className="absolute bottom-[15%] md:bottom-[16%] left-[50%] transform -translate-x-1/2 z-10">
        <div className="w-36 h-36 md:w-60 md:h-60 relative">
          <img
            src="/galeria/pink_circle.png"
            alt="B2B2C Background"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h3 className="text-2xl md:text-4xl font-bold mb-0.5">B2B2C</h3>
            <ul className="text-center text-[11px] md:text-base space-y-0.5">
              <li>Residences</li>
              <li>Insurance Companies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ------------------ Sección: Web Dashboard Coming Soon ------------------
const WebDashboardSection = () => (
  <section
    className="w-full py-16 px-4 flex flex-col items-center justify-center"
    style={{
      background: "linear-gradient(90deg, #f8d7da 0%, #e3e6f5 100%)"
    }}
  >
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full max-w-5xl">
      {/* Texto principal */}
      <div className="mb-8 md:mb-0 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          +Web <span className="italic font-semibold">Dashboard</span>
        </h2>
        <p className="text-xl text-gray-800">coming soon...</p>
      </div>
      {/* Imagen del Mac */}
      <div className="flex justify-center">
        <img
          src="/galeria/Mac.png"
          alt="Web Dashboard preview"
          className="w-[350px] md:w-[500px] "
        />
      </div>
    </div>
  </section>
);

// ------------------ Barra inferior (Footer) ------------------
const FooterBar = () => (
  <footer
    className="w-full py-6 px-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4"
    style={{
      background: "#fff"
    }}
  >
    {/* Icono web (placeholder) */}
    <div className="flex items-center gap-2 mb-2 md:mb-0">
      <img
        src="/galeria/web_logo.png"
        alt="Web icon"
        className="w-10 h-10"
      />
    </div>
    {/* Texto principal */}
    <div className="text-lg md:text-xl font-semibold text-black text-center">
      Coming Q4 2025
    </div>
    {/* Iconos de app stores (placeholders) */}
    <div className="flex items-center gap-4 mt-2 md:mt-0">
      <img
        src="/galeria/PlayStore_logo.png"
        alt="Play Store icon"
        className="w-10 h-10"
      />
      <img
        src="/galeria/AppStore_logo.png"
        alt="App Store icon"
        className="w-10 h-10"
      />
    </div>
  </footer>
);

// ------------------ Componente Principal ------------------
const App = () => {
  // Estado para controlar si estamos en vista móvil
  const [isMobile, setIsMobile] = React.useState(false);

  // Efecto para detectar el tamaño de pantalla
  React.useEffect(() => {
    // Función para comprobar si estamos en vista móvil
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Comprobar al cargar
    checkIfMobile();
    
    // Comprobar al cambiar el tamaño de la ventana
    window.addEventListener('resize', checkIfMobile);
    
    // Limpiar el event listener al desmontar
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="overflow-x-hidden min-h-screen bg-white">
      <Header isMobile={isMobile} />
      <main>
        <Hero isMobile={isMobile} />
        <TopLogosBar /> {/* Mostrar la barra de logos en todos los dispositivos */}
        <CentralShowcase />
        <AccessibilitySection />
        <MarketSegmentsSection />
        <WebDashboardSection />
        <FooterBar />
      </main>
    </div>
  );
};

export default App;
