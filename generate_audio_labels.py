from gtts import gTTS

audios = [
    # Idiomas em espanhol
    #('es_en.mp3', 'Inglés', 'es'),
    #('es_es.mp3', 'Español', 'es'),
    #('es_fr.mp3', 'Francés', 'es'),
    #('es_pt.mp3', 'Portugués', 'es'),
    # Idiomas em francês
    #('fr_en.mp3', 'Anglais', 'fr'),
    #('fr_es.mp3', 'Espagnol', 'fr'),
    #('fr_fr.mp3', 'Français', 'fr'),
    #('fr_pt.mp3', 'Portugais', 'fr'),
    # Labels em espanhol
    #('es_anthem.mp3', 'Himno', 'es'),
    #('es_capital.mp3', 'Capital', 'es'),
    #('es_country.mp3', 'País', 'es'),
    #('es_funfact.mp3', 'Curiosidad', 'es'),
    #('es_language.mp3', 'Idioma', 'es'),
    #('es_population.mp3', 'Población', 'es'),
    # Labels em inglês
    ('en_anthem.mp3', 'National Anthem', 'en'),
    ('en_capital.mp3', 'Capital', 'en'),
    ('en_country.mp3', 'Country', 'en'),
    ('en_funfact.mp3', 'Fun Fact', 'en'),
    ('en_language.mp3', 'Language', 'en'),
    ('en_population.mp3', 'Population', 'en'),
    # Labels em francês
    #('fr_anthem.mp3', 'Hymne', 'fr'),
    #('fr_capital.mp3', 'Capitale', 'fr'),
    #('fr_country.mp3', 'Pays', 'fr'),
    #('fr_funfact.mp3', 'Curiosité', 'fr'),
    #('fr_language.mp3', 'Langue', 'fr'),
    #('fr_population.mp3', 'Population', 'fr'),
]

for filename, text, lang in audios:
    tts = gTTS(text=text, lang=lang)
    tts.save(f"public/audio_labels/{filename}")
    print(f"Gerado: public/audio_labels/{filename}")
