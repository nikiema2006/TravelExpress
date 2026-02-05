import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Temoignages = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      image: '/testimonial-1.jpg',
      name: 'Koffi Mensah',
      role: 'Étudiant en Médecine',
      destination: 'Chine',
      flag: '🇨🇳',
      quote: "Travel Express a transformé mon rêve d'étudier en Chine en réalité. L'accompagnement pour la bourse CSC était impeccable, du début jusqu'à mon installation à Shanghai. Je recommande vivement !",
      rating: 5,
    },
    {
      image: '/testimonial-2.jpg',
      name: 'Aminata Ouédraogo',
      role: 'Étudiante en Commerce',
      destination: 'Espagne',
      flag: '🇪🇸',
      quote: "Grâce à Travel Express, j'ai obtenu mon visa étudiant pour l'Espagne en moins de 2 mois. Leur équipe est professionnelle, réactive et toujours disponible pour répondre à mes questions.",
      rating: 5,
    },
    {
      image: '/testimonial-3.jpg',
      name: 'Issouf Compaoré',
      role: 'Apprenti Ingénieur',
      destination: 'Allemagne',
      flag: '🇩🇪',
      quote: "L'Ausbildung en Allemagne était mon objectif depuis longtemps. Travel Express m'a guidé à chaque étape, de la recherche d'entreprise à l'installation sur place. Un grand merci à toute l'équipe !",
      rating: 5,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      id="temoignages"
      className="relative w-full bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="section-luxe relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="eyebrow-luxe mb-4 block">TÉMOIGNAGES</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Ils nous ont fait <span className="gradient-gold-text">confiance</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Découvrez les expériences de nos étudiants qui ont réalisé leur rêve international
            </p>
            <div className="divider-gold mx-auto mt-6" />
          </div>

          {/* Testimonial Carousel */}
          <div className="testimonial-card relative">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative">
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                  
                  {/* Quote icon */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-[#0A0A0A]" />
                  </div>
                </div>

                {/* Navigation arrows */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full bg-[#111111]/80 border border-[#D4AF37]/30 flex items-center justify-center hover:border-[#D4AF37] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full bg-[#111111]/80 border border-[#D4AF37]/30 flex items-center justify-center hover:border-[#D4AF37] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="lg:pl-8">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 italic">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-white/60">
                      {testimonials[activeIndex].role}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-lg">{testimonials[activeIndex].flag}</span>
                      <span className="text-sm text-[#D4AF37]">{testimonials[activeIndex].destination}</span>
                    </div>
                  </div>
                </div>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        idx === activeIndex 
                          ? 'bg-[#D4AF37] w-8' 
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Share CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl border border-[#D4AF37]/20 bg-[#111111]/50">
              <p className="text-white/60">
                Vous aussi, partagez votre expérience avec nous
              </p>
              <a
                href="https://wa.me/22665604592"
                className="btn-outline-gold text-xs flex items-center gap-2"
              >
                Partager mon histoire
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Temoignages;
