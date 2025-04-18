import React, { useState, useCallback, useEffect } from 'react';
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

  // Controle global de áudio
  const [currentAudio, setCurrentAudio] = React.useState(null);

  // Função para parar áudio atual
  const stopCurrentAudio = useCallback(() => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
    }
  }, [currentAudio]);

  // ESC fecha o label e para áudio
  useEffect(() => {
    if (openHotspot === null) return;
    function handleKey(e) {
      if (e.key === 'Escape') {
        setOpenHotspot(null);
        stopCurrentAudio();
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [openHotspot, stopCurrentAudio]);

  // Clique fora do popup fecha e para áudio
  useEffect(() => {
    if (openHotspot === null) return;
    function handleClick(e) {
      const popup = document.querySelector('.hotspot-popup');
      if (popup && !popup.contains(e.target)) {
        setOpenHotspot(null);
        stopCurrentAudio();
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [openHotspot, stopCurrentAudio]);

  // Limpa áudio ao desmontar
  useEffect(() => {
    return () => {
      stopCurrentAudio();
    };
  }, [stopCurrentAudio]);

  // Toca o som do label do hotspot, parando qualquer outro
  const playHotspotSound = (hotspotIdx) => {
    stopCurrentAudio();
    const lang = selectedLanguage;
    const mode = selectedMode;
    const file = `/audio_labels/hotspot${hotspotIdx+1}_${lang}_${mode}.mp3`;
    const audio = new window.Audio(file);
    setCurrentAudio(audio);
    audio.play();
    audio.onended = () => setCurrentAudio(null);
  };
  // Toca o som ao selecionar idioma ou modo (continua genérico)
  const playSound = () => {
    const audio = new window.Audio('sound.mp3');
    audio.play();
  };

  // Bloco multilíngue de curiosidades
  const funfacts = [
    {
      pt: "Os Estados Unidos são conhecidos por sua diversidade cultural e geográfica. É o lar de várias cidades icônicas, como Nova York, Los Angeles e Las Vegas, e de paisagens deslumbrantes, como o Grand Canyon e o Parque Nacional de Yellowstone.",
      en: "The United States is known for its cultural and geographic diversity. It's home to several iconic cities like New York, Los Angeles, and Las Vegas, as well as stunning landscapes such as the Grand Canyon and Yellowstone National Park.",
      es: "Estados Unidos es conocido por su diversidad cultural y geográfica. Es el hogar de varias ciudades icónicas como Nueva York, Los Ángeles y Las Vegas, y de paisajes impresionantes como el Gran Cañón y el Parque Nacional de Yellowstone.",
      fr: "Les États-Unis sont connus pour leur diversité culturelle et géographique. Ils abritent plusieurs villes emblématiques comme New York, Los Angeles et Las Vegas, ainsi que des paysages à couper le souffle tels que le Grand Canyon et le parc national de Yellowstone.",
    },
    {
      pt: "Você sabia que o Egito é lar das antigas pirâmides de Gizé, incluindo a Grande Pirâmide de Quéops, uma das Sete Maravilhas do Mundo Antigo? Além disso, o Egito é famoso por seus templos, tumbas dos faraós, passeios de camelo e cruzeiros pelo Rio Nilo. É um país cheio de mistérios e grandiosidade histórica!",
      en: "Did you know that Egypt is home to the ancient pyramids of Giza, including the Great Pyramid of Khufu, one of the Seven Wonders of the Ancient World? Egypt is also famous for its temples, pharaohs' tombs, camel rides, and Nile cruises. It's a country full of mysteries and historical grandeur!",
      es: "¿Sabías que Egipto es el hogar de las antiguas pirámides de Guiza, incluida la Gran Pirámide de Keops, una de las Siete Maravillas del Mundo Antiguo? Además, Egipto es famoso por sus templos, tumbas de faraones, paseos en camello y cruceros por el Nilo. ¡Es un país lleno de misterios y grandeza histórica!",
      fr: "Saviez-vous que l'Égypte abrite les anciennes pyramides de Gizeh, dont la Grande Pyramide de Khéops, l'une des Sept Merveilles du monde antique ? L'Égypte est également célèbre pour ses temples, ses tombes de pharaons, ses balades à dos de chameau et ses croisières sur le Nil. C'est un pays plein de mystères et de grandeur historique !"
    },
    {
      pt: "O Brasil é conhecido por sua imensa Amazônia, suas praias paradisíacas e o famoso Carnaval. Uma curiosidade interessante é que o Brasil é o único país do mundo a ter participado de todas as Copas do Mundo de Futebol desde que o torneio começou em 1930.",
      en: "Brazil is known for its vast Amazon rainforest, paradise beaches, and the famous Carnival. An interesting fact is that Brazil is the only country in the world to have participated in every FIFA World Cup since the tournament began in 1930.",
      es: "Brasil es conocido por su inmensa Amazonia, sus playas paradisíacas y el famoso Carnaval. Un dato curioso es que Brasil es el único país del mundo que ha participado en todas las Copas del Mundo de Fútbol desde que comenzó el torneo en 1930.",
      fr: "Le Brésil est connu pour son immense Amazonie, ses plages paradisiaques et le célèbre Carnaval. Fait intéressant, le Brésil est le seul pays au monde à avoir participé à toutes les Coupes du Monde de football depuis la création du tournoi en 1930."
    },
    {
      pt: "Sabia que a China é o país mais populoso do mundo? Com uma população de mais de 1,4 bilhão de pessoas, a China é o lar de uma rica história, cultura e tradições milenares. Além disso, a China é famosa pela Grande Muralha, pela Cidade Proibida e por sua culinária deliciosa. É um país de grande diversidade e grandiosidade!",
      en: "Did you know that China is the most populous country in the world? With a population of over 1.4 billion people, China is home to a rich history, culture, and ancient traditions. It is also famous for the Great Wall, the Forbidden City, and its delicious cuisine. It's a country of great diversity and grandeur!",
      es: "¿Sabías que China es el país más poblado del mundo? Con una población de más de 1.400 millones de personas, China es el hogar de una rica historia, cultura y tradiciones milenarias. Además, China es famosa por la Gran Muralla, la Ciudad Prohibida y su deliciosa gastronomía. ¡Es un país de gran diversidad y grandeza!",
      fr: "Saviez-vous que la Chine est le pays le plus peuplé du monde ? Avec plus de 1,4 milliard d'habitants, la Chine possède une histoire, une culture et des traditions millénaires riches. Elle est également célèbre pour la Grande Muraille, la Cité interdite et sa délicieuse cuisine. C'est un pays d'une grande diversité et grandeur !"
    }
  ];

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
                  onClick={() => {
                    setOpenHotspot(idx);
                    playHotspotSound(idx);
                  }}
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
                    <button
                      className="speaker-icon mr-2 animate-bounce focus:outline-none"
                      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                      onClick={() => playHotspotSound(openHotspot)}
                      tabIndex={0}
                      aria-label="Play label audio"
                    >
                      <FaVolumeUp className="text-purpleLogo animate-pulse" size={16} />
                    </button>
                    <span className="font-semibold text-purpleLogo text-base">
                      {(() => {
                        let label = hotspotLabels[openHotspot]?.[selectedLanguage]?.[selectedMode] || 'Magic!';
                        // Funfact multilíngue
                        if (selectedMode === 'funfact' && openHotspot !== null && funfacts[openHotspot]) {
                          label = funfacts[openHotspot][selectedLanguage] || funfacts[openHotspot]['en'];
                        }
                        if (selectedMode === 'anthem') {
                          const anthemData = [
                            {
                              original: 'The Star-Spangled Banner',
                              translations: {
                                en: 'The Star-Spangled Banner',
                                pt: 'A Bandeira Estrelada',
                                es: 'La bandera estrellada',
                                fr: 'La Bannière étoilée'
                              },
                              countryLang: 'en'
                            },
                            {
                              original: 'Bilady, Bilady',
                              translations: {
                                en: 'My Homeland, My Homeland',
                                pt: 'Minha Pátria, Minha Pátria',
                                es: 'Mi Patria, Mi Patria',
                                fr: 'Ma Patrie, Ma Patrie'
                              },
                              countryLang: 'ar'
                            },
                            {
                              original: 'Hino Nacional Brasileiro',
                              translations: {
                                en: 'Brazilian National Anthem',
                                pt: 'Hino Nacional Brasileiro',
                                es: 'Himno Nacional Brasileño',
                                fr: 'Hymne National Brésilien'
                              },
                              countryLang: 'pt'
                            },
                            {
                              original: 'Í-Yongcün Chingúncu',
                              translations: {
                                en: 'March of the Volunteers',
                                pt: 'Marcha dos Voluntários',
                                es: 'Marcha de los Voluntarios',
                                fr: 'Marche des Volontaires'
                              },
                              countryLang: 'zh'
                            }
                          ];
                          const anthem = anthemData[openHotspot];
                          if (anthem) {
                            const userLang = selectedLanguage;
                            const orig = anthem.original;
                            const translated = anthem.translations[userLang];
                            if ((userLang === 'en' && openHotspot === 0) ||
                                (userLang === 'pt' && openHotspot === 2) ||
                                (userLang === 'zh' && openHotspot === 3) ||
                                (userLang === 'ar' && openHotspot === 1)) {
                              return orig;
                            }
                            if (userLang === 'pt') return `${orig} (que significa "${translated}")`;
                            if (userLang === 'es') return `${orig} (que significa "${translated}")`;
                            if (userLang === 'fr') return `${orig} (qui signifie "${translated}")`;
                            if (userLang === 'en') return `${orig} (which means "${translated}")`;
                            return `${orig} (${translated})`;
                          }
                        }
                        return label;
                      })()}
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
