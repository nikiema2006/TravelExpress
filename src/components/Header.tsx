import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Destinations', href: '#destinations', hasDropdown: true },
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top bar - disparaît au scroll */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100'
      }`}>
        <div className="bg-[#0A0A0A] border-b border-[#D4AF37]/20 py-2 px-6 lg:px-16">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-6">
              <a href="https://wa.me/22665604592" className="flex items-center gap-2 text-xs text-white/60 hover:text-[#D4AF37] transition-colors">
                <Phone className="w-3 h-3" />
                <span>+226 65 60 45 92</span>
              </a>
              <a href="mailto:armel.bakoua@travel-express.bf" className="hidden sm:flex items-center gap-2 text-xs text-white/60 hover:text-[#D4AF37] transition-colors">
                <Mail className="w-3 h-3" />
                <span>armel.bakoua@travel-express.bf</span>
              </a>
            </div>
            <div className="text-xs text-white/40">
              Lun-Ven: 9h-18h | Sam: 10h-14h
            </div>
          </div>
        </div>
      </div>

      {/* Main Header avec blur */}
      <header 
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'top-0 backdrop-blur-header bg-[#0A0A0A]/80 border-b border-[#D4AF37]/20' 
            : 'top-[36px] bg-transparent'
        }`}
      >
        <div className="px-6 lg:px-16 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F4E4BC] via-[#D4AF37] to-[#B8941F] rounded-lg transform group-hover:scale-105 transition-transform" />
                <div className="absolute inset-[2px] bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold gradient-gold-text font-['Playfair_Display']">T</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-semibold text-white tracking-wide">Travel</span>
                <span className="text-lg font-semibold gradient-gold-text tracking-wide"> Express</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center gap-1 text-sm text-white/80 hover:text-[#D4AF37] transition-colors tracking-wide"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                  
                  {/* Dropdown pour Destinations */}
                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-[#111111] border border-[#D4AF37]/30 rounded-lg overflow-hidden shadow-xl shadow-black/50">
                        {destinationLinks.map((dest) => (
                          <button
                            key={dest.label}
                            onClick={() => scrollToSection(dest.href)}
                            className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm text-white/70 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
                          >
                            <span>{dest.flag}</span>
                            <span>{dest.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="https://travels.express/login" 
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Connexion
              </a>
              <a 
                href="https://wa.me/22665604592"
                className="btn-gold text-xs"
              >
                Postuler
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#D4AF37]" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[#111111]/95 backdrop-blur-xl border-t border-[#D4AF37]/20 px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-white hover:text-[#D4AF37] transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-[#D4AF37]/20 space-y-3">
              <a 
                href="https://travels.express/login"
                className="block w-full text-center text-white/60 py-2"
              >
                Connexion
              </a>
              <a 
                href="https://wa.me/22665604592"
                className="block w-full btn-gold text-center text-xs"
              >
                Postuler
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
