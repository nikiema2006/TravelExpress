import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  GraduationCap, 
  Stethoscope, 
  Atom,
  Languages,
  CheckCircle2,
  ArrowRight,
  Wallet
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const RussiaSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.querySelectorAll('.reveal-item') || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
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

  const programs = [
    { icon: Stethoscope, label: 'Médecine', desc: 'Formation MBBS' },
    { icon: Atom, label: 'Ingénierie', desc: 'Sciences & Tech' },
    { icon: GraduationCap, label: 'Sciences', desc: 'Recherche' },
    { icon: Languages, label: 'Cours de Russe', desc: 'Immersion' },
  ];

  const highlights = [
    'Diplômes reconnus mondialement (OMS, UNESCO)',
    'Coût de vie très abordable',
    'Bourses gouvernementales disponibles',
    'Excellence en médecine et sciences',
  ];

  return (
    <section
      ref={sectionRef}
      id="russie"
      className="relative w-full bg-[#0A0A0A] overflow-hidden"
    >
      {/* Russian flag stripes - subtle vertical */}
      <div className="absolute top-0 bottom-0 right-0 w-1 flex flex-col">
        <div className="flex-1 bg-[#FFFFFF]/10" />
        <div className="flex-1 bg-[#0039A6]/20" />
        <div className="flex-1 bg-[#D52B1E]/20" />
      </div>

      <div className="section-luxe relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side - Left */}
            <div ref={contentRef} className="order-2 lg:order-1">
              <div className="reveal-item flex items-center gap-3 mb-4">
                <span className="text-4xl">🇷🇺</span>
                <span className="eyebrow-luxe">Excellence Académique</span>
              </div>

              <h2 className="reveal-item text-4xl lg:text-5xl font-bold text-white mb-4">
                Russie <span className="text-[#0039A6]">Россия</span>
              </h2>

              <p className="reveal-item text-white/60 text-lg mb-6 leading-relaxed">
                La Russie offre une excellence académique reconnue dans les domaines 
                scientifiques et médicaux. Avec un coût de vie abordable et une riche 
                culture historique, c'est une destination privilégiée pour les étudiants 
                ambitieux.
              </p>

              {/* Programs */}
              <div className="reveal-item grid grid-cols-2 gap-3 mb-6">
                {programs.map((prog, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-lg bg-[#111111] border border-[#0039A6]/20 hover:border-[#D52B1E]/50 transition-colors"
                  >
                    <prog.icon className="w-5 h-5 text-[#D52B1E] mb-2" />
                    <h4 className="text-sm font-medium text-white">{prog.label}</h4>
                    <p className="text-xs text-white/50">{prog.desc}</p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="reveal-item space-y-2 mb-6">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0039A6] flex-shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="reveal-item flex gap-6 mb-6">
                <div>
                  <div className="text-2xl font-bold text-[#D52B1E]">25+</div>
                  <div className="text-xs text-white/50">Universités</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#D52B1E]">96%</div>
                  <div className="text-xs text-white/50">Réussite</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#D52B1E]">100+</div>
                  <div className="text-xs text-white/50">Étudiants</div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/22665604592?text=Je suis intéressé par la Russie"
                className="reveal-item btn-gold inline-flex items-center gap-2"
              >
                Explorer la Russie
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Image Side - Right */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="/russia.jpg"
                  alt="Moscou - Russie"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0A0A0A]/50" />
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-[#0039A6] rounded-lg flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">Coût abordable</span>
                </div>
              </div>

              {/* Decorative elements - onion dome inspired */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border-2 border-[#D52B1E]/30" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#0039A6]/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RussiaSection;
