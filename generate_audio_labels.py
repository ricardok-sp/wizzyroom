from gtts import gTTS

audios = [
    # hotspot, idioma, texto longo atualizado
    (1, 'en', "The United States is known for its cultural and geographic diversity. It's home to several iconic cities like New York, Los Angeles, and Las Vegas, as well as stunning landscapes such as the Grand Canyon and Yellowstone National Park."),
    (1, 'es', "Estados Unidos es conocido por su diversidad cultural y geográfica. Es el hogar de varias ciudades icónicas como Nueva York, Los Ángeles y Las Vegas, y de paisajes impresionantes como el Gran Cañón y el Parque Nacional de Yellowstone."),
    (1, 'fr', "Les États-Unis sont connus pour leur diversité culturelle et géographique. Ils abritent plusieurs villes emblématiques comme New York, Los Angeles et Las Vegas, ainsi que des paysages à couper le souffle tels que le Grand Canyon et le parc national de Yellowstone."),
    (2, 'en', "Did you know that Egypt is home to the ancient pyramids of Giza, including the Great Pyramid of Khufu, one of the Seven Wonders of the Ancient World? Egypt is also famous for its temples, pharaohs' tombs, camel rides, and Nile cruises. It's a country full of mysteries and historical grandeur!"),
    (2, 'es', "¿Sabías que Egipto es el hogar de las antiguas pirámides de Guiza, incluida la Gran Pirámide de Keops, una de las Siete Maravillas del Mundo Antiguo? Además, Egipto es famoso por sus templos, tumbas de faraones, paseos en camello y cruceros por el Nilo. ¡Es un país lleno de misterios y grandeza histórica!"),
    (2, 'fr', "Saviez-vous que l'Égypte abrite les anciennes pyramides de Gizeh, dont la Grande Pyramide de Khéops, l'une des Sept Merveilles du monde antique ? L'Égypte est également célèbre pour ses temples, ses tombes de pharaons, ses balades à dos de chameau et ses croisières sur le Nil. C'est un pays plein de mystères et de grandeur historique !"),
    (3, 'en', "Brazil is known for its vast Amazon rainforest, paradise beaches, and the famous Carnival. An interesting fact is that Brazil is the only country in the world to have participated in every FIFA World Cup since the tournament began in 1930."),
    (3, 'es', "Brasil es conocido por su inmensa Amazonia, sus playas paradisíacas y el famoso Carnaval. Un dato curioso es que Brasil es el único país del mundo que ha participado en todas las Copas del Mundo de Fútbol desde que comenzó el torneo en 1930."),
    (3, 'fr', "Le Brésil est connu pour son immense Amazonie, ses plages paradisiaques et le célèbre Carnaval. Fait intéressant, le Brésil est le seul pays au monde à avoir participé à toutes les Coupes du Monde de football depuis la création du tournoi en 1930."),
    (4, 'en', "Did you know that China is the most populous country in the world? With a population of over 1.4 billion people, China is home to a rich history, culture, and ancient traditions. It is also famous for the Great Wall, the Forbidden City, and its delicious cuisine. It's a country of great diversity and grandeur!"),
    (4, 'es', "¿Sabías que China es el país más poblado del mundo? Con una población de más de 1.400 millones de personas, China es el hogar de una rica historia, cultura y tradiciones milenarias. Además, China es famosa por la Gran Muralla, la Ciudad Prohibida y su deliciosa gastronomía. ¡Es un país de gran diversidad y grandeza!"),
    (4, 'fr', "Saviez-vous que la Chine est le pays le plus peuplé du monde ? Avec plus de 1,4 milliard d'habitants, la Chine possède une histoire, une culture et des traditions millénaires riches. Elle est également célèbre pour la Grande Muraille, la Cité interdite et sa délicieuse cuisine. C'est un pays d'une grande diversité et grandeur !"),
]

for hotspot, lang, text in audios:
    filename = f"hotspot{hotspot}_{lang}_funfact.mp3"
    tts = gTTS(text=text, lang=lang)
    tts.save(f"public/audio_labels/{filename}")
    print(f"Gerado: public/audio_labels/{filename}")


