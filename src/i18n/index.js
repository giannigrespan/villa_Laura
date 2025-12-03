import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      nav: {
        home: 'Home',
        villa: 'La Villa',
        territory: 'Territorio',
        experiences: 'Esperienze',
        contact: 'Contattaci',
        book: 'Prenota Ora'
      },
      hero: {
        welcome: 'Benvenuti a',
        title: 'Villa Laura',
        subtitle: 'Un rifugio di pace nel cuore della Sardegna',
        location: 'Torpè, Sardegna',
        cta: 'Scopri di più'
      },
      about: {
        title: 'La nostra storia',
        subtitle: 'Un angolo di paradiso in Baronia',
        description1: 'Villa Laura nasce dal desiderio di condividere la bellezza autentica della Sardegna con viaggiatori da tutto il mondo. Situata nel tranquillo centro di Torpè, la villa offre un rifugio perfetto tra mare e montagna.',
        description2: 'A pochi minuti dalle spiagge più belle della costa orientale e immersa nella natura incontaminata del Parco di Tepilora, Villa Laura è il punto di partenza ideale per esplorare le meraviglie di questa terra magica.',
        features: {
          bedrooms: '2 Camere',
          bathroom: '1 Bagno',
          wifi: 'WiFi Gratuito',
          ac: 'Aria Condizionata',
          parking: 'Parcheggio Privato'
        }
      },
      villa: {
        title: 'La Villa',
        subtitle: 'Comfort e tradizione sarda',
        description: 'Villa Laura vi accoglie in un ambiente curato nei minimi dettagli, dove il comfort moderno si fonde con l\'atmosfera autentica della Sardegna.',
        rooms: {
          living: {
            title: 'Soggiorno',
            desc: 'Ampio e luminoso, con divano e TV, perfetto per rilassarsi dopo una giornata al mare.'
          },
          bedroom1: {
            title: 'Camera Matrimoniale',
            desc: 'Camera spaziosa con letto matrimoniale, aria condizionata e vista sul giardino.'
          },
          bedroom2: {
            title: 'Camera Doppia',
            desc: 'Camera confortevole con due letti singoli, ideale per bambini o amici.'
          },
          kitchen: {
            title: 'Cucina',
            desc: 'Cucina completamente attrezzata per preparare le vostre specialità.'
          },
          bathroom: {
            title: 'Bagno',
            desc: 'Bagno moderno con doccia, asciugacapelli e tutti i comfort.'
          },
          outdoor: {
            title: 'Spazio Esterno',
            desc: 'Giardino privato con area barbecue e parcheggio coperto.'
          }
        }
      },
      territory: {
        title: 'Il Territorio',
        subtitle: 'Profumo selvaggio, terra antica',
        description: 'Un territorio meravigliosamente eterogeneo, dove dalla costa bassa e con spiagge incantevoli si passa a giganteschi costoni, a stagni ed a verdissime montagne.',
        beaches: {
          title: 'Le Spiagge',
          caletta: {
            name: 'Spiaggia della Caletta',
            desc: 'Cinque chilometri di sabbia bianca e morbida, mare azzurro e limpido.'
          },
          brandinchi: {
            name: 'Cala Brandinchi',
            desc: 'Soprannominata "la piccola Tahiti", una delle spiagge imperdibili della Sardegna.'
          },
          berchida: {
            name: 'Spiaggia di Bèrchida',
            desc: 'Votata come una delle più belle del Mediterraneo.'
          },
          capocomino: {
            name: 'Capo Comino',
            desc: 'Sabbia finissima e candida con enormi dune alle spalle.'
          }
        },
        attractions: {
          title: 'Da Visitare',
          nuraghe: {
            name: 'Nuraghe di San Pietro',
            desc: 'Complesso nuragico quadrilobato, testimonianza della civiltà sarda.'
          },
          castello: {
            name: 'Castello della Fava',
            desc: 'Borgo medievale di Posada, tra i più belli d\'Italia.'
          },
          tepilora: {
            name: 'Parco di Tepilora',
            desc: 'Riserva UNESCO con quasi 8000 ettari di natura incontaminata.'
          }
        }
      },
      experiences: {
        title: 'Esperienze',
        subtitle: 'Vivi la vera Sardegna',
        description: 'Ti porteremo alla scoperta della Sardegna vera e delle sue bellissime coste. Ti faremo conoscere antichi sentieri con panorami mozzafiato.',
        items: {
          boat: {
            title: 'Escursione Golfo di Orosei',
            desc: 'Navigate ammirando la trasparenza del mare e le altissime pareti rocciose.'
          },
          maddalena: {
            title: 'Arcipelago della Maddalena',
            desc: 'Una galassia di isole avvolte dal mare turchese.'
          },
          shepherd: {
            title: 'Pranzo con i Pastori',
            desc: 'Assaporate i sapori genuini tra i lecci secolari di Orgosolo.'
          },
          wine: {
            title: 'Degustazioni di Vini',
            desc: 'Visite guidate nelle cantine con degustazione di Cannonau.'
          }
        }
      },
      contact: {
        title: 'Contattaci',
        subtitle: 'Siamo qui per te',
        description: 'Compila il form per richiedere informazioni o prenotare il tuo soggiorno.',
        form: {
          name: 'Nome e Cognome',
          email: 'Email',
          phone: 'Telefono',
          checkin: 'Data Check-in',
          checkout: 'Data Check-out',
          guests: 'Numero Ospiti',
          message: 'Messaggio',
          send: 'Invia Richiesta',
          success: 'Messaggio inviato con successo!',
          error: 'Errore nell\'invio. Riprova.'
        },
        info: {
          address: 'Indirizzo',
          addressValue: 'Torpè (NU), Sardegna',
          phone: 'Telefono',
          email: 'Email',
          checkin: 'Check-in: 15:00 - 20:00',
          checkout: 'Check-out: 08:00 - 10:00'
        }
      },
      booking: {
        title: 'Prenota il tuo Soggiorno',
        subtitle: 'Verifica Disponibilità',
        calendarDesc: 'Consulta il calendario per verificare la disponibilità di Villa Laura',
        ctaText: 'Hai trovato le date giuste? Contattaci per prenotare!',
        ctaButton: 'Richiedi Prenotazione',
        checkAvailability: 'Verifica Disponibilità'
      },
      footer: {
        description: 'Villa Laura - La tua casa vacanze nel cuore della Sardegna',
        quickLinks: 'Link Rapidi',
        contacts: 'Contatti',
        followUs: 'Seguici',
        rights: 'Tutti i diritti riservati',
        privacy: 'Privacy Policy',
        cookie: 'Cookie Policy'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        villa: 'The Villa',
        territory: 'Territory',
        experiences: 'Experiences',
        contact: 'Contact Us',
        book: 'Book Now'
      },
      hero: {
        welcome: 'Welcome to',
        title: 'Villa Laura',
        subtitle: 'A peaceful retreat in the heart of Sardinia',
        location: 'Torpè, Sardinia',
        cta: 'Discover More'
      },
      about: {
        title: 'Our Story',
        subtitle: 'A corner of paradise in Baronia',
        description1: 'Villa Laura was born from the desire to share the authentic beauty of Sardinia with travelers from all over the world. Located in the quiet center of Torpè, the villa offers a perfect retreat between sea and mountains.',
        description2: 'Just minutes from the most beautiful beaches of the east coast and immersed in the unspoiled nature of Tepilora Park, Villa Laura is the ideal starting point to explore the wonders of this magical land.',
        features: {
          bedrooms: '2 Bedrooms',
          bathroom: '1 Bathroom',
          wifi: 'Free WiFi',
          ac: 'Air Conditioning',
          parking: 'Private Parking'
        }
      },
      villa: {
        title: 'The Villa',
        subtitle: 'Comfort and Sardinian tradition',
        description: 'Villa Laura welcomes you in a carefully designed environment where modern comfort blends with the authentic atmosphere of Sardinia.',
        rooms: {
          living: {
            title: 'Living Room',
            desc: 'Spacious and bright, with sofa and TV, perfect for relaxing after a day at the beach.'
          },
          bedroom1: {
            title: 'Master Bedroom',
            desc: 'Spacious room with double bed, air conditioning and garden view.'
          },
          bedroom2: {
            title: 'Twin Room',
            desc: 'Comfortable room with two single beds, ideal for children or friends.'
          },
          kitchen: {
            title: 'Kitchen',
            desc: 'Fully equipped kitchen to prepare your specialties.'
          },
          bathroom: {
            title: 'Bathroom',
            desc: 'Modern bathroom with shower, hairdryer and all comforts.'
          },
          outdoor: {
            title: 'Outdoor Space',
            desc: 'Private garden with barbecue area and covered parking.'
          }
        }
      },
      territory: {
        title: 'The Territory',
        subtitle: 'Wild scent, ancient land',
        description: 'A wonderfully diverse land, where the low coastline with enchanting beaches transitions to gigantic ridges, ponds and lush green mountains.',
        beaches: {
          title: 'The Beaches',
          caletta: {
            name: 'Caletta Beach',
            desc: 'Five kilometers of soft white sand, clear blue sea.'
          },
          brandinchi: {
            name: 'Cala Brandinchi',
            desc: 'Nicknamed "little Tahiti", one of Sardinia\'s unmissable beaches.'
          },
          berchida: {
            name: 'Bèrchida Beach',
            desc: 'Voted one of the most beautiful in the Mediterranean.'
          },
          capocomino: {
            name: 'Capo Comino',
            desc: 'Fine white sand with enormous dunes behind.'
          }
        },
        attractions: {
          title: 'Must See',
          nuraghe: {
            name: 'Nuraghe di San Pietro',
            desc: 'Four-lobed nuragic complex, testimony of Sardinian civilization.'
          },
          castello: {
            name: 'Fava Castle',
            desc: 'Medieval village of Posada, among the most beautiful in Italy.'
          },
          tepilora: {
            name: 'Tepilora Park',
            desc: 'UNESCO Reserve with almost 8000 hectares of unspoiled nature.'
          }
        }
      },
      experiences: {
        title: 'Experiences',
        subtitle: 'Live the real Sardinia',
        description: 'We will take you to discover the real Sardinia and its beautiful coasts. We will show you ancient paths with breathtaking views.',
        items: {
          boat: {
            title: 'Gulf of Orosei Excursion',
            desc: 'Sail admiring the crystal-clear sea and towering rocky walls.'
          },
          maddalena: {
            title: 'Maddalena Archipelago',
            desc: 'A galaxy of islands wrapped in turquoise sea.'
          },
          shepherd: {
            title: 'Lunch with Shepherds',
            desc: 'Taste genuine flavors among the ancient oaks of Orgosolo.'
          },
          wine: {
            title: 'Wine Tastings',
            desc: 'Guided visits to wineries with Cannonau tasting.'
          }
        }
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We are here for you',
        description: 'Fill out the form to request information or book your stay.',
        form: {
          name: 'Full Name',
          email: 'Email',
          phone: 'Phone',
          checkin: 'Check-in Date',
          checkout: 'Check-out Date',
          guests: 'Number of Guests',
          message: 'Message',
          send: 'Send Request',
          success: 'Message sent successfully!',
          error: 'Error sending. Please try again.'
        },
        info: {
          address: 'Address',
          addressValue: 'Torpè (NU), Sardinia',
          phone: 'Phone',
          email: 'Email',
          checkin: 'Check-in: 3:00 PM - 8:00 PM',
          checkout: 'Check-out: 8:00 AM - 10:00 AM'
        }
      },
      booking: {
        title: 'Book Your Stay',
        subtitle: 'Check Availability',
        calendarDesc: 'Check the calendar to see Villa Laura availability',
        ctaText: 'Found the right dates? Contact us to book!',
        ctaButton: 'Request Booking',
        checkAvailability: 'Check Availability'
      },
      footer: {
        description: 'Villa Laura - Your holiday home in the heart of Sardinia',
        quickLinks: 'Quick Links',
        contacts: 'Contacts',
        followUs: 'Follow Us',
        rights: 'All rights reserved',
        privacy: 'Privacy Policy',
        cookie: 'Cookie Policy'
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: 'Home',
        villa: 'Die Villa',
        territory: 'Gebiet',
        experiences: 'Erlebnisse',
        contact: 'Kontakt',
        book: 'Jetzt Buchen'
      },
      hero: {
        welcome: 'Willkommen in',
        title: 'Villa Laura',
        subtitle: 'Eine friedliche Oase im Herzen Sardiniens',
        location: 'Torpè, Sardinien',
        cta: 'Mehr Entdecken'
      },
      about: {
        title: 'Unsere Geschichte',
        subtitle: 'Ein Stück Paradies in Baronia',
        description1: 'Villa Laura entstand aus dem Wunsch, die authentische Schönheit Sardiniens mit Reisenden aus aller Welt zu teilen. Im ruhigen Zentrum von Torpè gelegen, bietet die Villa einen perfekten Rückzugsort zwischen Meer und Bergen.',
        description2: 'Nur wenige Minuten von den schönsten Stränden der Ostküste entfernt und eingebettet in die unberührte Natur des Tepilora-Parks, ist Villa Laura der ideale Ausgangspunkt, um die Wunder dieses magischen Landes zu erkunden.',
        features: {
          bedrooms: '2 Schlafzimmer',
          bathroom: '1 Badezimmer',
          wifi: 'Kostenloses WLAN',
          ac: 'Klimaanlage',
          parking: 'Privater Parkplatz'
        }
      },
      villa: {
        title: 'Die Villa',
        subtitle: 'Komfort und sardische Tradition',
        description: 'Villa Laura empfängt Sie in einer sorgfältig gestalteten Umgebung, in der moderner Komfort mit der authentischen Atmosphäre Sardiniens verschmilzt.',
        rooms: {
          living: {
            title: 'Wohnzimmer',
            desc: 'Geräumig und hell, mit Sofa und TV, perfekt zum Entspannen nach einem Tag am Strand.'
          },
          bedroom1: {
            title: 'Hauptschlafzimmer',
            desc: 'Geräumiges Zimmer mit Doppelbett, Klimaanlage und Gartenblick.'
          },
          bedroom2: {
            title: 'Zweibettzimmer',
            desc: 'Komfortables Zimmer mit zwei Einzelbetten, ideal für Kinder oder Freunde.'
          },
          kitchen: {
            title: 'Küche',
            desc: 'Voll ausgestattete Küche für Ihre kulinarischen Kreationen.'
          },
          bathroom: {
            title: 'Badezimmer',
            desc: 'Modernes Bad mit Dusche, Föhn und allem Komfort.'
          },
          outdoor: {
            title: 'Außenbereich',
            desc: 'Privater Garten mit Grillbereich und überdachtem Parkplatz.'
          }
        }
      },
      territory: {
        title: 'Das Gebiet',
        subtitle: 'Wilder Duft, uraltes Land',
        description: 'Ein wunderbar vielfältiges Land, wo die flache Küste mit bezaubernden Stränden in gigantische Felsformationen, Teiche und üppig grüne Berge übergeht.',
        beaches: {
          title: 'Die Strände',
          caletta: {
            name: 'Caletta Strand',
            desc: 'Fünf Kilometer weicher weißer Sand, klares blaues Meer.'
          },
          brandinchi: {
            name: 'Cala Brandinchi',
            desc: 'Genannt "Klein-Tahiti", einer der unverzichtbaren Strände Sardiniens.'
          },
          berchida: {
            name: 'Bèrchida Strand',
            desc: 'Gewählt zu einem der schönsten im Mittelmeer.'
          },
          capocomino: {
            name: 'Capo Comino',
            desc: 'Feiner weißer Sand mit riesigen Dünen dahinter.'
          }
        },
        attractions: {
          title: 'Sehenswürdigkeiten',
          nuraghe: {
            name: 'Nuraghe di San Pietro',
            desc: 'Viergliedriger Nuraghen-Komplex, Zeugnis sardischer Zivilisation.'
          },
          castello: {
            name: 'Castello della Fava',
            desc: 'Mittelalterliches Dorf Posada, eines der schönsten Italiens.'
          },
          tepilora: {
            name: 'Tepilora Park',
            desc: 'UNESCO-Reservat mit fast 8000 Hektar unberührter Natur.'
          }
        }
      },
      experiences: {
        title: 'Erlebnisse',
        subtitle: 'Erleben Sie das echte Sardinien',
        description: 'Wir nehmen Sie mit auf eine Entdeckungsreise durch das wahre Sardinien und seine wunderschönen Küsten. Wir zeigen Ihnen alte Pfade mit atemberaubenden Aussichten.',
        items: {
          boat: {
            title: 'Golf von Orosei Ausflug',
            desc: 'Segeln Sie und bewundern Sie das kristallklare Meer und die hohen Felswände.'
          },
          maddalena: {
            title: 'Maddalena Archipel',
            desc: 'Eine Galaxie von Inseln, umhüllt von türkisem Meer.'
          },
          shepherd: {
            title: 'Mittagessen mit Hirten',
            desc: 'Genießen Sie authentische Aromen unter den alten Eichen von Orgosolo.'
          },
          wine: {
            title: 'Weinverkostungen',
            desc: 'Geführte Besuche in Weingütern mit Cannonau-Verkostung.'
          }
        }
      },
      contact: {
        title: 'Kontakt',
        subtitle: 'Wir sind für Sie da',
        description: 'Füllen Sie das Formular aus, um Informationen anzufordern oder Ihren Aufenthalt zu buchen.',
        form: {
          name: 'Vollständiger Name',
          email: 'E-Mail',
          phone: 'Telefon',
          checkin: 'Check-in Datum',
          checkout: 'Check-out Datum',
          guests: 'Anzahl der Gäste',
          message: 'Nachricht',
          send: 'Anfrage Senden',
          success: 'Nachricht erfolgreich gesendet!',
          error: 'Fehler beim Senden. Bitte versuchen Sie es erneut.'
        },
        info: {
          address: 'Adresse',
          addressValue: 'Torpè (NU), Sardinien',
          phone: 'Telefon',
          email: 'E-Mail',
          checkin: 'Check-in: 15:00 - 20:00',
          checkout: 'Check-out: 08:00 - 10:00'
        }
      },
      booking: {
        title: 'Buchen Sie Ihren Aufenthalt',
        subtitle: 'Verfügbarkeit Prüfen',
        calendarDesc: 'Überprüfen Sie den Kalender für die Verfügbarkeit von Villa Laura',
        ctaText: 'Die richtigen Termine gefunden? Kontaktieren Sie uns zum Buchen!',
        ctaButton: 'Buchung Anfragen',
        checkAvailability: 'Verfügbarkeit Prüfen'
      },
      footer: {
        description: 'Villa Laura - Ihr Ferienhaus im Herzen Sardiniens',
        quickLinks: 'Schnelllinks',
        contacts: 'Kontakte',
        followUs: 'Folgen Sie uns',
        rights: 'Alle Rechte vorbehalten',
        privacy: 'Datenschutz',
        cookie: 'Cookie-Richtlinie'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'it',
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
