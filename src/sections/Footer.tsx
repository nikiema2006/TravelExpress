import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Processus', href: '#processus' },
    { label: 'Témoignages', href: '#temoignages' },
    { label: 'Contact', href: '#contact' },
  ];

  const destinationLinks = [
    { label: 'Chine', href: '#chine', flag: '🇨🇳' },
    { label: 'Espagne', href: '#espagne', flag: '🇪🇸' },
    { label: 'Allemagne', href: '#allemagne', flag: '🇩🇪' },
    { label: 'Russie', href: '#russie', flag: '🇷🇺' },
  ];

  const legalLinks = [
    { label: 'Conditions d\'utilisation', href: '#' },
    { label: 'Politique de confidentialité', href: '#' },
    { label: 'Mentions légales', href: '#' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[#D4AF37]/10">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#F4E4BC] transition-colors shadow-lg shadow-[#D4AF37]/30"
      >
        <ArrowUp className="w-5 h-5 text-[#0A0A0A]" />
      </button>

      {/* Newsletter Section */}
      <div className="border-b border-[#D4AF37]/10">
        <div className="px-6 lg:px-16 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Restez informé de nos <span className="gradient-gold-text">opportunités</span>
                </h3>
                <p className="text-white/60">
                  Recevez les dernières actualités sur les programmes d'études et les bourses
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse email"
                    className="w-full px-5 py-4 rounded-xl bg-[#111111] border border-[#D4AF37]/20 text-white placeholder:text-white/40 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-4 bg-[#D4AF37] rounded-xl font-medium text-[#0A0A0A] hover:bg-[#F4E4BC] transition-colors flex items-center gap-2"
                >
                  {isSubscribed ? 'Inscrit !' : 'S\'abonner'}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-6 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F4E4BC] via-[#D4AF37] to-[#B8941F] rounded-lg" />
                  <div className="absolute inset-[2px] bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold gradient-gold-text font-['Playfair_Display']">T</span>
                  </div>
                </div>
                <div>
                  <span className="text-lg font-semibold text-white">Travel</span>
                  <span className="text-lg font-semibold gradient-gold-text"> Express</span>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Votre partenaire de confiance pour réaliser vos rêves d'études et de carrière à l'international.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-[#111111] border border-[#D4AF37]/20 flex items-center justify-center hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
                  >
                    <social.icon className="w-5 h-5 text-[#D4AF37]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-6">Navigation</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="text-white font-semibold mb-6">Destinations</h4>
              <ul className="space-y-3">
                {destinationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm flex items-center gap-2"
                    >
                      <span>{link.flag}</span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://maps.google.com/?q=Ouagadougou,Burkina+Faso"
                    className="flex items-start gap-3 text-white/60 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Ouagadougou<br />Burkina Faso</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/22665604592"
                    className="flex items-center gap-3 text-white/60 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span>+226 65 60 45 92</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:armel.bakoua@travel-express.bf"
                    className="flex items-center gap-3 text-white/60 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span>armel.bakoua@travel-express.bf</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#D4AF37]/10">
        <div className="px-6 lg:px-16 py-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white/40 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Travel Express. Tous droits réservés.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/40 hover:text-[#D4AF37] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-1 text-white/40 text-sm">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
              <span>au Burkina Faso</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
