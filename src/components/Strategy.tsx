
import React, { useEffect, useRef } from 'react';

const Strategy = () => {
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

  return (
    <section id="strategy" className="section bg-nova-light" ref={sectionRef}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-nova-primary text-center mb-16 reveal">Go-to-Market стратегия</h2>
        
        <div className="mb-12 reveal">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-nova-primary mb-6">Наша миссия</h3>
            <p className="text-lg text-gray-700">
              Мы продаем сокращение расходов компаниям, которые имеют внутренние отделы, занимающиеся задачами машинного обучения и искусственного интеллекта.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Подход снизу-вверх */}
          <div className="reveal">
            <div className="glass-card p-8 h-full">
              <div className="w-16 h-16 flex items-center justify-center bg-nova-primary/10 rounded-xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nova-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-nova-primary mb-6">Подход снизу-вверх (Через sales'ов)</h3>
              <ol className="space-y-4 text-gray-700 list-decimal pl-5">
                <li>Определяем общий список российских целевых компаний (400 компаний)</li>
                <li>Сверяем их статус (знакомы или нет, если да то насколько, что о них знаем)</li>
                <li>Сообщаем о нашем решении и зовем на презентацию</li>
                <li>Проводим презентацию и демонстрацию</li>
                <li>Проводим пилот в рамках которого обосновываем ценность по их KPI</li>
                <li>Планируем закупку</li>
              </ol>
              
              {/* Перевернутый треугольник (воронка) */}
              <div className="mt-8">
                <div className="w-full h-64 relative">
                  <div className="absolute w-full h-12 bg-red-100 rounded-t-lg flex items-center justify-center">
                    <span className="text-red-800 font-medium">Определение целевых компаний (400)</span>
                  </div>
                  <div className="absolute w-[85%] h-12 bg-orange-100 top-12 left-[7.5%] flex items-center justify-center">
                    <span className="text-orange-800 font-medium">Сверка статуса (340)</span>
                  </div>
                  <div className="absolute w-[70%] h-12 bg-yellow-100 top-24 left-[15%] flex items-center justify-center">
                    <span className="text-yellow-800 font-medium">Приглашение на презентацию (280)</span>
                  </div>
                  <div className="absolute w-[50%] h-12 bg-green-100 top-36 left-[25%] flex items-center justify-center">
                    <span className="text-green-800 font-medium">Проведение презы и демо (200)</span>
                  </div>
                  <div className="absolute w-[25%] h-12 bg-blue-100 top-48 left-[37.5%] flex items-center justify-center">
                    <span className="text-blue-800 font-medium">Пилот (100)</span>
                  </div>
                  <div className="absolute w-[12.5%] h-12 bg-purple-100 rounded-b-lg top-60 left-[43.75%] flex items-center justify-center">
                    <span className="text-purple-800 font-medium">Закупка (50)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Подход сверху-вниз */}
          <div className="reveal">
            <div className="glass-card p-8 h-full">
              <div className="w-16 h-16 flex items-center justify-center bg-nova-secondary/10 rounded-xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nova-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-nova-secondary mb-6">Подход сверху-вниз (Через product marketing)</h3>
              <ol className="space-y-4 text-gray-700 list-decimal pl-5">
                <li>Используем ABM-маркетинг: сегментируем pipeline на Tier-A/B/C</li>
                <li>Определяем ЛПР/ЛВР для каждой отрасли и определяем их KPI с учетом специфики</li>
                <li>Определяем способы дистрибуции контента:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Таргетированная реклама в Telegram</li>
                    <li>Участие в конференциях и подкастах</li>
                    <li>Создание видео на профильных площадках</li>
                    <li>Статьи на Habr</li>
                    <li>Публикации в отраслевых СМИ</li>
                  </ul>
                </li>
                <li>Реализуем маркетинговую стратегию и анализируем результаты</li>
              </ol>
              
              <div className="mt-8 p-4 bg-nova-secondary/10 rounded-lg">
                <p className="text-nova-secondary font-medium">Верхнеуровневая метрика: цена лида</p>
                <p className="text-sm text-gray-600 mt-2">Лид - человек, который перешел на стадию интереса (запросил презентацию и демонстрацию)</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Roadmap */}
        <div className="mt-16 reveal">
          <h3 className="text-2xl font-bold text-nova-primary mb-8 text-center">Roadmap</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-nova-primary/20 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute left-1/2 w-6 h-6 bg-nova-primary rounded-full transform -translate-x-1/2"></div>
                <div className="ml-[52%] md:w-1/2 p-4">
                  <h4 className="text-lg font-bold text-nova-primary">Этап 1</h4>
                  <p className="text-gray-700">GPU operator, Network Operator, GPU metrics Exporter</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 w-6 h-6 bg-nova-primary rounded-full transform -translate-x-1/2"></div>
                <div className="mr-[52%] md:w-1/2 md:ml-auto p-4 text-right">
                  <h4 className="text-lg font-bold text-nova-primary">Этап 2</h4>
                  <p className="text-gray-700">MinIO</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 w-6 h-6 bg-nova-primary rounded-full transform -translate-x-1/2"></div>
                <div className="ml-[52%] md:w-1/2 p-4">
                  <h4 className="text-lg font-bold text-nova-primary">Этап 3</h4>
                  <p className="text-gray-700">KubeRay, MLflow, Airflow, JupyterHub</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 w-6 h-6 bg-nova-primary rounded-full transform -translate-x-1/2"></div>
                <div className="mr-[52%] md:w-1/2 md:ml-auto p-4 text-right">
                  <h4 className="text-lg font-bold text-nova-primary">Этап 4</h4>
                  <p className="text-gray-700">Kubeflow (или его отдельные части)</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 w-6 h-6 bg-nova-primary rounded-full transform -translate-x-1/2"></div>
                <div className="ml-[52%] md:w-1/2 p-4">
                  <h4 className="text-lg font-bold text-nova-primary">Этап 5</h4>
                  <p className="text-gray-700">Nova AI dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
