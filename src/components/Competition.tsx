
import React, { useEffect, useRef } from 'react';

const Competition = () => {
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

  const competitors = [
    {
      name: 'Cloud.ru Evolution Stack AI-bundle',
      positioning: 'Частное/гибридное облако «под ключ»',
      stack: 'Kubernetes + GPU-VM, JupyterLab, ML Lifecycle, S3, GPU-aware scheduler',
      features: 'Фокус на RAG-воркфлоу, мультитенантность, реестр ПО в Минцифры',
      target: 'Корпорации / госсектор, анонс 04.2025'
    },
    {
      name: 'Softline Digital AiLine.MLOps',
      positioning: 'On-prem-дистрибутив + опция «комплект-ПАК»',
      stack: 'Kubernetes + MLflow, Feast, Airflow, Seldon',
      features: 'No-code витрина, 152-ФЗ ready, внесена в реестр ПО',
      target: 'Промышленность/энергетика, GA 2023 Q4'
    },
    {
      name: 'Neoflex Dognauts',
      positioning: 'Платформа полного ML-цикла',
      stack: 'Kubeflow pipelines, MLflow, Seldon, Prometheus',
      features: 'Open-source ядро, шаблоны мониторинга дрейфа, Helm-инсталлятор',
      target: 'Банки + промпредприятия; on-prem или Selectel GPU'
    },
    {
      name: 'Selectel Managed K8s + GPU',
      positioning: 'Single-tenant кластер в ДЦ Tier III',
      stack: 'Vanilla K8s 1.29 + NVIDIA A-/A100 GPU',
      features: 'Terraform API, MIG-партиционирование, 152-ФЗ сегмент',
      target: 'Mid-market, стартапы; PAYG модель'
    },
    {
      name: 'MWS (МТС Web Services) ML-Platform',
      positioning: 'Частный кластер + облачный marketplace',
      stack: 'K8s + Model Registry, CI/CD, GPU IaaS',
      features: 'Сборка автопайплайнов и каталог фреймворков',
      target: 'Ритейл, финансы, телеком; live c 2024 г.'
    },
    {
      name: 'Mirantis k0rdent AI / MKE 4',
      positioning: 'Коммерческая K8s-дистрибуция',
      stack: 'k0s control planes, GPU-scheduler, Lens IDE',
      features: 'Multi-cluster, FinOps-модуль, AI pipeline templates',
      target: 'Дистрибутируется через партнёров в РФ'
    },
    {
      name: 'Red Hat OpenShift AI',
      positioning: 'Enterprise-distro, в РФ доступно по OEM',
      stack: 'OpenShift 4.x + OpenShift AI add-on',
      features: 'Встроенный Kubeflow, ModelMesh, GPU Operator',
      target: 'Фокус на крупные индустриальные ЦОДы, санкцио-риски'
    }
  ];
  
  const advantages = [
    'связка с zvirt в рамках Nova Containers edition',
    'поставка ПАК вместе с железом от нейротех',
    'имеем в себе другие компоненты, которые внедрили за последние два года'
  ];

  return (
    <section id="competitors" className="section bg-white" ref={sectionRef}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-nova-primary text-center mb-16 reveal">Конкуренция</h2>
        
        <div className="mb-16 reveal">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-nova-primary text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Платформа</th>
                  <th className="py-3 px-4 text-left">Позиционирование</th>
                  <th className="py-3 px-4 text-left">Особенности для AI / ML</th>
                  <th className="py-3 px-4 text-left">ЦА, статус</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 border-b">{competitor.name}</td>
                    <td className="py-3 px-4 border-b">{competitor.positioning}</td>
                    <td className="py-3 px-4 border-b">{competitor.features}</td>
                    <td className="py-3 px-4 border-b">{competitor.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="glass-card p-8 reveal">
          <h3 className="text-2xl font-bold text-nova-primary mb-8">Как мы отстраиваемся от конкурентов:</h3>
          <ul className="space-y-4">
            {advantages.map((advantage, index) => (
              <li key={index} className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-nova-accent/10 rounded-full mr-4">
                  <span className="text-lg font-bold text-nova-accent">{index + 1}</span>
                </div>
                <div className="text-gray-700">{advantage}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Competition;
