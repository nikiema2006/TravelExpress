import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  GraduationCap, 
  Briefcase, 
  Award,
  Sun,
  CheckCircle2,
  ArrowRight,
  Euro
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SpainSection = () => {
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
    { icon: GraduationCap, label: 'Études supérieures', desc: 'Licence & Master' },
    { icon: Briefcase, label: 'Emploi saisonnier', desc: 'Tourisme & Agriculture' },
    { icon: Award, label: 'Diplômes UE', desc: 'Reconnus dans 27 pays' },
    { icon: Sun, label: 'Arts & Design', desc: 'Créativité méditerranéenne' },
  ];

  const highlights = [
    'Diplômes reconnus dans toute l\'Union Européenne',
    'Possibilité de travailler pendant vos études',
    'Coût de vie abordable comparé au Nord de l\'Europe',
    'Climat méditerranéen exceptionnel',
  ];

  return (
    <section
      ref={sectionRef}
      id="espagne"
      className="relative w-full bg-[#0A0A0A] overflow-hidden"
    >
      {/* Spanish wave pattern */}
      <div className="absolute top-0 left-0 right-0 h-32 opacity-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60V120H0V60Z" fill="#AA151B"/>
          <path d="M0 80C240 40 480 120 720 80C960 40 1200 120 1440 80V120H0V80Z" fill="#F1BF00"/>
        </svg>
      </div>

      <div className="section-luxe relative z-10 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side - Left */}
            <div ref={contentRef} className="order-2 lg:order-1">
              <div className="reveal-item flex items-center gap-3 mb-4">
                <span className="text-4xl">🇪🇸</span>
                <span className="eyebrow-luxe">Destination Européenne</span>
              </div>

              <h2 className="reveal-item text-4xl lg:text-5xl font-bold text-white mb-4">
                Espagne <span className="text-[#AA151B]">España</span>
              </h2>

              <p className="reveal-item text-white/60 text-lg mb-6 leading-relaxed">
                Porte d'entrée vers l'Europe, l'Espagne allie qualité de vie exceptionnelle, 
                culture vibrante et diplômes reconnus dans toute l'Union Européenne. 
                Une destination idéale pour étudier et vivre l'expérience méditerranéenne.
              </p>

              {/* Programs */}
              <div className="reveal-item grid grid-cols-2 gap-3 mb-6">
                {programs.map((prog, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-lg bg-[#111111] border border-[#AA151B]/20 hover:border-[#F1BF00]/50 transition-colors"
                  >
                    <prog.icon className="w-5 h-5 text-[#F1BF00] mb-2" />
                    <h4 className="text-sm font-medium text-white">{prog.label}</h4>
                    <p className="text-xs text-white/50">{prog.desc}</p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="reveal-item space-y-2 mb-6">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#AA151B] flex-shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="reveal-item flex gap-6 mb-6">
                <div>
                  <div className="text-2xl font-bold text-[#F1BF00]">30+</div>
                  <div className="text-xs text-white/50">Universités</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#F1BF00]">95%</div>
                  <div className="text-xs text-white/50">Réussite</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#F1BF00]">200+</div>
                  <div className="text-xs text-white/50">Étudiants</div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/22665604592?text=Je suis intéressé par l'Espagne"
                className="reveal-item btn-gold inline-flex items-center gap-2"
              >
                Explorer l'Espagne
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Image Side - Right */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="/spain.jpg"
                  alt="Barcelone - Espagne"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0A0A0A]/50" />
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-[#AA151B] rounded-lg flex items-center gap-2">
                  <Euro className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">Coût de vie abordable</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#F1BF00]/30 rounded-full" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#AA151B]/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpainSection;
