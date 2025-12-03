import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MapPin, Phone, Mail, Clock, Wifi, Wind, Car, BedDouble, Bath, MessageCircle, Send } from 'lucide-react';

const images = {
  hero: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1920&q=80',
  about: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  living: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80',
  bedroom1: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80',
  bedroom2: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80',
  kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  bathroom: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
  outdoor: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
};

const t = {
  nav: { home: 'Home', villa: 'La Villa', territory: 'Territorio', experiences: 'Esperienze', contact: 'Contatti', book: 'Prenota' },
  hero: { welcome: 'Benvenuti a', title: 'Villa Laura', subtitle: 'Un rifugio di pace nella splendida costa orientale della Sardegna', location: 'Torpè, Sardegna', cta: 'Scopri di più' },
  about: { subtitle: 'La Nostra Storia', title: 'Villa Laura', description1: 'Situata nel cuore di Torpè, Villa Laura offre un\'esperienza autentica della vita sarda. La nostra casa vacanze è il punto di partenza ideale per esplorare le meraviglie della costa orientale.', description2: 'Con le sue 2 camere da letto, ampi spazi esterni e tutti i comfort moderni, Villa Laura è perfetta per famiglie e coppie in cerca di relax e avventura.', features: { bedrooms: '2 Camere', bathroom: '1 Bagno', wifi: 'WiFi Gratuito', ac: 'Aria Condizionata', parking: 'Parcheggio' } },
  villa: { subtitle: 'Gli Spazi', title: 'Esplora Villa Laura', description: 'Ogni ambiente è stato pensato per il vostro comfort' },
  rooms: { living: { title: 'Soggiorno', desc: 'Ampio e luminoso con TV e divano' }, bedroom1: { title: 'Camera Matrimoniale', desc: 'Con letto king-size e armadio' }, bedroom2: { title: 'Camera Doppia', desc: 'Due letti singoli, ideale per bambini' }, kitchen: { title: 'Cucina', desc: 'Completamente attrezzata con elettrodomestici moderni' }, bathroom: { title: 'Bagno', desc: 'Con doccia e set di cortesia' }, outdoor: { title: 'Spazio Esterno', desc: 'Terrazza con vista e barbecue' } },
};

