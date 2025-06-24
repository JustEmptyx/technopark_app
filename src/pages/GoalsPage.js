import React from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumbs from '../components/common/Breadcrumbs'; 
import "../styles/pages/goalsPage.css"
import investmentImage from '../images/goalsPage/investment-attraction.jpg';
import subcontractingImage from '../images/goalsPage/subcontracting.png';
import exportOrientedProductionImage from "../images/goalsPage/export-oriented-production.jpg"
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
        <div className="goals-inner-container inner-container">
          {showBreadcrumbs && <Breadcrumbs customItems={customBreadcrumbs} />}
          
          <div className="hero-content">
            <h1>Цели и задачи</h1>
          </div>

          <div className="buttons-container">
            <p className="slogan">Вместе к новым технологическим вершинам</p>
            <div className="button-group">
              <button className="button primary-button">Оставить заявку по нашим услугам →</button>
              <button className="button secondary-button">Подписаться на новостную рассылку →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Первый блок: Цели создания Ассоциации */}
      <section className="content-section first-block">
        <div className=" inner-container">
          <div className="two-column-container">
          <div className="left-column">
            <h2 className="gradient-text">Цели создания Ассоциации</h2>
          </div>
          <div className="right-column">
            <p>Сильнейшие технопарки и компании объединились вместе для создания уникальной Ассоциации развития бизнеса.</p>
          </div>
          </div>
        </div>
      </section>

      {/* Второй блок: Наши технологии. Наш успех */}
      <section className="content-section second-block">
        <div className="goals-inner-container inner-container">
          <div className="feature">
            <div className="features-grid">
              <div className="feature-item">
                <h3>Наши технологии. Наш успех.</h3>
              </div>
              <div className="feature-item">
                <img src="/icons/icon-infra.svg" alt="Инновационная инфраструктура" className="icon" />
                <div>
                  <h4>Инновационная инфраструктура</h4>
                  <p>Создаем мощную инновационную инфраструктуру, объединяя ресурсы и возможности технопарков и компаний для развития новых технологий и стартапов.</p>
                </div>
              </div>
              <div className="feature-item">
                <img src="/icons/icon-protection.svg" alt="Координация и защита" className="icon" />
                <div>
                  <h4>Координация и защита</h4>
                  <p>Обеспечиваем координацию действий участников Ассоциации, защищая их интересы на высоком уровне и создавая условия для успешного функционирования и роста.</p>
                </div>
              </div>
              <div className="feature-item">
                <img src="/icons/icon-exchange.svg" alt="Стимулирование обмена опытом" className="icon" />
                <div>
                  <h4>Стимулирование обмена опытом</h4>
                  <p>Способствуем обмену опытом между резидентами, организуя различные мероприятия, для повышения квалификации и внедрения лучших практик.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section third-block">
        <div className="inner-container">
          <div className="two-column-container">
            <div className="left-column">
              <h2>Основные задачи Ассоциации</h2>
            </div>
            <div className="right-column">
              <p>Объединяем усилия для совместного успеха, продвигаем инновации и развиваем технологии.</p>
            </div>
          </div>

          {/* Блоки контента */}
          <div className="content-grid">
            {/* Блок 1: Занимает всю строку */}
            <div className="content-item full-width">
              <div className="two-column-content">
                <div className="left-side">
                  <h3>Инвестиционная привлекательность</h3>
                  <p>Повышаем инвестиционную привлекательность через развитие инновационной инфраструктуры и предпринимательства.</p>
                </div>
                <div className="right-side">
                  <img src={investmentImage} alt="Инвестиционная привлекательность" />
                </div>
              </div>
            </div>

            {/* Блок 2: Занимает 2 строки левой колонки */}
            <div className="content-item large-left">
              <div className="two-line-content">
                <div className="text-section">
                  <h3>Субконтрактация</h3>
                  <p>Стимулируем субконтрактацию для формирования цепочек добавленной ценности в инновационной инфраструктуре.</p>
                </div>
                <div className="image-section">
                  <img src={subcontractingImage} alt="Субконтрактация" />
                </div>
              </div>
            </div>
            
            {/* Блок 4: Справа от блоков 2 и 3, только текст */}
            <div className="content-item right-text">
              <h3>Синергия производства</h3>
              <p>Обеспечиваем синергию через двустороннюю кооперацию, совместные проекты и обмен опытом.</p>
            </div>

            {/* Блок 5: Справа от блока 4, текст + изображение */}
            <div className="content-item large-right">
              <div className="two-line-content">
                <div className="text-section">
              <h3>Экспортно-ориентированные производства</h3>
              <p>Оптимизируем развитие высокотехнологичных производств, ориентированных на экспорт.</p>
                </div>
                <div className="image-section">
                  <img src={exportOrientedProductionImage} alt="Экспортно-ориентированные производства" />
                </div>
              </div>
            </div>

            {/* Блок 3: Под блоком 2, только текст */}
            <div className="content-item left-text">
              <h3>Экспертно-аналитическая поддержка</h3>
              <p>Обеспечиваем экспертно-аналитическую поддержку для принятия решений на основе лучшей практики проектов.</p>
            </div>

            {/* Блоки 6 и 7: Только текст */}
            <div className="content-item half-width">
              <h3>Продвижение интересов</h3>
              <p>Продвижение интересов членов ассоциации на региональном и международном уровнях.</p>
            </div>
            <div className="content-item half-width">
              <h3>Деловые контакты</h3>
              <p>Формирование деловых контактов с венчурными инвестициями и партнерами.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GoalsPage;