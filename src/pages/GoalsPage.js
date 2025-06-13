import React from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumbs from '../components/common/Breadcrumbs'; 
import "../styles/pages/goalsPage.css"

const GoalsPage = ({ 
  children, 
  showBreadcrumbs = true, 
  customBreadcrumbs,
  transparentHeader = false
}) => {
  return (
    <Layout>
      <section className="hero-section">
        <div className="hero-background-overlay"></div>
        <div className="inner-container">
          {showBreadcrumbs && <Breadcrumbs customItems={customBreadcrumbs} />}
          
          <div className="hero-content">
            <h1>Цели и задачи</h1>
            <p className="slogan">Вместе к новым технологическим вершинам</p>
          </div>

          <div className="buttons-container">
            <button className="button primary-button">Оставить заявку по нашим услугам →</button>
            <button className="button secondary-button">Подписаться на новостную рассылку →</button>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="left-column">
          <h2>Цели создания Ассоциации</h2>
          <p>Сильнейшие технопарки и компании объединились вместе для создания уникальной Ассоциации развития бизнеса.</p>
        </div>
        <div className="right-column">
          <div className="feature">
            <h3>Наши технологии. Наш успех.</h3>
            <div className="icon-text">
              <img src="/icons/icon-infra.svg" alt="Инновационная инфраструктура" className="icon" />
              <div>
                <h4>Инновационная инфраструктура</h4>
                <p>Создаем мощную инновационную инфраструктуру, объединяя ресурсы и возможности технопарков и компаний для развития новых технологий и стартапов.</p>
              </div>
            </div>
            <div className="icon-text">
              <img src="/icons/icon-protection.svg" alt="Координация и защита" className="icon" />
              <div>
                <h4>Координация и защита</h4>
                <p>Обеспечиваем координацию действий участников Ассоциации, защищая их интересы на высоком уровне и создавая условия для успешного функционирования и роста.</p>
              </div>
            </div>
            <div className="icon-text">
              <img src="/icons/icon-exchange.svg" alt="Стимулирование обмена опытом" className="icon" />
              <div>
                <h4>Стимулирование обмена опытом</h4>
                <p>Способствуем обмену опытом между резидентами, организуя различные мероприятия, для повышения квалификации и внедрения лучших практик.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GoalsPage;