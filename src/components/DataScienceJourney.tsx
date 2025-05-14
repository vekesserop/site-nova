import React, { useEffect, useRef } from 'react';
import { ArrowRight, Clock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const DataScienceJourney = () => {
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

  const journeySteps = [
    {
      stage: "Доступ к окружению",
      vanilla: {
        description: "Ждёт, пока DevOps настроит JupyterHub или вручную собирает Docker; согласует GPU-quorum и quotas.",
        icon: <XCircle className="text-red-500" />,
        effort: "Зависимость от DevOps",
        time: "Дни-недели"
      },
      nova: {
        description: "Создаёт ноутбук в Nova Console, выбирает GPU/CPU и образ; quota берет из готового namespace.",
        icon: <CheckCircle className="text-green-500" />,
        effort: "Self-service",
        time: "Минуты"
      }
    },
    {
      stage: "Эксперименты",
      vanilla: {
        description: "Пишет Bash-скрипт для логирования метрик; вручную выгружает артефакты в S3; ошибки версий CUDA.",
        icon: <AlertTriangle className="text-amber-500" />,
        effort: "Ручная работа",
        time: "Часы на настройку"
      },
      nova: {
        description: "MLflow auto-logging уже включён; артефакты попадают в Registry + MinIO; CUDA совместим.",
        icon: <CheckCircle className="text-green-500" />,
        effort: "Автоматизировано",
        time: "Мгновенно"
      }
    },
    {
      stage: "Distributed training / hyper-tune",
      vanilla: {
        description: "Уговаривает MLOps настроить KubeRay; тратит часы на YAML и лимиты; слетают драйверы.",
        icon: <XCircle className="text-red-500" />,
        effort: "Высокая сложность",
        time: "Дни"
      },
      nova: {
        description: "Шаблон Ray-Job готов; просто указывает num-workers; GPU-оператор автоматически выделяет ресурсы.",
        icon: <CheckCircle className="text-green-500" />,
        effort: "Простая настройка",
        time: "Минуты"
      }
    },
    {
      stage: "Deployment / A-B",
      vanilla: {
        description: "Пишет сервис YAML, договаривается о Ingress; дольше 1-2 дней.",
        icon: <AlertTriangle className="text-amber-500" />,
        effort: "Требует DevOps",
        time: "1-2 дня"
      },
      nova: {
        description: "Нажимает «Promote model» в MLflow → сервис развёрнут, канареечный трафик 10 % настроен.",
        icon: <CheckCircle className="text-green-500" />,
        effort: "One-click deploy",
        time: "Минуты"
      }
    },
    {
      stage: "Monitoring & retrain",
      vanilla: {
        description: "Сам делает SQL к метрикам; дрейф замечает спустя недели.",
        icon: <XCircle className="text-red-500" />,
        effort: "Ручной мониторинг",
        time: "Недели задержки"
      },
      nova: {
        description: "Дашборды дрейфа и алерты приходят в Telegram/Teams; retrain-pipeline запускается автоматически.",
        icon: <CheckCircle className="text-green-500" />,
        effort: "Автоматические алерты",
        time: "Реальное время"
      }
    },
    {
      stage: "Финиш",
      vanilla: {
        description: "80 % времени на инфраструктуру, 20 % — на Data Science.",
        icon: <XCircle className="text-red-500" />,
        effort: "Фокус на инфраструктуре",
        time: "Постоянно"
      },
      nova: {
        description: "Наоборот — 20 % инфраструктура, 80 % исследование данных и улучшение моделей.",
        icon: <CheckCircle className="text-green-500" />,
        effort: "Фокус на моделях",
        time: "С первого дня"
      }
    }
  ];

  return (
    <section id="ds-journey" className="section bg-nova-light" ref={sectionRef}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal">
          <span className="gradient-text">Customer Journey Map Data Scientist</span>
          <span className="block text-2xl md:text-3xl mt-2 text-nova-primary">Vanilla Kubernetes vs Nova AI</span>
        </h2>
        
        <div className="mb-8 reveal">
          <p className="text-center text-gray-700 mb-8">
            Сравнение пути настройки и эксплуатации от лица ML-специалиста
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
                <span className="text-gray-700">Vanilla Kubernetes</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-nova-primary to-nova-accent rounded-full mr-2"></div>
                <span className="text-gray-700">Nova AI</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>
            
            {journeySteps.map((step, index) => (
              <div key={index} className="mb-16 relative">
                {/* Stage title */}
                <div className="text-center mb-8">
                  <div className="inline-block bg-gradient-to-r from-nova-primary to-nova-accent p-1 rounded">
                    <div className="bg-white rounded px-6 py-2">
                      <h3 className="text-xl font-bold text-nova-primary">{step.stage}</h3>
                    </div>
                  </div>
                </div>
                
                {/* Comparison cards */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                  {/* Vanilla Kubernetes */}
                  <div className="glass-card p-6 border-l-4 border-gray-300">
                    <div className="flex items-start mb-4">
                      <div className="shrink-0 mr-3">
                        {step.vanilla.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-700 mb-1">Vanilla Kubernetes</h4>
                        <p className="text-gray-600">{step.vanilla.description}</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm mt-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{step.vanilla.effort}</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        <Clock size={14} className="inline mr-1" />
                        {step.vanilla.time}
                      </span>
                    </div>
                  </div>
                  
                  {/* Nova AI */}
                  <div className="glass-card p-6 border-l-4 border-nova-secondary">
                    <div className="flex items-start mb-4">
                      <div className="shrink-0 mr-3">
                        {step.nova.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-nova-primary mb-1">Nova AI</h4>
                        <p className="text-gray-600">{step.nova.description}</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm mt-4">
                      <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">{step.nova.effort}</span>
                      <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">
                        <Clock size={14} className="inline mr-1" />
                        {step.nova.time}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Arrow for next step */}
                {index < journeySteps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowRight className="text-nova-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center reveal">
          <div className="inline-block bg-gradient-to-r from-nova-primary to-nova-accent p-1 rounded">
            <div className="bg-white rounded p-4">
              <p className="text-lg font-semibold">
                <span className="gradient-text">Nova AI</span> меняет соотношение времени Data Scientist с <span className="text-red-500">20/80</span> на <span className="text-green-500">80/20</span><br />
                в пользу исследования данных и улучшения моделей вместо настройки инфраструктуры
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataScienceJourney;
