import React from 'react';
import './WatchMagicSectionSidebar.css';

const languages = [
  { key: 'en', icon: 'english.png', label: 'English' },
  { key: 'es', icon: 'spanish.png', label: 'Spanish' },
  { key: 'fr', icon: 'french.png', label: 'French' },
  { key: 'pt', icon: 'portuguese.png', label: 'Portuguese' }
];
const modes = [
  { key: 'country', icon: 'country.png', label: 'Country' },
  { key: 'capital', icon: 'capital.png', label: 'Capital' },
  { key: 'population', icon: 'population.png', label: 'Population' },
  { key: 'language', icon: 'language.png', label: 'Language' },
  { key: 'funfact', icon: 'funfact.png', label: 'Fun Fact' },
  { key: 'anthem', icon: 'anthem.png', label: 'Anthem' }
];

export default function WatchMagicSectionSidebar({ selectedLanguage, setSelectedLanguage, selectedMode, setSelectedMode }) {
  // Controle de áudio global
  const audioRef = React.useRef(null);

  // Função para parar áudio atual
  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
  };

  // Tocar áudio de idioma (nome do idioma no próprio idioma)
  const playLanguageAudio = (langKey) => {
    stopAudio();
    const file = `/audio_labels/${langKey}_${langKey}.mp3`;
    const audio = new window.Audio(file);
    audioRef.current = audio;
    audio.play();
    audio.onended = () => { audioRef.current = null; };
  };

  // Tocar áudio de modo (nome do modo no idioma selecionado)
  const playModeAudio = (modeKey) => {
    stopAudio();
    const file = `/audio_labels/${selectedLanguage}_${modeKey}.mp3`;
    const audio = new window.Audio(file);
    audioRef.current = audio;
    audio.play();
    audio.onended = () => { audioRef.current = null; };
  };

  return (
    <aside className="magic-sidebar">
      <div className="sidebar-group mb-4">
        {languages.map(lang => (
          <div
            key={lang.key}
            className={`sidebar-icon${selectedLanguage === lang.key ? ' selected' : ''}`}
            onClick={() => {
              setSelectedLanguage(lang.key);
              playLanguageAudio(lang.key);
            }}
            title={lang.label}
          >
            <img src={lang.icon} alt={lang.label} />
          </div>
        ))}
      </div>
      <div className="sidebar-group">
        {modes.map(mode => (
          <div
            key={mode.key}
            className={`sidebar-icon${selectedMode === mode.key ? ' selected' : ''}`}
            onClick={() => {
              setSelectedMode(mode.key);
              playModeAudio(mode.key);
            }}
            title={mode.label}
          >
            <img src={mode.icon} alt={mode.label} />
          </div>
        ))}
      </div>
    </aside>
  );
}

