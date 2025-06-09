import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/layout/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-logo-section">
              <Link to="/" className="footer-logo-link">
                <img src="/assets/images/logo.svg" alt="Ассоциация технопарков" className="footer-logo" />
                <div className="footer-logo-text">
                  <div className="footer-logo-title">Ассоциация</div>
                  <div className="footer-logo-subtitle">технопарков</div>
                </div>
              </Link>
            </div>
            
            <div className="footer-links-section">
              <h3 className="footer-heading">Сайты учредителей</h3>
              <div className="footer-links-grid">
                <ul className="footer-links">
                  <li><a href="https://example.com" target="_blank" rel="noopener noreferrer">Минский городской технопарк</a></li>
                  <li><a href="https://example.com" target="_blank" rel="noopener noreferrer">Технопарк «Коралл»</a></li>
                </ul>
                <ul className="footer-links">
                  <li><a href="https://example.com" target="_blank" rel="noopener noreferrer">Правовая группа «Закон и порядок»</a></li>
                  <li><a href="https://example.com" target="_blank" rel="noopener noreferrer">ООО «Регнум»</a></li>
                </ul>
              </div>
              <ul className="footer-links">
                <li><a href="https://example.com" target="_blank" rel="noopener noreferrer">Технологический парк Могилев</a></li>
              </ul>
            </div>

            <div className="footer-contact-section">
              <h3 className="footer-heading">Контакты</h3>
              <ul className="footer-contacts">
                <li><a href="tel:+375291481425">+375 (29) 148-14-25</a></li>
                <li><a href="mailto:techparks@mgtp.by">techparks@mgtp.by</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-info">
              <div className="footer-social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <i className="fab fa-telegram-plane"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="footer-address">
                пр-т Партизанский, 8/8, офис 1
              </div>
            </div>
            
            <div className="footer-cta">
              <div className="cta-text">Заинтересованы в наших услугах?</div>
              <Link to="/contacts" className="cta-button">
                Связаться с нами <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-copyright">
        <div className="container">
          <div className="copyright-content">
            <div className="copyright-text">
              © Copyright {currentYear} Technoparks Association. All Rights Reserved.
            </div>
            <div className="footer-policies">
              <Link to="/terms" className="policy-link">Terms of service</Link>
              <Link to="/privacy" className="policy-link">Privacy policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;