import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, MapPin, Phone, Mail, Clock, Wifi, Wind, Car, BedDouble, Bath, MessageCircle, Send } from 'lucide-react';
import './i18n';
import './index.css';

const images = {
  hero: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1920&q=80',
  about: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  living: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80',
  bedroom1: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80',
  bedroom2: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80',
  kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  bathroom: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
  outdoor: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  boat: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
  maddalena: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  shepherd: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80',
  wine: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
};

function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lang) => { i18n.changeLanguage(lang); setMenuOpen(false); };
  const scrollToSection = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#" className="navbar__logo">Villa Laura</a>
        <div className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          <a className="navbar__link" onClick={() => scrollToSection('home')}>{t('nav.home')}</a>
          <a className="navbar__link" onClick={() => scrollToSection('villa')}>{t('nav.villa')}</a>
          <a className="navbar__link" onClick={() => scrollToSection('territory')}>{t('nav.territory')}</a>
          <a className="navbar__link" onClick={() => scrollToSection('experiences')}>{t('nav.experiences')}</a>
          <a className="navbar__link" onClick={() => scrollToSection('contact')}>{t('nav.contact')}</a>
          <div className="navbar__lang">
            <button className={`navbar__lang-btn ${i18n.language === 'it' ? 'navbar__lang-btn--active' : ''}`} onClick={() => changeLanguage('it')}>IT</button>
            <button className={`navbar__lang-btn ${i18n.language === 'en' ? 'navbar__lang-btn--active' : ''}`} onClick={() => changeLanguage('en')}>EN</button>
            <button className={`navbar__lang-btn ${i18n.language === 'de' ? 'navbar__lang-btn--active' : ''}`} onClick={() => changeLanguage('de')}>DE</button>
          </div>
          <a className="navbar__cta btn btn--primary" onClick={() => scrollToSection('booking')}>{t('nav.book')}</a>
        </div>
        <button className="navbar__menu-btn" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={28} /> : <Menu size={28} />}</button>
      </div>
    </nav>
  );
}

function Hero() {
  const { t } = useTranslation();
  return (
    <section id="home" className="hero">
      <div className="hero__background" style={{ backgroundImage: `linear-gradient(to bottom, rgba(26, 58, 47, 0.4) 0%, rgba(26, 58, 47, 0.6) 100%), url(${images.hero})` }} />
      <div className="hero__content">
        <p className="hero__welcome">{t('hero.welcome')}</p>
        <h1 className="hero__title">{t('hero.title')}</h1>
        <p className="hero__subtitle">{t('hero.subtitle')}</p>
        <p className="hero__location">{t('hero.location')}</p>
        <div className="hero__cta"><a href="#about" className="btn btn--outline">{t('hero.cta')}</a></div>
      </div>
      <div className="hero__scroll"><ChevronDown size={24} /><span>Scroll</span></div>
    </section>
  );
}

