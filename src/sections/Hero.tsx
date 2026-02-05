import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, MapPin, Star, Users, Globe, Award, TrendingUp } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }

    const particles: Particle[] = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Light follow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
      );

      // Cards animation
      gsap.fromTo(
        cardsRef.current?.querySelectorAll('.country-card') || [],
        { opacity: 0, y: 80, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.9,
        }
      );

      // Stats animation
      gsap.fromTo(
        '.stat-counter',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          delay: 1.2,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const countries = [
    { name: 'Chine', flag: '🇨🇳', color: '#DE2910', students: '500+' },
    { name: 'Espagne', flag: '🇪🇸', color: '#AA151B', students: '200+' },
    { name: 'Allemagne', flag: '🇩🇪', color: '#FFCE00', students: '150+' },
    { name: 'Russie', flag: '🇷🇺', color: '#0039A6', students: '100+' },
  ];

  const stats = [
    { icon: Users, value: '950+', label: 'Étudiants accompagnés', suffix: '' },
    { icon: Globe, value: '4', label: 'Pays partenaires', suffix: '' },
    { icon: Award, value: '10', label: 'Années d\'expérience', suffix: '+' },
    { icon: TrendingUp, value: '98', label: 'Taux de réussite', suffix: '%' },
  ];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full bg-[#0A0A0A] overflow-hidden flex items-center"
    >
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="particle-canvas" />

      {/* Light follow effect */}
      <div
        ref={lightRef}
        className="light-follow hidden lg:block"
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-16 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Top badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5">
              <Star className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs text-[#D4AF37] tracking-wider uppercase">Excellence depuis 2014</span>
            </div>
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6"
          >
            <span className="text-white">Votre avenir</span>
            <br />
            <span className="gradient-gold-text italic">s'écrit à l'international</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-center text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12"
          >
            Accompagnement premium pour vos projets d'études et de carrière 
            en Chine, Espagne, Allemagne et Russie
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://wa.me/22665604592"
              className="btn-gold flex items-center gap-2"
            >
              Démarrer votre projet
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#destinations"
              className="btn-outline-gold flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Explorer les destinations
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-counter text-center p-6 rounded-xl border border-[#D4AF37]/10 bg-[#111111]/50 backdrop-blur-sm"
              >
                <stat.icon className="w-6 h-6 text-[#D4AF37] mx-auto mb-3" />
                <div className="text-3xl lg:text-4xl font-bold gradient-gold-text mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Country Cards */}
          <div ref={cardsRef} className="perspective-1000">
            <p className="text-center text-sm text-white/40 uppercase tracking-widest mb-6">
              Nos destinations phares
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {countries.map((country, index) => (
                <a
                  key={index}
                  href={`#${country.name.toLowerCase()}`}
                  className="country-card group relative preserve-3d"
                >
                  <div className="card-luxe p-6 text-center">
                    {/* Glow effect on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{
                        background: `radial-gradient(circle at center, ${country.color}20 0%, transparent 70%)`,
                      }}
                    />
                    
                    <span className="text-4xl lg:text-5xl mb-4 block">{country.flag}</span>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {country.name}
                    </h3>
                    <div className="flex items-center justify-center gap-1 text-sm text-white/50">
                      <Users className="w-3 h-3" />
                      <span>{country.students} étudiants</span>
                    </div>

                    {/* Border glow */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 20px ${country.color}30, 0 0 30px ${country.color}20`,
                      }}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