export default function VillaLauraPreview() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .btn-primary { background: linear-gradient(135deg, #c9a961, #a68a3d); color: white; padding: 12px 28px; border-radius: 4px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; font-size: 13px; transition: all 0.3s; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(201, 169, 97, 0.4); }
        .btn-outline { border: 2px solid white; color: white; padding: 12px 28px; border-radius: 4px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; font-size: 13px; transition: all 0.3s; background: transparent; }
        .btn-outline:hover { background: white; color: #1a3a2f; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(8px); } }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease forwards; }
        .animate-bounce { animation: bounce 2s infinite; }
      `}</style>
      
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className={`font-display text-2xl font-semibold ${scrolled ? 'text-[#1a3a2f]' : 'text-white'}`}>Villa Laura</a>
          <div className="hidden md:flex items-center gap-8">
            {['home', 'villa', 'territory', 'experiences', 'contact'].map(item => (
              <a key={item} className={`text-sm font-medium hover:text-[#c9a961] transition ${scrolled ? 'text-gray-700' : 'text-white'}`}>{t.nav[item]}</a>
            ))}
            <div className="flex gap-1 ml-4">
              {['IT', 'EN', 'DE'].map(lang => (
                <button key={lang} className={`px-2 py-1 text-xs rounded ${lang === 'IT' ? 'bg-[#c9a961] text-white' : scrolled ? 'text-gray-600 hover:text-[#c9a961]' : 'text-white/80 hover:text-white'}`}>{lang}</button>
              ))}
            </div>
            <button className="btn-primary ml-4">{t.nav.book}</button>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className={scrolled ? 'text-gray-700' : 'text-white'} /> : <Menu className={scrolled ? 'text-gray-700' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to bottom, rgba(26, 58, 47, 0.4), rgba(26, 58, 47, 0.6)), url(${images.hero})` }} />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#c9a961] uppercase tracking-[4px] text-sm mb-4 animate-fadeInUp">{t.hero.welcome}</p>
          <h1 className="font-display text-6xl md:text-8xl font-semibold mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>{t.hero.title}</h1>
          <p className="text-xl md:text-2xl font-light mb-4 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.4s' }}>{t.hero.subtitle}</p>
          <p className="flex items-center justify-center gap-2 text-white/80 mb-8 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <MapPin size={18} /> {t.hero.location}
          </p>
          <button className="btn-outline animate-fadeInUp" style={{ animationDelay: '0.8s' }}>{t.hero.cta}</button>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center animate-bounce">
          <ChevronDown size={24} />
          <span className="text-xs mt-1">Scroll</span>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src={images.about} alt="Villa Laura" className="rounded shadow-xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#c9a961] rounded -z-10" />
            </div>
            <div>
              <span className="text-[#c9a961] uppercase tracking-[3px] text-sm">{t.about.subtitle}</span>
              <h2 className="font-display text-4xl md:text-5xl text-[#1a3a2f] mt-3 mb-6">{t.about.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{t.about.description1}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{t.about.description2}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: <BedDouble size={22} />, text: t.about.features.bedrooms },
                  { icon: <Bath size={22} />, text: t.about.features.bathroom },
                  { icon: <Wifi size={22} />, text: t.about.features.wifi },
                  { icon: <Wind size={22} />, text: t.about.features.ac },
                  { icon: <Car size={22} />, text: t.about.features.parking },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f5f0e6] flex items-center justify-center text-[#c9a961]">{f.icon}</div>
                    <span className="text-sm text-gray-700">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Villa */}
      <section className="py-24 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#c9a961] uppercase tracking-[3px] text-sm">{t.villa.subtitle}</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#1a3a2f] mt-3 mb-4">{t.villa.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.villa.description}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(t.rooms).map(([key, room]) => (
              <div key={key} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img src={images[key]} alt={room.title} className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                </div>
                <div className="p-6">
                  <h4 className="font-display text-xl text-[#1a3a2f] mb-2">{room.title}</h4>
                  <p className="text-gray-600 text-sm">{room.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Territory */}
      <section className="py-24 bg-[#1a3a2f] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#c9a961] uppercase tracking-[3px] text-sm">Il Territorio</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 mb-4">Scopri la Sardegna</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Un territorio ricco di storia, natura e tradizioni</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-[#c9a961] text-xl mb-6 font-display">🏖️ Spiagge</h3>
              {['La Caletta (8 km)', 'Cala Brandinchi (25 km)', 'Spiaggia di Bèrchida (35 km)', 'Capo Comino (15 km)'].map((beach, i) => (
                <div key={i} className="mb-4 pb-4 border-b border-white/10">
                  <h4 className="font-medium">{beach.split(' (')[0]}</h4>
                  <p className="text-white/60 text-sm">A {beach.match(/\((.*?)\)/)?.[1]} da Villa Laura</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-[#c9a961] text-xl mb-6 font-display">🏛️ Attrazioni</h3>
              {['Nuraghe San Pietro', 'Castello della Fava - Posada', 'Parco di Tepilora (UNESCO)'].map((attr, i) => (
                <div key={i} className="mb-4 pb-4 border-b border-white/10">
                  <h4 className="font-medium">{attr}</h4>
                  <p className="text-white/60 text-sm">Patrimonio storico e naturalistico della Sardegna</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-cover bg-center bg-fixed relative" style={{ backgroundImage: `url(${images.hero})` }}>
        <div className="absolute inset-0 bg-[#1a3a2f]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <span className="text-[#c9a961] uppercase tracking-[3px] text-sm">Prenota Ora</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 mb-8">La Tua Vacanza in Sardegna Ti Aspetta</h2>
          <div className="bg-white/10 backdrop-blur p-8 rounded-lg inline-flex flex-wrap gap-4 items-end justify-center">
            <div className="text-left">
              <label className="text-sm text-white/80 block mb-2">Check-in</label>
              <input type="date" className="bg-white/20 border border-white/30 rounded px-4 py-2 text-white" />
            </div>
            <div className="text-left">
              <label className="text-sm text-white/80 block mb-2">Check-out</label>
              <input type="date" className="bg-white/20 border border-white/30 rounded px-4 py-2 text-white" />
            </div>
            <div className="text-left">
              <label className="text-sm text-white/80 block mb-2">Ospiti</label>
              <input type="number" min="1" max="6" defaultValue="2" className="bg-white/20 border border-white/30 rounded px-4 py-2 text-white w-20" />
            </div>
            <button className="btn-primary">Verifica Disponibilità</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f2419] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="font-display text-2xl mb-4">Villa Laura</h3>
              <p className="text-white/60 leading-relaxed">La vostra casa vacanze nel cuore della Sardegna orientale. Comfort, natura e tradizione vi aspettano a Torpè.</p>
            </div>
            <div>
              <h4 className="text-[#c9a961] uppercase tracking-wider text-sm mb-4">Link Rapidi</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-[#c9a961] transition">Home</a></li>
                <li><a href="#" className="hover:text-[#c9a961] transition">La Villa</a></li>
                <li><a href="#" className="hover:text-[#c9a961] transition">Territorio</a></li>
                <li><a href="#" className="hover:text-[#c9a961] transition">Contatti</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#c9a961] uppercase tracking-wider text-sm mb-4">Contatti</h4>
              <div className="space-y-3 text-white/60">
                <p className="flex items-center gap-2"><MapPin size={16} /> Torpè (NU), Sardegna</p>
                <p className="flex items-center gap-2"><Phone size={16} /> +39 XXX XXX XXXX</p>
                <p className="flex items-center gap-2"><Mail size={16} /> info@villalaura.it</p>
              </div>
              <div className="flex gap-3 mt-6">
                <a href="#" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition"><MessageCircle size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#0088cc] flex items-center justify-center hover:scale-110 transition"><Send size={18} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-wrap justify-between items-center text-white/40 text-sm">
            <p>© 2025 Villa Laura. Tutti i diritti riservati.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a href="#" className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition">
          <MessageCircle size={26} />
        </a>
        <a href="#" className="w-14 h-14 rounded-full bg-[#0088cc] text-white flex items-center justify-center shadow-lg hover:scale-110 transition">
          <Send size={26} />
        </a>
      </div>
    </div>
  );
}
