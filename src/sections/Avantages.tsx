import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Award, 
  Layers, 
  HandHeart, 
  Network, 
  Zap, 
  Headphones 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Avantages = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { x: '-10vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        cardsRef.current?.querySelectorAll('.avantage-card') || [],
        { y: '10vh', opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const avantages = [
    {
      icon: Award,
      title: 'Expertise prouvée',
      description: 'Plus de 10 ans d\'expérience et 500+ étudiants accompagnés avec succès.',
      highlight: '10 ans d\'expérience',
    },
    {
      icon: Layers,
      title: 'Services complets',
      description: 'Études, travail, business : tous vos projets à l\'international avec des solutions adaptées.',
      highlight: 'Tous vos projets',
    },
    {
      icon: HandHeart,
      title: 'Accompagnement 360°',
      description: 'De la sélection jusqu\'à l\'installation : à vos côtés à chaque étape du parcours.',
      highlight: 'À vos côtés',
    },
    {
      icon: Network,
      title: 'Réseau international',
      description: 'Contacts établis avec universités et partenaires en Chine, Espagne, Allemagne, Russie et Turquie.',
      highlight: 'Universités et partenaires',
    },
    {
      icon: Zap,
      title: 'Processus rapide',
      description: 'Délais optimisés pour vos admissions et visas. Démarrez votre aventure rapidement.',
      highlight: 'Délais optimisés',
    },
    {
      icon: Headphones,
      title: 'Suivi post-arrivée',
      description: 'Assistance continue après votre arrivée : logement, installation, intégration.',
      highlight: 'Assistance continue',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="avantages"
      className="section-container bg-[#F6F6F2]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-12 lg:mb-16">
          <span className="eyebrow mb-4 block">POURQUOI NOUS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-4">
            Pourquoi<br />
            <span className="text-[#3A6DFF]">Travel Express</span> ?
          </h2>
          <p className="text-lg text-[#6D6D6D] max-w-xl">
            Votre partenaire pour vos projets d'études, travail et business à l'international
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {avantages.map((avantage, index) => (
            <div
              key={index}
              className="avantage-card bg-white card-rounded card-shadow p-6 lg:p-8 group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-[#3A6DFF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#3A6DFF] transition-colors duration-300">
                <avantage.icon className="w-7 h-7 text-[#3A6DFF] group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-[#111111] mb-3">
                {avantage.title}
              </h3>
              
              <p className="text-[#6D6D6D] mb-4 leading-relaxed">
                {avantage.description}
              </p>
              
              <div className="inline-flex items-center gap-2 text-sm font-medium text-[#3A6DFF]">
                <span className="w-1.5 h-1.5 bg-[#3A6DFF] rounded-full"></span>
                {avantage.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Avantages;
