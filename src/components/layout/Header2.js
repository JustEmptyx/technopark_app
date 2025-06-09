import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/components/layout/header.css';

const Header2 = () => {
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
        <div className="container header-top-container">
          <div className="logo-container">
            <Link to="/">
              <img src="/assets/images/logo.svg" alt="Ассоциация технопарков" className="logo" />
            </Link>
          </div>
        <div className="header-nav">
        <div className="container">
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
              <li className={location.pathname.includes('/contacts') ? 'active' : ''}>
                <Link to="/news">Контакты</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
          <div className="header-actions">
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-telegram-plane"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            
            <Link to="/contacts" className="contact-button">
              Связаться с нами <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;