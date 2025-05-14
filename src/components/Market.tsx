
import React, { useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Market = () => {
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

  const marketData = [
    { name: 'Grand View Research', current: 1.19, forecast: 16.61, cagr: 39.7 },
    { name: 'Fortune Business', current: 1.58, forecast: 19.55, cagr: 37.8 },
    { name: 'Allied Market', current: 1.4, forecast: 37.4, cagr: 39.3 },
    { name: 'Verified Market', current: 1.9, forecast: 23.95, cagr: 37.2 },
    { name: 'Global Market', current: 1.5, forecast: 39, cagr: 32.5 },
  ];

  const relevantIndustries = [
    { name: 'Нефтегаз', icon: '🛢️', description: 'Оптимизация процессов добычи и переработки' },
    { name: 'Банки', icon: '🏦', description: 'Кредитный скоринг, антифрод, персонализация' },
    { name: 'Ритейл', icon: '🛒', description: 'Прогнозирование спроса, персонализация' },
    { name: 'Промышленность', icon: '🏭', description: 'Предиктивное обслуживание, контроль качества' },
  ];

  return (
    <section id="market" className="section bg-nova-light" ref={sectionRef}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-nova-primary text-center mb-16 reveal">Объем рынка и динамика</h2>
        
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div className="h-96 reveal">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={marketData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar name="Текущий объем (млрд $)" dataKey="current" fill="#1e88e5" />
                <Bar name="Прогнозный объем (млрд $)" dataKey="forecast" fill="#64b5f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="reveal">
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold text-nova-primary mb-8">Ключевые данные:</h3>
              <ul className="space-y-6">
                <li className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-nova-secondary/10 rounded-full mr-4">
                    <span className="text-xl font-bold text-nova-secondary">$</span>
                  </div>
                  <div className="text-gray-700">
                    Базовый объём рынка: <span className="font-semibold">$1.19 - $1.90 млрд</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-nova-secondary/10 rounded-full mr-4">
                    <span className="text-xl font-bold text-nova-secondary">↗️</span>
                  </div>
                  <div className="text-gray-700">
                    Прогнозный объём: <span className="font-semibold">$16.61 - $39.00 млрд</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-nova-secondary/10 rounded-full mr-4">
                    <span className="text-xl font-bold text-nova-secondary">%</span>
                  </div>
                  <div className="text-gray-700">
                    CAGR: <span className="font-semibold">37.2% - 39.7%</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-nova-secondary/10 rounded-full mr-4">
                    <span className="text-xl font-bold text-nova-secondary">📈</span>
                  </div>
                  <div className="text-gray-700">
                    Рост on-premise решений: <span className="font-semibold">25-30% год к году</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="reveal">
          <h3 className="text-2xl font-bold text-nova-primary mb-8 text-center">Наиболее релевантные отрасли</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relevantIndustries.map((industry, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h4 className="text-lg font-bold text-nova-primary mb-2">{industry.name}</h4>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
