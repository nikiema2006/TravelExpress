import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  GraduationCap, 
  Briefcase, 
  Building2, 
  Languages, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Destination {
  country: string;
  flag: string;
  subtitle: string;
  cities: string;
  description: string;
  image: string;
  programs: { icon: React.ElementType; label: string }[];
  highlights: string[];
  stats: { value: string; label: string }[];
}

const Destinations = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(
        cardsRef.current?.querySelectorAll('.destination-card') || [],
        { y: '12vh', opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
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

  const destinations: Destination[] = [
    {
      country: 'Chine',
      flag: '🇨🇳',
      subtitle: 'Empire du Milieu',
      cities: 'Shanghai • Pékin • Guangzhou • Shenzhen',
      description: 'Deuxième économie mondiale, la Chine offre des opportunités uniques : universités de rang mondial, marché du travail dynamique et hub business international.',
      image: '/china.jpg',
      programs: [
        { icon: GraduationCap, label: 'Études universitaires' },
        { icon: Briefcase, label: 'Travail & Stages' },
        { icon: Building2, label: 'Business & Import' },
        { icon: Languages, label: 'Cours de Mandarin' },
      ],
      highlights: [
        'Bourses CSC disponibles (100% des frais)',
        'Visa étudiant X1/X2 facilité',
        'Accompagnement de A à Z',
      ],
      stats: [
        { value: '50+', label: 'Universités' },
        { value: '98%', label: 'Réussite' },
        { value: '500+', label: 'Étudiants' },
      ],
    },
    {
      country: 'Espagne',
      flag: '🇪🇸',
      subtitle: 'Tierra del Sol',
      cities: 'Madrid • Barcelone • Valence • Séville',
      description: "Porte d'entrée vers l'Europe, l'Espagne offre des diplômes reconnus dans toute l'UE, une qualité de vie exceptionnelle et des opportunités professionnelles variées.",
      image: '/spain.jpg',
      programs: [
        { icon: GraduationCap, label: 'Études supérieures' },
        { icon: Briefcase, label: 'Emploi saisonnier' },
        { icon: Building2, label: 'Diplômes UE' },
        { icon: Languages, label: 'Arts & Design' },
      ],
      highlights: [
        'Diplômes reconnus dans 27 pays UE',
        'Possibilité de travail pendant études',
        'Coût de vie abordable',
      ],
      stats: [
        { value: '30+', label: 'Universités' },
        { value: '95%', label: 'Réussite' },
        { value: '200+', label: 'Étudiants' },
      ],
    },
    {
      country: 'Allemagne',
      flag: '🇩🇪',
      subtitle: 'Land der Ideen',
      cities: 'Berlin • Munich • Francfort • Hambourg',
      description: "Première économie européenne et leader mondial de l'innovation. Formation professionnelle d'excellence, industrie automobile et technologies de pointe.",
      image: '/germany.jpg',
      programs: [
        { icon: GraduationCap, label: 'Études techniques' },
        { icon: Briefcase, label: 'Ausbildung' },
        { icon: Building2, label: 'Automobile' },
        { icon: Languages, label: 'Emploi qualifié' },
      ],
      highlights: [
        'Études gratuites dans universités publiques',
        'Ausbildung : formation + salaire',
        'Salaires parmi les plus élevés d\'Europe',
      ],
      stats: [
        { value: '20+', label: 'Universités' },
        { value: '97%', label: 'Réussite' },
        { value: '150+', label: 'Étudiants' },
      ],
    },
    {
      country: 'Russie',
      flag: '🇷🇺',
      subtitle: 'Россия',
      cities: 'Moscou • Saint-Pétersbourg • Kazan',
      description: 'Excellence académique dans les domaines scientifiques et médicaux. Coût de vie abordable et riche culture historique.',
      image: '/russia.jpg',
      programs: [
        { icon: GraduationCap, label: 'Médecine' },
        { icon: Briefcase, label: 'Ingénierie' },
        { icon: Building2, label: 'Sciences' },
        { icon: Languages, label: 'Cours de Russe' },
      ],
      highlights: [
        'Diplômes reconnus mondialement',
        'Coût de vie très abordable',
        'Bourses gouvernementales',
      ],
      stats: [
        { value: '25+', label: 'Universités' },
        { value: '96%', label: 'Réussite' },
        { value: '100+', label: 'Étudiants' },
      ],
    },
    {
      country: 'Turquie',
      flag: '🇹🇷',
      subtitle: 'Türkiye',
      cities: 'Istanbul • Ankara • Izmir',
      description: 'Pont entre l\'Europe et l\'Asie, la Turquie offre une éducation de qualité à prix compétitif dans un cadre culturel unique.',
      image: '/turkey.jpg',
      programs: [
        { icon: GraduationCap, label: 'Études universitaires' },
        { icon: Briefcase, label: 'Commerce' },
        { icon: Building2, label: 'Tourisme' },
        { icon: Languages, label: 'Cours de Turc' },
      ],
      highlights: [
        'Frais de scolarité abordables',
        'Bourses Turquie disponibles',
        'Qualité d\'enseignement reconnue',
      ],
      stats: [
        { value: '15+', label: 'Universités' },
        { value: '94%', label: 'Réussite' },
        { value: '80+', label: 'Étudiants' },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="destinations"
      className="section-container bg-[#E9E6F6]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-12 lg:mb-16">
          <span className="eyebrow mb-4 block">DESTINATIONS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-4">
            Choisissez votre<br />
            <span className="text-[#3A6DFF]">prochaine destination</span>
          </h2>
          <p className="text-lg text-[#6D6D6D] max-w-xl">
            Cinq destinations exceptionnelles pour transformer vos ambitions en réalité
          </p>
        </div>

        {/* Destination Cards */}
        <div ref={cardsRef} className="space-y-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="destination-card bg-white card-rounded card-shadow overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={dest.image}
                    alt={dest.country}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                    <span className="text-2xl">{dest.flag}</span>
                    <span className="font-semibold text-[#111111]">{dest.country}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-2 text-sm text-[#6D6D6D] mb-2">
                    <span>{dest.subtitle}</span>
                    <span>•</span>
                    <span>{dest.cities}</span>
                  </div>

                  <p className="text-[#111111] mb-6 leading-relaxed">
                    {dest.description}
                  </p>

                  {/* Programs */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#111111] mb-3 uppercase tracking-wide">
                      Programmes disponibles
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {dest.programs.map((prog, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-[#6D6D6D]"
                        >
                          <prog.icon className="w-4 h-4 text-[#3A6DFF]" />
                          <span>{prog.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    {dest.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-[#111111] mb-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#3A6DFF]" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats & CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#111111]/10">
                    <div className="flex gap-6">
                      {dest.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-xl font-bold text-[#3A6DFF]">
                            {stat.value}
                          </div>
                          <div className="text-xs text-[#6D6D6D]">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <a
                      href={`https://wa.me/22665604592?text=Je suis intéressé par ${dest.country}`}
                      className="btn-primary flex items-center gap-2 text-sm"
                    >
                      Découvrir {dest.country}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
