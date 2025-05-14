
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Решение', href: '#solution' },
    { name: 'Преимущества', href: '#benefits' },
    { name: 'Рынок', href: '#market' },
    { name: 'Конкуренты', href: '#competitors' },
    { name: 'Стратегия', href: '#strategy' },
    { name: 'DevOps CJM', href: '#journey' },
    { name: 'MLOps CJM', href: '#mlops-journey' },
    { name: 'DS CJM', href: '#ds-journey' },
    { name: 'Финансы', href: '#financial' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-nova-primary">Nova AI</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-nova-primary hover:text-nova-secondary transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gradient-to-r from-nova-primary to-nova-secondary text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all"
          >
            Связаться
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-nova-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white p-4 border-t">
          <div className="flex flex-col space-y-4">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-nova-primary hover:text-nova-secondary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-nova-primary to-nova-secondary text-white px-6 py-2 rounded-full font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Связаться
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
