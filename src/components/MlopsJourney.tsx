import React, { useEffect, useRef } from 'react';
import { ArrowRight, Clock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const MlopsJourney = () => {
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
      stage: "Сбор стека",
      vanilla: {
        description: "Ищет совместимые версии Kubeflow, MLflow, Airflow, KubeRay; пишет Helm-чарты, чинит CRD-конфликты.",
        icon: <AlertTriangle className="text-amber-500" />,
        effort: "Высокая сложность",
        time: "1-2 недели"
      },
      nova: {
        description: "Все ML-сервисы предустановлены, CRD валидированы; достаточно объявить namespace проекта.",
        icon: <CheckCircle className="text-green-500" />,
        effort: "Готовый стек",
        time: "1 день"
      }
    },
    {
      stage: "Хранилище данных/артефактов",
      vanilla: {
        description: "Настраивает MinIO + S3-policy, Longhorn, CSI-snapshots; вручную подключает Secrets Store CSI.",
        icon: <XCircle className="text-red-500" />,
        effort: "Ручная настройка",
        time: "3-5 дней"
      },
      nova: {
        description: "MinIO, Longhorn, CSI-Snapshots активны; политика S3 pre-configured, Secrets Manager интегрирован.",
        icon: <CheckCircle className="text-green-500" />,
        effort: "Предустановлено",
        time: "< 1 дня"
      }
    },
    {
      stage: "Оркестрация моделей",
      vanilla: {
        description: "Делает собственный ingress, пишет YAML для KFServing/Seldon, настраивает Prometheus Adapter и HPA.",
        icon: <XCircle className="text-red-500" />,
        effort: "Требует экспертизы",
        time: "1-2 недели"
      },
      nova: {
        description: "Готовые шаблоны deployment + autoscaling; метрики моделей попадают в Thanos без дополнительных exporters.",
        icon: <CheckCircle className="text-green-500" />,
        effort: "Готовые шаблоны",
        time: "1-2 дня"
      }
    },
    {
      stage: "Мониторинг и алерты",
      vanilla: {
        description: "Создаёт dashboards, rules на дрейф, настраивает экспорт GPU-метрик; требует доступа в Grafana/Prometheus.",
        icon: <AlertTriangle className="text-amber-500" />,
        effort: "Ручная настройка",
        time: "1 неделя"
      },
      nova: {
        description: "Дашборды для GPU-util, jobs, моделей подключены; alert-templates включены (доступ по Nova RBAC).",
        icon: <CheckCircle className="text-green-500" />,
        effort: "Предустановлено",
        time: "< 1 дня"
      }
    },
    {
      stage: "CI/CD",
      vanilla: {
        description: "Строит пайплайны Git-→Flux→Helm, добавляет секреты Docker-Registry; 1-2 недели настройки.",
        icon: <AlertTriangle className="text-amber-500" />,
        effort: "Сложная интеграция",
        time: "1-2 недели"
      },
      nova: {
        description: "FluxCD и Gitea интегрированы; pipeline-шаблоны для MLflow Registry развернуты; push-to-main → автодеплой.",
        icon: <CheckCircle className="text-green-500" />,
        effort: "Готовые пайплайны",
        time: "1 день"
      }
    },
    {
      stage: "Финиш",
      vanilla: {
        description: "Борется с несовместимостями, тратит 60-70 % времени на инфраструктуру.",
        icon: <XCircle className="text-red-500" />,
        effort: "Фокус на инфраструктуре",
        time: "Постоянно"
      },
      nova: {
        description: "Сразу концентрируется на политике дрифта, тестах качества и cost-оптимизации.",
        icon: <CheckCircle className="text-green-500" />,
        effort: "Фокус на ML-задачах",
        time: "С первого дня"
      }
    }
  ];

  return (
    <section id="mlops-journey" className="section bg-white" ref={sectionRef}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal">
          <span className="gradient-text">Customer Journey Map MLOps-инженера</span>
          <span className="block text-2xl md:text-3xl mt-2 text-nova-primary">Vanilla Kubernetes vs Nova AI</span>
        </h2>
        
        <div className="mb-8 reveal">
          <p className="text-center text-gray-700 mb-8">
            Сравнение пути настройки и эксплуатации от лица владельца ML-конвейеров
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
                <span className="gradient-text">Nova AI</span> позволяет MLOps-инженеру <span className="text-green-500">сократить время на инфраструктуру на 60-70%</span><br />
                и сосредоточиться на оптимизации ML-моделей и бизнес-метриках
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MlopsJourney;
