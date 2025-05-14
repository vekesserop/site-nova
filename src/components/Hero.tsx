
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-nova-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-nova-secondary/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
        
        <div ref={parallaxRef} className="absolute inset-0 -z-10">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-nova-accent/5 rounded-full"></div>
          <div className="absolute top-[60%] right-[15%] w-72 h-72 bg-nova-secondary/5 rounded-full"></div>
          <div className="absolute bottom-[20%] left-[30%] w-48 h-48 bg-nova-primary/5 rounded-full"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
            Nova AI
          </h1>
          <p className="text-xl md:text-2xl text-nova-primary/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Преднастроенная kubernetes-платформа для задач обучения и инференса
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#solution" 
              className="bg-gradient-to-r from-nova-primary to-nova-secondary text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all"
            >
              Узнать больше
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-nova-secondary text-nova-secondary px-8 py-3 rounded-full font-medium hover:bg-nova-secondary hover:text-white transition-all"
            >
              Связаться
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#problems" className="text-nova-primary hover:text-nova-secondary transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
