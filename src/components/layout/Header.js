import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/components/layout/header.css';

const Header = () => {
  const [transparent, setTransparent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${transparent ? 'transparent' : 'solid'}`}>
      <div className="header-top">
        <div className="inner-container header-top-container">
          <div className="logo-container">
            <Link to="/">
              <img src="/assets/images/Asstech_logo.svg" alt="Ассоциация технопарков" className="logo" />
            </Link>
            <div className="logo-container-header">
              <h3>Ассоциация технопарков</h3>
            </div>
          </div>

          <div className="header-actions-right">
            <Link to="/contacts" className="contact-button">
              Связаться с нами <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="header-nav">
        <div className="inner-container header-nav-container">
          <nav className="main-navigation">
            <ul className="nav-menu">
              <li className={location.pathname.includes('/goals') ? 'active' : ''}>
                <Link to="/goals">Цели и задачи</Link>
              </li>
              <li className={location.pathname.includes('/founders') ? 'active' : ''}>
                <Link to="/founders">Учредители</Link>
              </li>
              <li className={location.pathname.includes('/about') ? 'active' : ''}>
                <Link to="/about">О нас</Link>
              </li>
              <li className={location.pathname.includes('/services') ? 'active' : ''}>
                <Link to="/services">Услуги</Link>
              </li>
              <li className={location.pathname.includes('/membership') ? 'active' : ''}>
                <Link to="/membership">Условия вступления</Link>
              </li>
              <li className={location.pathname.includes('/news') ? 'active' : ''}>
                <Link to="/news">Новости</Link>
              </li>
            </ul>
          </nav>

          {/* Социальные сети в правой части нижней секции */}
          <div className="social-links">
            <a href="https://instagram.com"  target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://telegram.org"  target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a href="https://youtube.com"  target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;