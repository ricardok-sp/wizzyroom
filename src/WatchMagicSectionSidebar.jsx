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

export default function WatchMagicSectionSidebar({ selectedLanguage, setSelectedLanguage, selectedMode, setSelectedMode, playSound }) {
  return (
    <aside className="magic-sidebar">
      <div className="sidebar-group mb-4">
        {languages.map(lang => (
          <div
            key={lang.key}
            className={`sidebar-icon${selectedLanguage === lang.key ? ' selected' : ''}`}
            onClick={() => {
              setSelectedLanguage(lang.key);
              playSound();
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
              playSound();
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
