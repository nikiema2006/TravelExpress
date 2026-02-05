import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  GraduationCap, 
  Briefcase, 
  Building2, 
  Languages,
  CheckCircle2,
  ArrowRight,
  Star,
  TrendingUp,
  Award
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ChinaSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax
      const imgElement = imageRef.current?.querySelector('img');
      if (imgElement) {
        gsap.fromTo(
          imgElement,
          { y: 100, scale: 1.1 },
          {
            y: -50,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }

      // Content reveal
      gsap.fromTo(
        contentRef.current?.querySelectorAll('.reveal-item') || [],
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats counter animation
      gsap.fromTo(
        statsRef.current?.querySelectorAll('.stat-item') || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const programs = [
    { icon: GraduationCap, label: 'Études universitaires', desc: 'Licence, Master, Doctorat' },
    { icon: Briefcase, label: 'Travail & Stages', desc: 'Opportunités professionnelles' },
    { icon: Building2, label: 'Business & Import', desc: 'Création d\'entreprise' },
    { icon: Languages, label: 'Cours de Mandarin', desc: 'Immersion linguistique' },
  ];

  const highlights = [
    'Bourses CSC disponibles (100% des frais couverts)',
    'Visa étudiant X1/X2 facilité',
    'Accompagnement de A à Z',
    'Partenariats avec 50+ universités',
  ];

  const stats = [
    { icon: Award, value: '50+', label: 'Universités partenaires' },
    { icon: TrendingUp, value: '98%', label: 'Taux de réussite' },
    { icon: Star, value: '500+', label: 'Étudiants accompagnés' },
  ];

  return (
    <section
      ref={sectionRef}
      id="chine"
      className="relative w-full bg-[#0A0A0A] overflow-hidden"
    >
      {/* Chinese pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L35 20L55 15L40 30L55 45L35 40L30 60L25 40L5 45L20 30L5 15L25 20L30 0Z' fill='%23DE2910' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Featured badge */}
      <div className="absolute top-8 right-8 z-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#DE2910] to-[#FFDE00] blur-lg opacity-50" />
          <div className="relative px-4 py-2 bg-gradient-to-r from-[#DE2910] to-[#FFDE00] rounded-lg">
            <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Star className="w-4 h-4 fill-white" />
              Destination Phare
            </span>
          </div>
        </div>
      </div>

      <div className="section-luxe relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">🇨🇳</span>
              <div>
                <span className="eyebrow-luxe block mb-1">Destination Phare</span>
                <h2 className="text-4xl lg:text-6xl font-bold text-white">
                  Chine <span className="text-[#DE2910]">中国</span>
                </h2>
              </div>
            </div>
            <p className="text-white/60 text-lg max-w-xl">
              L'Empire du Milieu vous ouvre ses portes. Deuxième économie mondiale, 
              la Chine offre des opportunités uniques pour votre avenir.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div ref={imageRef} className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
              <img
                src="/china.jpg"
                alt="Shanghai - Chine"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              
              {/* Floating stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-3">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="bg-[#0A0A0A]/80 backdrop-blur-sm rounded-lg p-3 text-center border border-[#DE2910]/30">
                      <stat.icon className="w-4 h-4 text-[#FFDE00] mx-auto mb-1" />
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-[10px] text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-[#FFDE00]/50" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-[#DE2910]/50" />
            </div>

            {/* Content Side */}
            <div ref={contentRef}>
              <h3 className="reveal-item text-2xl lg:text-3xl font-semibold text-white mb-6">
                Pourquoi choisir la <span className="text-[#DE2910]">Chine</span> ?
              </h3>

              <p className="reveal-item text-white/60 mb-8 leading-relaxed">
                La Chine combine excellence académique, dynamisme économique et 
                richesse culturelle millénaire. Avec nos partenariats exclusifs, 
                bénéficiez d'un accès privilégié aux meilleures universités chinoises 
                et des bourses CSC couvrant 100% de vos frais.
              </p>

              {/* Programs Grid */}
              <div className="reveal-item grid grid-cols-2 gap-4 mb-8">
                {programs.map((prog, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-[#111111] border border-[#D4AF37]/20 hover:border-[#DE2910]/50 transition-colors group"
                  >
                    <prog.icon className="w-6 h-6 text-[#FFDE00] mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="text-sm font-semibold text-white mb-1">{prog.label}</h4>
                    <p className="text-xs text-white/50">{prog.desc}</p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="reveal-item space-y-3 mb-8">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#DE2910] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="reveal-item flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/22665604592?text=Je suis intéressé par la Chine"
                  className="btn-gold flex items-center justify-center gap-2"
                >
                  Découvrir la Chine
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="btn-outline-gold flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-4 h-4" />
                  Voir les bourses
                </a>
              </div>
            </div>
          </div>

          {/* Bottom stats bar */}
          <div ref={statsRef} className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Universités partenaires', value: '50+' },
              { label: 'Taux de réussite', value: '98%' },
              { label: 'Étudiants accompagnés', value: '500+' },
              { label: 'Années d\'expérience', value: '10+' },
            ].map((stat, idx) => (
              <div key={idx} className="stat-item text-center p-6 rounded-xl border border-[#DE2910]/20 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
                <div className="text-3xl lg:text-4xl font-bold gradient-gold-text mb-2">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChinaSection;
