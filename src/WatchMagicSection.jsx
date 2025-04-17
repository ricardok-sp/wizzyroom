import React, { useState } from 'react';
import './WatchMagicSection.css';
import WatchMagicSectionSidebar from './WatchMagicSectionSidebar';
import { FaMagic, FaVolumeUp } from 'react-icons/fa';

const hotspots = [
  { top: '30%', left: '6%', label: 'United States of America' },
  { top: '38%', left: '51%', label: 'Egypt' },
  { top: '63%', left: '20%', label: 'Brazil' },
  { top: '37%', left: '80%', label: 'China' },
];

export default function WatchMagicSection() {
  const [openHotspot, setOpenHotspot] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedMode, setSelectedMode] = useState('country');

  // Labels por hotspot/idioma/modo (mock)
  const hotspotLabels = {
    0: {
      en: { country: 'United States of America', capital: 'Washington, D.C.', population: '331M', language: 'English', funfact: 'Land of the Free!', anthem: 'The Star-Spangled Banner' },
      es: { country: 'Estados Unidos de América', capital: 'Washington, D.C.', population: '331M', language: 'Inglés', funfact: '¡Tierra de la libertad!', anthem: 'El Estandarte de Estrellas' },
      fr: { country: 'États-Unis d’Amérique', capital: 'Washington, D.C.', population: '331M', language: 'Anglais', funfact: 'Pays de la liberté!', anthem: 'La Bannière étoilée' },
      pt: { country: 'Estados Unidos da América', capital: 'Washington, D.C.', population: '331M', language: 'Inglês', funfact: 'Terra da Liberdade!', anthem: 'A Bandeira Estrelada' }
    },
    1: {
      en: { country: 'Egypt', capital: 'Cairo', population: '104M', language: 'Arabic', funfact: 'Land of the Pharaohs!', anthem: 'Bilady, Bilady' },
      es: { country: 'Egipto', capital: 'El Cairo', population: '104M', language: 'Árabe', funfact: '¡Tierra de los faraones!', anthem: 'Bilady, Bilady' },
      fr: { country: 'Égypte', capital: 'Le Caire', population: '104M', language: 'Arabe', funfact: 'Pays des pharaons!', anthem: 'Bilady, Bilady' },
      pt: { country: 'Egito', capital: 'Cairo', population: '104M', language: 'Árabe', funfact: 'Terra dos faraós!', anthem: 'Bilady, Bilady' }
    },
    2: {
      en: { country: 'Brazil', capital: 'Brasília', population: '214M', language: 'Portuguese', funfact: 'Home of Carnival!', anthem: 'Hino Nacional Brasileiro' },
      es: { country: 'Brasil', capital: 'Brasilia', population: '214M', language: 'Portugués', funfact: '¡Hogar del Carnaval!', anthem: 'Himno Nacional Brasileño' },
      fr: { country: 'Brésil', capital: 'Brasilia', population: '214M', language: 'Portugais', funfact: 'Pays du Carnaval!', anthem: 'Hymne National Brésilien' },
      pt: { country: 'Brasil', capital: 'Brasília', population: '214M', language: 'Português', funfact: 'Terra do Carnaval!', anthem: 'Hino Nacional Brasileiro' }
    },
    3: {
      en: { country: 'China', capital: 'Beijing', population: '1.4B', language: 'Chinese', funfact: 'Land of the Great Wall!', anthem: 'March of the Volunteers' },
      es: { country: 'China', capital: 'Pekín', population: '1.4B', language: 'Chino', funfact: '¡Tierra de la Gran Muralla!', anthem: 'Marcha de los Voluntarios' },
      fr: { country: 'Chine', capital: 'Pékin', population: '1.4B', language: 'Chinois', funfact: 'Pays de la Grande Muraille!', anthem: 'Marche des Volontaires' },
      pt: { country: 'China', capital: 'Pequim', population: '1.4B', language: 'Chinês', funfact: 'Terra da Grande Muralha!', anthem: 'Marcha dos Voluntários' }
    }
  };

  // ESC fecha o label
  React.useEffect(() => {
    if (openHotspot === null) return;
    function handleKey(e) {
      if (e.key === 'Escape') setOpenHotspot(null);
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [openHotspot]);

  // Toca o som ao selecionar idioma ou modo
  const playSound = () => {
    const audio = new window.Audio('sound.mp3');
    audio.play();
  };

  return (
    <section id="magic" className="py-16 bg-yellowLogo/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in">Watch the Magic Happen</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
          <div className="flex flex-col items-center">
            <p className="mb-4 text-lg text-center text-purpleLogo font-semibold">Click with the magic wand on the hotspots to hear the magic.</p>
            <div
              className="relative magic-img-container"
              style={{ cursor: `url('/favicon.svg'), auto`, width: 672, height: 512 }}
            >
              <img
                src="travel-room.png"
                alt="Travel Room"
                className="rounded-lg shadow-lg w-full h-full object-cover"
                style={{ minWidth: 320, minHeight: 220 }}
              />
              {hotspots.map((pos, idx) => (
                <button
                  key={idx}
                  className="hotspot hotspot-large"
                  style={{ top: pos.top, left: pos.left }}
                  onClick={() => setOpenHotspot(idx)}
                  aria-label={`Hotspot ${idx + 1}`}
                >
                  <FaMagic className="text-purpleLogo animate-pulse" size={14} />
                </button>
              ))}
              {openHotspot !== null && (
                <div
                  className="hotspot-popup animate-fade-in"
                  style={{
                    top: hotspots[openHotspot].top,
                    left: hotspots[openHotspot].left,
                    position: 'absolute',
                    transform: 'translate(-50%, -120%)',
                    minWidth: 120,
                    zIndex: 20,
                  }}
                >
                  <div className="flex items-center bg-yellowLogo/90 rounded-lg shadow-lg px-3 py-2">
                    <span className="speaker-icon mr-2 animate-bounce">
                      <FaVolumeUp className="text-purpleLogo animate-pulse" size={16} />
                    </span>
                    <span className="font-semibold text-purpleLogo text-base">
                      {hotspotLabels[openHotspot]?.[selectedLanguage]?.[selectedMode] || 'Magic!'}
                    </span>
                  </div>
                  <button
                    className="absolute top-1 right-1 text-xs text-gray-400 hover:text-gray-700"
                    onClick={() => setOpenHotspot(null)}
                    aria-label="Close label"
                  >✕</button>
                </div>
              )}
            </div>
          </div>
          <WatchMagicSectionSidebar
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            selectedMode={selectedMode}
            setSelectedMode={setSelectedMode}
            playSound={playSound}
          />
        </div>
      </div>
    </section>
  );
}
