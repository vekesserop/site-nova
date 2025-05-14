
import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const Solution = () => {
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

  const advantages = [
    'Поддержка GPU (NVIDIA GPU Operator, NVIDIA Network Operator).',
    'Дробление GPU на части: проброс их в pod\'ы (MIG, Time Slicing).',
    'Распределенный инференс: с autoscaling (KubeRay, vLLM).',
    'Выполнение задач: распределенно с autoscaling.',
    'ML окружение: для организации полного цикла из коробки (MLflow, AirFlow, MinIO, KubeRay, JupyterHub).'
  ];

  const benefits = [
    'Сокращение времени на поддержку платформы в 5 раз',
    'Повышение утилизации ресурсов кластера до 90-95%.',
    'Сокращение CAPEX на 20-30%.',
    'Сокращение времени на отладку и воспроизведение экспериментов на 50%.'
  ];

  // Nova Container Platform key features
  const ncpFeatures = [
    '«Все в одном»: on-premise Kubernetes-стек со встроенным DevOps, безопасностью и высокодоступными сервисами',
    'Сокращение Time-to-Market: за счёт готовых интеграций CI/CD, мониторинга и логики автоматического масштабирования',
    'Упрощённая безопасность и соответствие: централизованный Secret Manager, PKI, RBAC, аудит, сканирование уязвимостей и шифрование по ГОСТ/152-ФЗ',
    'Гибкость развертывания: поддержка bare-metal, oVirt/zVirt или VMware vSphere, на любых «отечественных» ОС (RED OS, Astra Linux, RHEL-based, AlmaLinux)',
    'Высокая отказоустойчивость и масштабируемость: HPA/VPA, geo-distributed deployment, резервное копирование Velero',
    'Компоненты ML/AI: Бесшовное управление GPU-драйверами, масштабируемое распределённое обучение и инференс, автоматизация полного цикла ML-разработки и эксплуатации'
  ];

  // Tech stack categories and components
  const techStack = [
    {
      category: "Platform Services",
      sections: [
        {
          title: "Monitoring",
          components: ["Prometheus", "Grafana", "Alert Manager", "Thanos Query"]
        },
        {
          title: "Logs",
          components: ["Logging Operator", "OpenSearch", "Fluentd"]
        },
        {
          title: "Security",
          components: ["NeuVector", "Secrets Webhook", "CertManager"]
        },
        {
          title: "Conf. Management",
          components: ["Gitea", "FluxCD", "Automation tools"]
        },
        {
          title: "DNS",
          components: ["Nova DNS"]
        },
        {
          title: "UI",
          components: ["Nova Console"]
        },
        {
          title: "Backup",
          components: ["Velero"]
        },
        {
          title: "Drivers",
          components: ["NVIDIA GPU Operator", "NVIDIA Network Operator"]
        },
        {
          title: "ML-services",
          components: ["KubeRay", "MLflow", "Airflow", "JupyterHub"]
        }
      ]
    },
    {
      category: "Kubernetes Cluster",
      sections: [
        {
          title: "Container Runtime",
          components: ["containerd"]
        },
        {
          title: "Networking",
          components: ["Calico CNI", "Cilium CNI"]
        },
        {
          title: "Kubernetes Services",
          components: ["Scheduler", "Descheduler", "Controller Manager", "API Server", "etcd"]
        },
        {
          title: "Kubernetes Store",
          components: ["Longhorn", "MinIO", "Secrets Store CSI", "Provider CSI", "Local Path CSI"]
        },
        {
          title: "Security",
          components: ["Secrets Manager", "CSI", "PKI", "OAuth"]
        },
        {
          title: "Metrics",
          components: ["Metrics Server", "Prometheus Adapter"]
        },
        {
          title: "Scaling",
          components: ["VPA", "HPA"]
        }
      ]
    },
    {
      category: "Operating systems",
      flat: true,
      components: ["RED OS", "Astra Linux", "RHEL-based", "AlmaLinux"]
    },
    {
      category: "Infrastructure Providers",
      flat: true,
      components: ["Bare Metal", "oVirt", "zVirt", "VMware vSphere"]
    }
  ];

  return (
    <section id="solution" className="section bg-white" ref={sectionRef}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-nova-primary text-center mb-16 reveal">Исходное решение: Nova Container Platform</h2>

        {/* Исходное решение - Nova Container Platform */}
        <div className="mb-24 reveal">
          <div className="glass-card p-8">
            <ul className="space-y-4">
              {ncpFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="shrink-0 w-6 h-6 mr-2 text-green-500" />
                  <span className="text-gray-700">
                    {feature.split(':').map((part, i) => {
                      if (i === 0 && feature.includes(':')) {
                        return <strong key={i}>{part}:</strong>;
                      } else {
                        return <span key={i}>{part}</span>;
                      }
                    })}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Технологический стек */}
        <div className="mb-24 reveal">
          <h3 className="text-2xl font-bold text-nova-primary mb-8 text-center">Технологический стек</h3>
          <div className="bg-gray-900 rounded-xl p-8 text-white">
            <div className="grid gap-8">
              {techStack.map((stackCategory, catIndex) => (
                <div key={catIndex} className={`grid ${stackCategory.flat ? 'grid-cols-1' : 'md:grid-cols-7'} gap-4`}>
                  <div className={`${stackCategory.flat ? 'col-span-full' : 'md:col-span-1'} bg-gradient-to-b from-blue-900 to-blue-800 rounded-lg p-4 flex items-center justify-center`}>
                    <h5 className="text-lg font-bold text-center">{stackCategory.category}</h5>
                  </div>

                  {stackCategory.flat ? (
                    <div className="col-span-full grid grid-cols-2 md:grid-cols-4 gap-4">
                      {stackCategory.components.map((component, compIndex) => (
                        <div key={compIndex} className="border border-teal-500 rounded p-3 text-center">
                          {component}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-6 gap-4">
                      {stackCategory.sections.map((section, secIndex) => (
                        <div key={secIndex} className="flex flex-col gap-2">
                          <h6 className="font-semibold text-center">{section.title}</h6>
                          <div className="flex flex-col gap-2">
                            {section.components.map((component, compIndex) => {
                              let borderColor = "border-blue-600";
                              let bgColor = "bg-blue-950";

                              // Apply red styling for components in Drivers and ML-services sections
                              if (section.title === "Drivers" || section.title === "ML-services") {
                                borderColor = "border-red-500";
                                bgColor = "bg-red-950";
                              }

                              // Apply red styling only for MinIO in Kubernetes Store section
                              if (section.title === "Kubernetes Store" && component === "MinIO") {
                                borderColor = "border-red-500";
                                bgColor = "bg-red-950";
                              }

                              return (
                                <div key={compIndex} className={`border ${borderColor} rounded p-2 text-center ${bgColor}`}>
                                  {component}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-gray-300">
              Все компоненты собраны «в коробке»: от уровня гипервизора и ОС до готовых DevOps-, мониторинг- и security-модулей.
            </p>
          </div>
        </div>

        {/* Transition note to Nova AI */}
        <div className="mb-16 text-center reveal">
          <div className="inline-block bg-gradient-to-r from-nova-primary to-nova-accent p-1 rounded">
            <div className="bg-white rounded p-4">
              <p className="text-lg font-semibold">
                <span className="gradient-text">Nova AI</span> — это редакция Nova Container Platform,
                дополненная специализированными инструментами для задач ML/AI
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-nova-primary mb-8 reveal">Новая функциональность Nova AI:</h3>
            <div className="mb-8 reveal">
              <ul className="space-y-4">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="shrink-0 w-6 h-6 mr-2 text-green-500" />
                    <span className="text-gray-700">
                      {advantage.split('(').map((part, i, arr) => {
                        if (i === 0) {
                          return (
                            <React.Fragment key={i}>
                              <strong>{part}</strong>
                              {arr.length > 1 ? '(' : ''}
                            </React.Fragment>
                          );
                        } else {
                          return <span key={i}>{part}</span>;
                        }
                      })}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 mt-6">
                <span className="font-semibold">Кому интересно:</span> Газпром Информ, Ингосстрах, Кувейт.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 reveal">
            <h3 className="text-2xl font-bold text-nova-primary mb-8">Бизнес эффект</h3>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mr-4">
                    <span className="text-xl font-bold text-green-600">{index + 1}</span>
                  </div>
                  <div className="text-gray-700">
                    {benefit.split(' ').slice(0, 3).join(' ')}
                    <strong> {benefit.split(' ').slice(3).join(' ')}</strong>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-6">* В сравнении с не контейнерной инфраструктурой</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
