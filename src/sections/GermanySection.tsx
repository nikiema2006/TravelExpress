import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  GraduationCap, 
  Wrench, 
  Car,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Euro
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GermanySection = () => {
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
    { icon: GraduationCap, label: 'Études techniques', desc: 'Ingénierie & Sciences' },
    { icon: Wrench, label: 'Ausbildung', desc: 'Formation + Salaire' },
    { icon: Car, label: 'Automobile', desc: 'Industrie leader' },
    { icon: Briefcase, label: 'Emploi qualifié', desc: 'Salaires élevés' },
  ];

  const highlights = [
    'Études gratuites dans les universités publiques',
    'Ausbildung : formation rémunérée dès le départ',
    'Salaires parmi les plus élevés d\'Europe',
    'Excellence technique et innovation',
  ];

  return (
    <section
      ref={sectionRef}
      id="allemagne"
      className="relative w-full bg-[#0A0A0A] overflow-hidden"
    >
      {/* German flag stripes - subtle */}
      <div className="absolute top-0 left-0 right-0 h-2 flex">
        <div className="flex-1 bg-[#000000]" />
        <div className="flex-1 bg-[#DD0000]" />
        <div className="flex-1 bg-[#FFCE00]" />
      </div>

      <div className="section-luxe relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side - Left */}
            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="/germany.jpg"
                  alt="Berlin - Allemagne"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A]/50" />
                
                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 px-4 py-2 bg-[#FFCE00] rounded-lg flex items-center gap-2">
                  <Euro className="w-4 h-4 text-black" />
                  <span className="text-black text-sm font-medium">Études gratuites</span>
                </div>
              </div>

              {/* Decorative elements - geometric */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-[#FFCE00]/50" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-4 border-b-4 border-[#DD0000]/50" />
            </div>

            {/* Content Side - Right */}
            <div ref={contentRef}>
              <div className="reveal-item flex items-center gap-3 mb-4">
                <span className="text-4xl">🇩🇪</span>
                <span className="eyebrow-luxe">Excellence Technique</span>
              </div>

              <h2 className="reveal-item text-4xl lg:text-5xl font-bold text-white mb-4">
                Allemagne <span className="text-[#FFCE00]">Deutschland</span>
              </h2>

              <p className="reveal-item text-white/60 text-lg mb-6 leading-relaxed">
                Première économie européenne et leader mondial de l'innovation. 
                L'Allemagne offre une formation professionnelle d'excellence, 
                des études gratuites et des opportunités de carrière exceptionnelles 
                dans l'industrie et la technologie.
              </p>

              {/* Programs */}
              <div className="reveal-item grid grid-cols-2 gap-3 mb-6">
                {programs.map((prog, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-lg bg-[#111111] border border-[#FFCE00]/20 hover:border-[#FFCE00]/50 transition-colors"
                  >
                    <prog.icon className="w-5 h-5 text-[#FFCE00] mb-2" />
                    <h4 className="text-sm font-medium text-white">{prog.label}</h4>
                    <p className="text-xs text-white/50">{prog.desc}</p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="reveal-item space-y-2 mb-6">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFCE00] flex-shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="reveal-item flex gap-6 mb-6">
                <div>
                  <div className="text-2xl font-bold text-[#FFCE00]">20+</div>
                  <div className="text-xs text-white/50">Universités</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#FFCE00]">97%</div>
                  <div className="text-xs text-white/50">Réussite</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#FFCE00]">150+</div>
                  <div className="text-xs text-white/50">Étudiants</div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/22665604592?text=Je suis intéressé par l'Allemagne"
                className="reveal-item btn-gold inline-flex items-center gap-2"
              >
                Découvrir l'Allemagne
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GermanySection;