function About() {
  const { t } = useTranslation();
  const features = [
    { icon: <BedDouble size={22} />, text: t('about.features.bedrooms') },
    { icon: <Bath size={22} />, text: t('about.features.bathroom') },
    { icon: <Wifi size={22} />, text: t('about.features.wifi') },
    { icon: <Wind size={22} />, text: t('about.features.ac') },
    { icon: <Car size={22} />, text: t('about.features.parking') },
  ];
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div className="about" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div className="about__image"><img src={images.about} alt="Villa Laura" /></div>
          <div className="about__content">
            <span className="about__subtitle">{t('about.subtitle')}</span>
            <h2 className="about__title">{t('about.title')}</h2>
            <p className="about__text">{t('about.description1')}</p>
            <p className="about__text">{t('about.description2')}</p>
            <div className="about__features">
              {features.map((feature, index) => (
                <div key={index} className="about__feature">
                  <div className="about__feature-icon">{feature.icon}</div>
                  <span className="about__feature-text">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Villa() {
  const { t } = useTranslation();
  const rooms = [
    { key: 'living', image: images.living }, { key: 'bedroom1', image: images.bedroom1 },
    { key: 'bedroom2', image: images.bedroom2 }, { key: 'kitchen', image: images.kitchen },
    { key: 'bathroom', image: images.bathroom }, { key: 'outdoor', image: images.outdoor },
  ];
  return (
    <section id="villa" className="section section--sand">
      <div className="container">
        <div className="section-header">
          <span className="section-header__subtitle">{t('villa.subtitle')}</span>
          <h2 className="section-header__title">{t('villa.title')}</h2>
          <p className="section-header__description">{t('villa.description')}</p>
        </div>
        <div className="villa__grid">
          {rooms.map((room, index) => (
            <motion.div key={room.key} className="villa__card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
              <div className="villa__card-image"><img src={room.image} alt={t(`villa.rooms.${room.key}.title`)} /></div>
              <div className="villa__card-content">
                <h4 className="villa__card-title">{t(`villa.rooms.${room.key}.title`)}</h4>
                <p className="villa__card-desc">{t(`villa.rooms.${room.key}.desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Territory() {
  const { t } = useTranslation();
  const beaches = ['caletta', 'brandinchi', 'berchida', 'capocomino'];
  const attractions = ['nuraghe', 'castello', 'tepilora'];
  return (
    <section id="territory" className="section section--primary">
      <div className="container">
        <div className="section-header">
          <span className="section-header__subtitle">{t('territory.subtitle')}</span>
          <h2 className="section-header__title">{t('territory.title')}</h2>
          <p className="section-header__description">{t('territory.description')}</p>
        </div>
        <div className="territory__content">
          <motion.div className="territory__beaches" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="territory__category-title">{t('territory.beaches.title')}</h3>
            {beaches.map((beach) => (
              <div key={beach} className="territory__item">
                <h4 className="territory__item-name">{t(`territory.beaches.${beach}.name`)}</h4>
                <p className="territory__item-desc">{t(`territory.beaches.${beach}.desc`)}</p>
              </div>
            ))}
          </motion.div>
          <motion.div className="territory__attractions" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="territory__category-title">{t('territory.attractions.title')}</h3>
            {attractions.map((attr) => (
              <div key={attr} className="territory__item">
                <h4 className="territory__item-name">{t(`territory.attractions.${attr}.name`)}</h4>
                <p className="territory__item-desc">{t(`territory.attractions.${attr}.desc`)}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Experiences() {
  const { t } = useTranslation();
  const experiences = [
    { key: 'boat', image: images.boat }, { key: 'maddalena', image: images.maddalena },
    { key: 'shepherd', image: images.shepherd }, { key: 'wine', image: images.wine },
  ];
  return (
    <section id="experiences" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-header__subtitle">{t('experiences.subtitle')}</span>
          <h2 className="section-header__title">{t('experiences.title')}</h2>
          <p className="section-header__description">{t('experiences.description')}</p>
        </div>
        <div className="experiences__grid">
          {experiences.map((exp, index) => (
            <motion.div key={exp.key} className="experience__card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
              <div className="experience__card-bg" style={{ backgroundImage: `url(${exp.image})` }} />
              <div className="experience__card-overlay" />
              <div className="experience__card-content">
                <h4 className="experience__card-title">{t(`experiences.items.${exp.key}.title`)}</h4>
                <p className="experience__card-desc">{t(`experiences.items.${exp.key}.desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const { t } = useTranslation();
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [guests, setGuests] = useState(2);
  const handleBooking = () => {
    const bookingUrl = `https://www.airbnb.com/rooms/YOUR_LISTING_ID?checkin=${checkin}&checkout=${checkout}&guests=${guests}`;
    window.open(bookingUrl, '_blank');
  };
  return (
    <section id="booking" className="section booking">
      <div className="container">
        <div className="booking__content">
          <div className="section-header">
            <span className="section-header__subtitle" style={{ color: '#c9a961' }}>{t('booking.subtitle')}</span>
            <h2 className="section-header__title">{t('booking.title')}</h2>
          </div>
          <div className="booking__widget">
            <div className="booking__field"><label>Check-in</label><input type="date" value={checkin} onChange={(e) => setCheckin(e.target.value)} /></div>
            <div className="booking__field"><label>Check-out</label><input type="date" value={checkout} onChange={(e) => setCheckout(e.target.value)} /></div>
            <div className="booking__field"><label>{t('contact.form.guests')}</label><input type="number" min="1" max="6" value={guests} onChange={(e) => setGuests(e.target.value)} /></div>
            <button className="btn btn--primary booking__btn" onClick={handleBooking}>{t('booking.checkAvailability')}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', checkin: '', checkout: '', guests: '', message: '' });
  const [status, setStatus] = useState(null);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData)
      });
      if (response.ok) { setStatus('success'); setFormData({ name: '', email: '', phone: '', checkin: '', checkout: '', guests: '', message: '' }); }
      else { setStatus('error'); }
    } catch (error) { setStatus('error'); }
  };
  return (
    <section id="contact" className="section section--sand">
      <div className="container">
        <div className="section-header">
          <span className="section-header__subtitle">{t('contact.subtitle')}</span>
          <h2 className="section-header__title">{t('contact.title')}</h2>
          <p className="section-header__description">{t('contact.description')}</p>
        </div>
        <div className="contact__wrapper">
          <motion.form className="contact__form" onSubmit={handleSubmit} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="form__row">
              <div className="form__group"><label className="form__label">{t('contact.form.name')}</label><input type="text" name="name" className="form__input" value={formData.name} onChange={handleChange} required /></div>
              <div className="form__group"><label className="form__label">{t('contact.form.email')}</label><input type="email" name="email" className="form__input" value={formData.email} onChange={handleChange} required /></div>
            </div>
            <div className="form__row">
              <div className="form__group"><label className="form__label">{t('contact.form.phone')}</label><input type="tel" name="phone" className="form__input" value={formData.phone} onChange={handleChange} /></div>
              <div className="form__group"><label className="form__label">{t('contact.form.guests')}</label><input type="number" name="guests" className="form__input" min="1" max="6" value={formData.guests} onChange={handleChange} /></div>
            </div>
            <div className="form__row">
              <div className="form__group"><label className="form__label">{t('contact.form.checkin')}</label><input type="date" name="checkin" className="form__input" value={formData.checkin} onChange={handleChange} /></div>
              <div className="form__group"><label className="form__label">{t('contact.form.checkout')}</label><input type="date" name="checkout" className="form__input" value={formData.checkout} onChange={handleChange} /></div>
            </div>
            <div className="form__group"><label className="form__label">{t('contact.form.message')}</label><textarea name="message" className="form__textarea" value={formData.message} onChange={handleChange} /></div>
            <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>{t('contact.form.send')}</button>
            {status === 'success' && <div className="form__message form__message--success">{t('contact.form.success')}</div>}
            {status === 'error' && <div className="form__message form__message--error">{t('contact.form.error')}</div>}
          </motion.form>
          <motion.div className="contact__info" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="contact__info-title">{t('contact.info.address')}</h3>
            <div className="contact__info-item"><div className="contact__info-icon"><MapPin size={18} /></div><div><p className="contact__info-label">{t('contact.info.address')}</p><p className="contact__info-value">{t('contact.info.addressValue')}</p></div></div>
            <div className="contact__info-item"><div className="contact__info-icon"><Phone size={18} /></div><div><p className="contact__info-label">{t('contact.info.phone')}</p><p className="contact__info-value">+39 XXX XXX XXXX</p></div></div>
            <div className="contact__info-item"><div className="contact__info-icon"><Mail size={18} /></div><div><p className="contact__info-label">{t('contact.info.email')}</p><p className="contact__info-value">info@villalaura.it</p></div></div>
            <div className="contact__info-item"><div className="contact__info-icon"><Clock size={18} /></div><div><p className="contact__info-value">{t('contact.info.checkin')}</p><p className="contact__info-value">{t('contact.info.checkout')}</p></div></div>
            <div className="contact__social">
              <p className="contact__social-title">{t('footer.followUs')}</p>
              <div className="contact__social-links">
                <a href="https://wa.me/39XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="contact__social-link"><MessageCircle size={20} /></a>
                <a href="https://t.me/YOURUSERNAME" target="_blank" rel="noopener noreferrer" className="contact__social-link"><Send size={20} /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand"><h3 className="footer__logo">Villa Laura</h3><p className="footer__desc">{t('footer.description')}</p></div>
        <div>
          <h4 className="footer__title">{t('footer.quickLinks')}</h4>
          <ul className="footer__links">
            <li><a href="#home" className="footer__link">{t('nav.home')}</a></li>
            <li><a href="#villa" className="footer__link">{t('nav.villa')}</a></li>
            <li><a href="#territory" className="footer__link">{t('nav.territory')}</a></li>
            <li><a href="#experiences" className="footer__link">{t('nav.experiences')}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer__title">{t('footer.contacts')}</h4>
          <div className="footer__contact-item"><MapPin size={16} className="footer__contact-icon" /><span className="footer__contact-text">Torpè (NU), Sardegna</span></div>
          <div className="footer__contact-item"><Phone size={16} className="footer__contact-icon" /><span className="footer__contact-text">+39 XXX XXX XXXX</span></div>
          <div className="footer__contact-item"><Mail size={16} className="footer__contact-icon" /><span className="footer__contact-text">info@villalaura.it</span></div>
        </div>
        <div>
          <h4 className="footer__title">{t('footer.followUs')}</h4>
          <div className="contact__social-links">
            <a href="https://wa.me/39XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="contact__social-link"><MessageCircle size={20} /></a>
            <a href="https://t.me/YOURUSERNAME" target="_blank" rel="noopener noreferrer" className="contact__social-link"><Send size={20} /></a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copy">© {year} Villa Laura. {t('footer.rights')}</p>
        <div className="footer__legal"><a href="#">{t('footer.privacy')}</a><a href="#">{t('footer.cookie')}</a></div>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a href="https://wa.me/39XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="floating-btn floating-btn--whatsapp" title="WhatsApp"><MessageCircle size={26} /></a>
      <a href="https://t.me/YOURUSERNAME" target="_blank" rel="noopener noreferrer" className="floating-btn floating-btn--telegram" title="Telegram"><Send size={26} /></a>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Villa />
      <Territory />
      <Experiences />
      <Booking />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  );
}

export default App;
