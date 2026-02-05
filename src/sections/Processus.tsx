import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, FileCheck, Plane, Home, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Processus = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Steps animation
      gsap.fromTo(
        stepsRef.current?.querySelectorAll('.step-item') || [],
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Consultation',
      description: 'Analyse de votre projet et définition de vos objectifs. Nous évaluons votre profil et vous orientons vers la meilleure destination.',
      color: '#D4AF37',
    },
    {
      number: '02',
      icon: FileCheck,
      title: 'Préparation',
      description: 'Constitution de votre dossier complet. Nous vous accompagnons dans la collecte et la préparation de tous les documents nécessaires.',
      color: '#D4AF37',
    },
    {
      number: '03',
      icon: Plane,
      title: 'Validation',
      description: 'Suivi des démarches et validations. Nous gérons les communications avec les universités et les autorités pour vous.',
      color: '#D4AF37',
    },
    {
      number: '04',
      icon: Home,
      title: 'Départ',
      description: 'Visa, logement et nouvelle vie. Nous vous accompagnons jusqu\'à votre installation complète dans votre nouveau pays.',
      color: '#D4AF37',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="processus"
      className="relative w-full bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0A0A0A] to-[#111111]" />

      <div className="section-luxe relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="eyebrow-luxe mb-4 block">NOTRE MÉTHODE</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Votre voyage en <span className="gradient-gold-text">4 étapes</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Un processus clair et personnalisé pour concrétiser votre projet international
            </p>
            <div className="divider-gold mx-auto mt-6" />
          </div>

          {/* Timeline */}
          <div ref={stepsRef} className="relative">
            {/* Vertical line */}
            <div 
              ref={lineRef}
              className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent origin-top"
            />

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`step-item relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Number circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center border-2 animate-pulse-glow"
                      style={{ 
                        borderColor: step.color,
                        background: `linear-gradient(145deg, #111111, #1A1A1A)`,
                      }}
                    >
                      <span className="text-xl font-bold gradient-gold-text">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pt-2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <div className="card-luxe p-6 inline-block">
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ background: `${step.color}15` }}
                        >
                          <step.icon className="w-5 h-5" style={{ color: step.color }} />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a
              href="https://wa.me/22665604592"
              className="btn-gold inline-flex items-center gap-2"
            >
              Commencer votre aventure
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processus;
