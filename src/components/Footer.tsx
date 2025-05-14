
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nova-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nova AI</h3>
            <p className="text-gray-300">
              Преднастроенная kubernetes-платформа для задач обучения и инференса
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@nova-ai.ru</li>
              <li>Телефон: +7 (XXX) XXX-XX-XX</li>
              <li>Адрес: г. Москва, ул. Примерная, д. 123</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="#solution" className="text-gray-300 hover:text-white transition-colors">Решение</a></li>
              <li><a href="#market" className="text-gray-300 hover:text-white transition-colors">Рынок</a></li>
              <li><a href="#competitors" className="text-gray-300 hover:text-white transition-colors">Конкуренты</a></li>
              <li><a href="#strategy" className="text-gray-300 hover:text-white transition-colors">Стратегия</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Nova AI. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
