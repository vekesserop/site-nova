import React, { useEffect, useRef } from 'react';
import { ArrowRight, Clock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const CustomerJourney = () => {
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
      stage: "Проектирование",
      vanilla: {
        description: "Сверяет версии ОС, подбирает драйверы GPU/NIC, рассчитывает сетевые CIDR, пишет HLD.",
        icon: <Clock className="text-amber-500" />,
        effort: "Высокие трудозатраты",
        time: "1-2 недели"
      },
      nova: {
        description: "Выбирает провайдера (bare-metal, oVirt/zVirt, vSphere) и подходящую «ред-ос» → получает готовый BOM.",
        icon: <CheckCircle className="text-green-500" />,
        effort: "Минимальные усилия",
        time: "1-2 дня"
      }
    },
    {
      stage: "Развёртывание базового кластера",
      vanilla: {
        description: "Устанавливает ОС, containerd, коллекторы логов, Calico/Cilium, вручную прописывает SSL, PKI.",
        icon: <AlertTriangle className="text-amber-500" />,
        effort: "Высокая сложность",
        time: "5-10 дней"
      },
      nova: {
        description: "Нажимает «Create Cluster» в Nova Console → автоскрипт ставит Kubernetes, CNI, PKI, Secrets Store.",
        icon: <CheckCircle className="text-green-500" />,
        effort: "Автоматизировано",
        time: "< 2 часов"
      }
    },
    {
      stage: "Подключение драйверов/сториджа",
      vanilla: {
        description: "Добавляет NVIDIA GPU Operator, Network Operator, Longhorn/MinIO, чинит версии CUDA; каждая несовместимость — дебаг.",
        icon: <XCircle className="text-red-500" />,
        effort: "Высокий риск ошибок",
        time: "3-7 дней"
      },
      nova: {
        description: "GPU- и Network-операторы, CSI-драйверы, Longhorn + MinIO уже проставлены; остаётся выбрать размер пулов.",
        icon: <CheckCircle className="text-green-500" />,
        effort: "Предустановлено",
        time: "2-3 часа"
      }
    },
    {
      stage: "Набор DevOps-сервисов",
      vanilla: {
        description: "Поднимает Gitea/Flux, Velero, DNS, Prometheus-стек, настраивает alert-rules; тратит недели на согласование безопасниками.",
        icon: <AlertTriangle className="text-amber-500" />,
        effort: "Требует экспертизы",
        time: "1-3 недели"
      },
      nova: {
        description: "Все сервисы (Gitea, FluxCD, Velero, Nova DNS, Thanos, AlertManager, NeuVector) установлены по дефолту; только добавить репозитории.",
        icon: <CheckCircle className="text-green-500" />,
        effort: "Готовая экосистема",
        time: "1 день"
      }
    },
    {
      stage: "Эксплуатация",
      vanilla: {
        description: "Патчи ядра, K8s upgrade, ручной care о Thanos и GPU-операторе; on-call 24/7.",
        icon: <XCircle className="text-red-500" />,
        effort: "Постоянная нагрузка",
        time: "Непрерывно"
      },
      nova: {
        description: "Обновления кластерных сервисов через Nova Console (canary-режим), метрики SLA собраны сразу; on-call ≈ уровень приложений.",
        icon: <CheckCircle className="text-green-500" />,
        effort: "Управляемые обновления",
        time: "По расписанию"
      }
    },
    {
      stage: "Финиш",
      vanilla: {
        description: "Производственное состояние ≈ 4-6 недель, высокий bus-factor.",
        icon: <AlertTriangle className="text-amber-500" />,
        effort: "Высокий bus-factor",
        time: "4-6 недель"
      },
      nova: {
        description: "Готовый HA-кластер ≈ 1 день, DevOps фокусируется на CI/CD продуктов.",
        icon: <CheckCircle className="text-green-500" />,
        effort: "Фокус на бизнес-задачах",
        time: "1 день"
      }
    }
  ];

  return (
    <section id="journey" className="section bg-nova-light" ref={sectionRef}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal">
          <span className="gradient-text">Customer Journey Map DevOps-инженера</span>
          <span className="block text-2xl md:text-3xl mt-2 text-nova-primary">Vanilla Kubernetes vs Nova AI</span>
        </h2>

        <div className="mb-8 reveal">
          <p className="text-center text-gray-700 mb-8">
            Сравнение пути настройки и эксплуатации от лица владельца инфраструктуры
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
                <span className="gradient-text">Nova AI</span> сокращает время развертывания с <span className="text-red-500">4-6 недель</span> до <span className="text-green-500">1 дня</span>,<br />
                снижая нагрузку на DevOps-инженера и позволяя ему сосредоточиться на бизнес-задачах
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerJourney;
