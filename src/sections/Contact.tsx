import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    projectType: '',
    message: '',
    consent: false,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.contact-info-item',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        projectType: '',
        message: '',
        consent: false,
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+226 65 60 45 92',
      href: 'https://wa.me/22665604592',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'armel.bakoua@travel-express.bf',
      href: 'mailto:armel.bakoua@travel-express.bf',
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: 'Ouagadougou, Burkina Faso',
      href: 'https://maps.google.com/?q=Ouagadougou,Burkina+Faso',
    },
    {
      icon: Clock,
      label: 'Horaires',
      value: 'Lun-Ven: 9h-18h | Sam: 10h-14h',
      href: null,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#0A0A0A]" />

      <div className="section-luxe relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="eyebrow-luxe mb-4 block">CONTACT</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Commencez votre <span className="gradient-gold-text">aventure</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Remplissez le formulaire et notre équipe vous contactera sous 24h
            </p>
            <div className="divider-gold mx-auto mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="card-luxe p-8"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-white/60">
                    Nous vous contacterons sous 24h
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm text-white/60 mb-2">
                      Nom complet <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-luxe"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        Email <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-luxe"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        Téléphone <span className="text-[#D4AF37]">*</span>
                      </label>
                      <div className="flex">
                        <span className="px-4 py-4 bg-[#1A1A1A] rounded-l-lg border border-r-0 border-[#D4AF37]/20 text-white/60 text-sm">
                          +226
                        </span>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="flex-1 input-luxe rounded-l-none"
                          placeholder="65 60 45 92"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        Destination <span className="text-[#D4AF37]">*</span>
                      </label>
                      <select
                        required
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="input-luxe appearance-none cursor-pointer"
                      >
                        <option value="">Choisir un pays</option>
                        <option value="chine">🇨🇳 Chine</option>
                        <option value="espagne">🇪🇸 Espagne</option>
                        <option value="allemagne">🇩🇪 Allemagne</option>
                        <option value="russie">🇷🇺 Russie</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        Type de projet <span className="text-[#D4AF37]">*</span>
                      </label>
                      <select
                        required
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="input-luxe appearance-none cursor-pointer"
                      >
                        <option value="">Choisir...</option>
                        <option value="etudes">Études</option>
                        <option value="travail">Travail</option>
                        <option value="business">Business</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2">
                      Votre projet en quelques mots
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-luxe resize-none"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="w-5 h-5 rounded border-[#D4AF37]/30 bg-transparent text-[#D4AF37] focus:ring-[#D4AF37] mt-0.5"
                    />
                    <label htmlFor="consent" className="text-sm text-white/60">
                      J'accepte d'être contacté(e) par Travel Express. <span className="text-[#D4AF37]">*</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-gold flex items-center justify-center gap-2 py-4"
                  >
                    <Send className="w-4 h-4" />
                    Envoyer ma demande
                  </button>

                  <div className="flex items-center justify-center gap-6 text-xs text-white/40">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-[#D4AF37]" />
                      Données sécurisées
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-[#D4AF37]" />
                      Réponse 24h
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-[#D4AF37]" />
                      Gratuit
                    </span>
                  </div>
                </div>
              )}
            </form>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href || '#'}
                  className={`contact-info-item card-luxe p-6 flex items-center gap-4 group hover:border-[#D4AF37]/50 transition-colors ${
                    !info.href ? 'cursor-default' : ''
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors">
                    <info.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                  {info.href && (
                    <ArrowRight className="w-5 h-5 text-[#D4AF37] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </a>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/22665604592"
                className="block bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-xl p-6 text-center hover:shadow-lg hover:shadow-[#25D366]/20 transition-shadow"
              >
                <MessageCircle className="w-8 h-8 mx-auto mb-2 text-white" />
                <div className="font-semibold text-white">Discuter sur WhatsApp</div>
                <div className="text-sm text-white/80">Réponse rapide garantie</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
