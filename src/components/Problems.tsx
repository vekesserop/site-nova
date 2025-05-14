
import React, { useEffect, useRef } from 'react';

const Problems = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const keyPainPoints = [
    {
      bold: 'Интеграционная сложность',
      text: ' — сборка и постоянная синхронизация разрозненных open-source-компонентов и GPU-окружения требует глубокой экспертизы и быстро превращается в «спагетти-стек».'
    },
    {
      bold: 'Операционная нагрузка 24/7',
      text: ' — всё, от патчей Kubernetes до масштабирования и мониторинга моделей, ложится на внутреннюю команду без внешней поддержки.'
    },
    {
      bold: 'Регуляторно-безопасностной балласт',
      text: ' — выполнение 152-ФЗ, ГОСТ-криптографии и аттестаций добавляет отдельный слой PKI, RBAC, аудита и бюрократии к каждому изменению.'
    },
    {
      bold: 'Кадровый дефицит и риск «bus-factor»',
      text: ' — найти и удержать MLOps-инженеров трудно, а уход ключевых специалистов или культурный разрыв DS-DevOps ставит платформу на паузу.'
    },
    {
      bold: 'Неочевидный TCO и потерянный time-to-market',
      text: ' — совокупные CAPEX/OPEX, скрытые доработки и штрафные риски часто делают «DIY-платформу» дороже готового on-premise сервиса.'
    }
  ];

  return (
    <section id="problems" className="section bg-gradient-to-b from-white to-nova-light" ref={sectionRef}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-nova-primary text-center mb-16 reveal">Боли при построении собственной ML платформы</h2>
        
        <div className="glass-card p-8 reveal">
          <ul className="space-y-6">
            {keyPainPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-nova-primary/10 rounded-full mr-4 shrink-0">
                  <span className="text-xl font-bold text-nova-primary">{index + 1}</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-bold">{point.bold}</span>
                  {point.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Problems;
