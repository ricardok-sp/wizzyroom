from gtts import gTTS
import os

# All labels for each hotspot, language, and mode
hotspot_labels = {
    0: {
        'en': {'country': 'United States of America', 'capital': 'Washington, D.C.', 'population': 'Three hundred and thirty-one million people', 'language': 'English', 'funfact': 'Land of the Free!', 'anthem': 'The Star-Spangled Banner'},
        'es': {'country': 'Estados Unidos de América', 'capital': 'Washington, D.C.', 'population': 'Trescientos treinta y un millones de personas', 'language': 'Inglés', 'funfact': '¡Tierra de la libertad!', 'anthem': 'El Estandarte de Estrellas'},
        'fr': {'country': 'États-Unis d’Amérique', 'capital': 'Washington, D.C.', 'population': 'Trois cent trente et un millions de personnes', 'language': 'Anglais', 'funfact': 'Pays de la liberté!', 'anthem': 'La Bannière étoilée'},
        'pt': {'country': 'Estados Unidos da América', 'capital': 'Washington, D.C.', 'population': 'Trezentos e trinta e um milhões de pessoas', 'language': 'Inglês', 'funfact': 'Terra da Liberdade!', 'anthem': 'A Bandeira Estrelada'}
    },
    1: {
        'en': {'country': 'Egypt', 'capital': 'Cairo', 'population': 'One hundred and four million people', 'language': 'Arabic', 'funfact': 'Land of the Pharaohs!', 'anthem': 'Bilady, Bilady'},
        'es': {'country': 'Egipto', 'capital': 'El Cairo', 'population': 'Ciento cuatro millones de personas', 'language': 'Árabe', 'funfact': '¡Tierra de los faraones!', 'anthem': 'Bilady, Bilady'},
        'fr': {'country': 'Égypte', 'capital': 'Le Caire', 'population': 'Cent quatre millions de personnes', 'language': 'Arabe', 'funfact': 'Pays des pharaons!', 'anthem': 'Bilady, Bilady'},
        'pt': {'country': 'Egito', 'capital': 'Cairo', 'population': 'Cento e quatro milhões de pessoas', 'language': 'Árabe', 'funfact': 'Terra dos faraós!', 'anthem': 'Bilady, Bilady'}
    },
    2: {
        'en': {'country': 'Brazil', 'capital': 'Brasília', 'population': 'Two hundred and fourteen million people', 'language': 'Portuguese', 'funfact': 'Home of Carnival!', 'anthem': 'Hino Nacional Brasileiro'},
        'es': {'country': 'Brasil', 'capital': 'Brasilia', 'population': 'Doscientos catorce millones de personas', 'language': 'Portugués', 'funfact': '¡Hogar del Carnaval!', 'anthem': 'Himno Nacional Brasileño'},
        'fr': {'country': 'Brésil', 'capital': 'Brasilia', 'population': 'Deux cent quatorze millions de personnes', 'language': 'Portugais', 'funfact': 'Pays du Carnaval!', 'anthem': 'Hymne National Brésilien'},
        'pt': {'country': 'Brasil', 'capital': 'Brasília', 'population': 'Duzentos e quatorze milhões de pessoas', 'language': 'Português', 'funfact': 'Terra do Carnaval!', 'anthem': 'Hino Nacional Brasileiro'}
    },
    3: {
        'en': {'country': 'China', 'capital': 'Beijing', 'population': 'One billion four hundred million people', 'language': 'Chinese', 'funfact': 'Land of the Great Wall!', 'anthem': 'March of the Volunteers'},
        'es': {'country': 'China', 'capital': 'Pekín', 'population': 'Mil cuatrocientos millones de personas', 'language': 'Chino', 'funfact': '¡Tierra de la Gran Muralla!', 'anthem': 'Marcha de los Voluntarios'},
        'fr': {'country': 'Chine', 'capital': 'Pékin', 'population': 'Un milliard quatre cent millions de personnes', 'language': 'Chinois', 'funfact': 'Pays de la Grande Muraille!', 'anthem': 'Marche des Volontaires'},
        'pt': {'country': 'China', 'capital': 'Pequim', 'population': 'Um bilhão e quatrocentos milhões de pessoas', 'language': 'Chinês', 'funfact': 'Terra da Grande Muralha!', 'anthem': 'Marcha dos Voluntários'}
    }
}

language_codes = {
    'en': 'en',
    'es': 'es',
    'fr': 'fr',
    'pt': 'pt'
}

os.makedirs('audio_labels', exist_ok=True)

for hotspot_idx, langs in hotspot_labels.items():
    for lang, modes in langs.items():
        for mode, text in modes.items():
            tts = gTTS(text=text, lang=language_codes[lang])
            filename = f"audio_labels/hotspot{hotspot_idx+1}_{lang}_{mode}.mp3"
            tts.save(filename)
            print(f"Saved {filename}")
