import React, { useEffect, useRef } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Briefcase } from 'lucide-react';

const FinancialModel = () => {
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

  const teamExpenses = [
    { role: 'Никита — Product Manager', monthly: 100, yearly: 1200 },
    { role: 'Миша — технический адвайзер (10% времени)', monthly: 25, yearly: 300 },
    { role: 'Инженер — внедрение и тест новых компонентов', monthly: 250, yearly: 3000 }
  ];

  const otherExpenses = [
    { role: 'Сейлз (5% времени, 6 чел)', monthly: 60, yearly: 720 },
    { role: 'Маркетинг (10% времени, 3 чел)', monthly: 60, yearly: 720 },
    { role: 'Product Sale (20% времени, 3 чел)', monthly: 120, yearly: 1440 },
    { role: 'Разработка + тесты и аналитика (10% времени)', monthly: 80, yearly: 960 },
    { role: 'Дополнительные расходы', monthly: '—', yearly: '3000–7000' }
  ];

  const totalExpensesMin = 11310;
  const totalExpensesMax = 15390;

  const dealValue = '1 – 1.5 млн руб';
  const totalCompanies = 400;
  const funnelForecast = 5;
  const avgServersPerCompany = 3;

  const minIncome = 15000;
  const maxIncome = 22500;

  const minProfit = -340;
  const maxProfit = 11160;

  return (
    <section id="financial" className="section bg-white" ref={sectionRef}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-nova-primary text-center mb-16 reveal">
          <Briefcase className="inline-block mr-2 mb-1" size={36} />
          Финансовая модель на 2025 год
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Expenses */}
          <div className="reveal">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-nova-primary mb-6 flex items-center">
                <TrendingDown className="mr-2 text-red-500" />
                Расходы (в тыс. руб)
              </h3>

              <div className="mb-8">
                <h4 className="text-lg font-bold text-nova-primary mb-4">Команда</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2">Категория</th>
                        <th className="text-right py-2">Месяц</th>
                        <th className="text-right py-2">Год</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamExpenses.map((expense, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-2">{expense.role}</td>
                          <td className="text-right py-2">{expense.monthly}</td>
                          <td className="text-right py-2">{expense.yearly}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-bold text-nova-primary mb-4">Прочие расходы (по времени и ставкам)</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2">Категория</th>
                        <th className="text-right py-2">Месяц</th>
                        <th className="text-right py-2">Год</th>
                      </tr>
                    </thead>
                    <tbody>
                      {otherExpenses.map((expense, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-2">{expense.role}</td>
                          <td className="text-right py-2">{expense.monthly}</td>
                          <td className="text-right py-2">{expense.yearly}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                <p className="text-lg font-bold text-red-700">
                  🔻 Итого расходов: {totalExpensesMin.toLocaleString()} – {totalExpensesMax.toLocaleString()} тыс. руб
                </p>
              </div>
            </div>
          </div>

          {/* Income */}
          <div className="reveal">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-nova-primary mb-6 flex items-center">
                <TrendingUp className="mr-2 text-green-500" />
                Доходы (прогноз)
              </h3>

              <div className="mb-8">
                <p className="font-semibold mb-2">Nova AI на 1 хост + Support:</p>
                <p className="mb-4 flex items-center">
                  <span className="bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full mr-2">📦</span>
                  {dealValue} руб за сервер
                </p>
              </div>

              <div className="mb-8">
                <p className="font-semibold mb-2">Коммерческий пайплайн:</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">🔸</span>
                    Всего компаний: {totalCompanies}
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">🔸</span>
                    Прогноз по воронке: {funnelForecast} клиентов
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">🔸</span>
                    Средняя потребность: {avgServersPerCompany} сервера на компанию
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <p className="font-semibold mb-2 flex items-center">
                  <TrendingUp className="mr-2 text-green-500" size={18} />
                  Прогноз дохода:
                </p>
                <p className="text-lg">
                  3 – 4.5 млн × 5 = {minIncome.toLocaleString()} – {maxIncome.toLocaleString()} тыс. руб
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <p className="text-lg font-bold text-green-700">
                  ✅ Финансовый результат 2025
                </p>
                <p>
                  Прибыль = Доход – Расход = от {minProfit.toLocaleString()} тыс. до +{maxProfit.toLocaleString()} тыс. руб
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialModel;
