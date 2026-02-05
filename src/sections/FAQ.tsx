import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Général',
      question: 'Quels types de projets accompagnez-vous ?',
      answer: 'Nous accompagnons trois types de projets principaux : les études universitaires (licence, master, doctorat), les projets professionnels (stages, emploi, Ausbildung) et les projets business (création d\'entreprise, import/export). Chaque projet bénéficie d\'un accompagnement personnalisé adapté à vos objectifs.',
    },
    {
      category: 'Processus',
      question: 'Combien de temps prend le processus complet ?',
      answer: 'La durée varie selon la destination et le type de projet. En moyenne, comptez 2 à 4 mois pour les études (inscription + visa) et 3 à 6 mois pour les projets professionnels. Nous optimisons chaque étape pour réduire les délais tout en garantissant la qualité de votre dossier.',
    },
    {
      category: 'Études',
      question: 'Dois-je parler la langue du pays de destination ?',
      answer: 'Cela dépend de la destination et du programme. Pour la Chine, les cours de mandarin sont souvent disponibles en anglais. Pour l\'Allemagne, un niveau B1/B2 en allemand est généralement requis. L\'Espagne accepte souvent les étudiants francophones avec des cours de langue intensifs. Nous évaluons votre niveau et vous proposons des solutions adaptées.',
    },
    {
      category: 'Général',
      question: 'Quel est le coût de vos services ?',
      answer: 'Nos tarifs varient selon la complexité du projet et la destination. Nous proposons des forfaits transparents sans frais cachés. La première consultation est gratuite et sans engagement. Contactez-nous pour obtenir un devis personnalisé adapté à votre projet.',
    },
    {
      category: 'Services',
      question: 'Aidez-vous pour le logement et l\'installation ?',
      answer: 'Absolument ! Notre accompagnement 360° inclut la recherche de logement, la réservation temporaire pour votre arrivée, l\'assistance pour l\'ouverture de compte bancaire, l\'obtention de la carte de séjour et l\'intégration dans votre nouvel environnement.',
    },
    {
      category: 'Services',
      question: 'Proposez-vous un accompagnement pour le business en Chine ?',
      answer: 'Oui, nous accompagnons les entrepreneurs dans leurs projets business en Chine : recherche de fournisseurs, négociation, vérification d\'usines, création de société, et conformité réglementaire. Notre réseau local vous garantit un accompagnement fiable et sécurisé.',
    },
    {
      category: 'Études',
      question: 'Proposez-vous des bourses d\'études ?',
      answer: 'Nous vous aidons à identifier et postuler aux bourses disponibles : CSC pour la Chine (100% des frais couverts), DAAD pour l\'Allemagne, bourses gouvernementales espagnoles, etc. Nous vous guidons dans la constitution de votre dossier de candidature pour maximiser vos chances.',
    },
    {
      category: 'Processus',
      question: 'Quels documents sont nécessaires pour commencer ?',
      answer: 'Les documents de base incluent : passeport valide, relevés de notes et diplômes (traduits si nécessaire), CV, lettre de motivation, et preuves de ressources financières. Nous vous fournissons une liste complète et personnalisée lors de notre première consultation.',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
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

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative w-full bg-[#0A0A0A] overflow-hidden"
    >
      <div className="section-luxe relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="eyebrow-luxe mb-4 block">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Questions <span className="gradient-gold-text">fréquentes</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Trouvez les réponses aux questions les plus courantes sur nos services
            </p>
            <div className="divider-gold mx-auto mt-6" />
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item border border-[#D4AF37]/10 rounded-xl overflow-hidden bg-[#111111]/50 backdrop-blur-sm hover:border-[#D4AF37]/30 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                    <span className="font-medium text-white pr-4">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4AF37] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pl-14">
                    <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-white/60 mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <a
              href="https://wa.me/22665604592"
              className="btn-gold inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Discuter avec nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
