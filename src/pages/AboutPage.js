import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumbs from '../components/common/Breadcrumbs'; 
import "../styles/pages/aboutPage.css"
import investmentImage from '../images/goalsPage/investment-attraction.jpg';
import subcontractingImage from '../images/goalsPage/subcontracting.png';
import aboutFoundationImage from "../images/aboutPage/about-foundation-image.png"
import aboutBackgroundImage from "../images/aboutPage/about-background-image.png"
import GradientIcon from '../components/common/GradientIcon';
// import iconInfra from "../icons/icon-infra.svg"
import iconInfra from '../icons/icon-infra.js';
import ContactForm from '../components/common/ContactsForm';

const AboutPage = ({ 
  children, 
  showBreadcrumbs = true, 
  customBreadcrumbs,
  transparentHeader = false
}) => {
  return (
    <Layout>
      <section className="aboutPage-hero-section">
        <div className="aboutPage-hero-background-overlay"></div>
        <div className="aboutPage-inner-container inner-container">
          {showBreadcrumbs && <Breadcrumbs customItems={customBreadcrumbs} />}
          
          <div className="aboutPage-hero-content">
            <h1>О бренде Ассоциации</h1>
          </div>

          <div className="aboutPage-buttons-container">
            <p className="aboutPage-slogan">Вместе к новым технологическим вершинам</p>
            <div className="aboutPage-button-group">
              <button className="aboutPage-button aboutPage-primary-button">Оставить заявку по нашим услугам →</button>
              <button className="aboutPage-button aboutPage-secondary-button">Подписаться на новостную рассылку →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Первый блок: Цели создания Ассоциации */}
      <section className="aboutPage-content-section aboutPage-first-block inner-container">
        <div className="aboutPage-first-block-left-section">
          <h2>Хотите стать резидентом Ассоциации?</h2>
          <p>Оставляйте заявку и мы свяжемся с Вами в ближайшее время!</p>
        </div>
        <div className="aboutPage-first-block-right-section">
          <button className="right-section-apply-button">Перейти к заявке</button>
        </div>
      </section>

      {/* Второй блок: Наши технологии. Наш успех */}
      <section className="aboutPage-content-section aboutPage-second-block ">
        <div className="aboutPage-inner-container inner-container">
          <h2>
            О создании Ассоциации
          </h2>
          <div className="aboutPage-second-block-grid">
            <div className="aboutPage-second-block-left-block">
              <p>
                Республиканская Ассоциация технопарков и субъектов инновационной деятельности создана 7 февраля 2025 года. Её главная цель — координация деятельности и защита интересов резидентов на республиканском и региональном уровнях.
              </p>
              <Link to="/goals" className="link">Цели и задачи создания Ассоциации</Link>
            </div>
            <div className="aboutPage-second-block-right-block">
              <img src={aboutFoundationImage} alt="Экспортно-ориентированные производства" />
            </div>
          </div>
          <div className="aboutPage-our-members">
            <div className="aboutPage-second-block-our-members-left-block">
              <h3>Наши участники</h3>
            </div>
            <div className="aboutPage-second-block-our-members-right-block">
              <div className="aboutPage-our-members-grid">
                <div className="aboutPage-our-members-item">
                  {/* <img src={iconInfra} alt =""/> */}
                  {/* <GradientIcon id="infra" width={50} height={50} /> */}

                  <div>
                    <h4>Технопарки</h4>
                    <p>Ключевые центры инноваций, объединяют компании, предоставляя необходимые ресурсы и поддержку.</p>
                  </div>
                </div>
                <div className="aboutPage-our-members-item">
                  <img src="../icons/icon-protection.svg" alt="Координация и защита" className="icon" />
                  <div>
                    <h4>Резиденты технопарков</h4>
                    <p>Компании, разрабатывающие передовые продукты и решения для рынка с поддержкой технопарка.</p>
                  </div>
                </div>
                <div className="aboutPage-our-members-item">
                  <img src="../icons/icon-exchange.svg" alt="Стимулирование обмена опытом" className="icon" />
                  <div>
                    <h4>Инновационно активные предприятия</h4>
                    <p>Передовые предприятия, стремящиеся к развитию новых технологий
и улучшению процессов.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutPage-main-directions">
            <div className="aboutPage-main-directions-grid">
              <div className="aboutPage-main-directions-left-block">
                <h1>Основные направления</h1>
              </div>
              <div className="aboutPage-main-directions-right-block">
                <div className="aboutPage-main-directions-right-block-grid">
                  <div className="aboutPage-main-directions-right-block-grid-item">
                    <h2>Взаимодействие и кооперация</h2>
                    <p>Ассоциация способствует взаимодействию между технопарками и их резидентами, создавая платформы для совместной работы и обмена ресурсами, что усиливает инновационный потенциал страны.</p>
                    <Link to="/goals" className="link">Узнать подробнее</Link>
                  </div>
                  <div className="aboutPage-main-directions-right-block-grid-item">
                    <h2>Повышение уровня квалификации</h2>
                    <p>Обучающие программы и семинары, направленные на повышение квалификации специалистов, способствуя развитию компетенций в области инновационных технологий.</p>
                    <Link to="/goals" className="link">Узнать подробнее</Link>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutPage-content-section aboutPage-third-block">
        <div className="aboutPage-image-block">
          <img src={aboutBackgroundImage} alt="Экспортно-ориентированные производства" className="aboutPage-image"/>
        </div>
      </section>

      <section>
        <div className="aboutPage-offers">
          <div className="aboutPage-offers-grid inner-container">
            <div className="aboutPage-offers-grid-item">
              <h3>Стимулирование обмена опыта</h3>
              <p>Ассоциация организует мероприятия для обмена опытом между участниками, что позволяет делиться успешными практиками и накапливать знания в сфере инновационного развития.</p>
              <Link to="/experience" className="link">Читать подробнее</Link>
            </div>
            <div className="aboutPage-offers-grid-item">
              <h3>Представление интересов резидентов</h3>
              <p>Ассоциация активно защищает интересы резидентов технопарков, представляя их позиции в государственных органах и других институтах, способствует улучшению условий для бизнеса.</p>
              <Link to="/interests" className="link">Читать подробнее</Link>
            </div>
            <div className="aboutPage-offers-grid-item">
              <h3>Развитие нормативно-правовой базы</h3>
              <p>Ассоциация работает над совершенствованием нормативно-правовой базы, создает условия для более эффективного функционирования технопарков и поддержки резидентов.</p>
              <Link to="/regulation" className="link">Читать подробнее</Link>
            </div>
            <div className="aboutPage-offers-grid-item">
              <h3>Содействие привлечению инвестиций</h3>
              <p>Ассоциация активно ищет возможности
для привлечения инвестиций в проекты резидентов технопарков, создает привлекательные условия для инвесторов
и стартапов.</p>
              <Link to="/investments" className="link">Читать подробнее</Link>
            </div>
            <div className="aboutPage-offers-grid-item">
              <h3>Содействие трансферу технологий</h3>
              <p>Поддержка трансфера технологий между научными учреждениями и бизнесом, способствуя внедрению новых разработок
и повышению конкурентоспособности компаний.</p>
              <Link to="/technology-transfer" className="link">Читать подробнее</Link>
            </div>
            <div className="aboutPage-offers-grid-item">
              <h3>Выход на мировые рынки</h3>
              <p>Ассоциация помогает резидентам
выйти на международные рынки, предоставляя доступ к информации, ресурсам, партнёрским сетям и лучшим практикам в бизнесе.</p>
              <Link to="/global-markets" className="link">Читать подробнее</Link>
            </div>
          </div>
        </div>
      </section>
      

      <section className="content-section third-block">
        <div className="inner-container">
          <div className="two-column-container">
            <div className="left-column">
              <div className="text-section-header-block3 gradient-text-b2">
                <h2>Основные задачи Ассоциации</h2>
              </div>
            </div>
            <div className="right-column">
              <div className="text-section-content-block3">
                <p>Объединяем усилия для совместного успеха, продвигаем инновации и развиваем технологии.</p>
              </div>
            </div>
          </div>

          {/* Блоки контента */}
          <div className="content-grid">
            {/* Блок 1: Занимает всю строку */}
            <div className="content-item full-width">
              <div className="two-column-content">
                <div className="left-side">
                  <div className="text-section-header-block3">
                    <h3>Инвестиционная привлекательность</h3>
                  </div>
                  <div className="text-section-content-block3">
                    <p>Повышаем инвестиционную привлекательность через развитие инновационной инфраструктуры и предпринимательства.</p>
                  </div>
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
                  <div className="text-section-header-block3">
                    <h3>Субконтрактация</h3>
                  </div>
                  <div className="text-section-content-block3">
                    <p>Стимулируем субконтрактацию для формирования цепочек добавленной ценности в инновационной инфраструктуре.</p>
                  </div>
                </div>
                <div className="image-section">
                  <img src={subcontractingImage} alt="Субконтрактация" />
                </div>
              </div>
            </div>
            
            {/* Блок 4: Справа от блоков 2 и 3, только текст */}
            <div className="content-item right-text">
              <div className="text-section-header-block3">
                <h3>Синергия производства</h3>
              </div>
              <div className="text-section-content-block3">
                <p>Обеспечиваем синергию через двустороннюю кооперацию, совместные проекты и обмен опытом.</p>
              </div>
            </div>

            {/* Блок 5: Справа от блока 4, текст + изображение */}
            <div className="content-item large-right">
              <div className="two-line-content">
                <div className="text-section">
                  <div className="text-section-header-block3">
                    <h3>Экспортно-ориентированные производства</h3>
                  </div>
                  <div className="text-section-content-block3">
                    <p>Оптимизируем развитие высокотехнологичных производств, ориентированных на экспорт.</p>
                  </div>
                </div>
                <div className="image-section">
                  <img src={aboutFoundationImage} alt="Экспортно-ориентированные производства" />
                </div>
              </div>
            </div>

            {/* Блок 3: Под блоком 2, только текст */}
            <div className="content-item left-text">
              <div className="text-section-header-block3">
                <h3>Экспертно-аналитическая поддержка</h3>
              </div>
              <div className="text-section-content-block3">
                <p>Обеспечиваем экспертно-аналитическую поддержку для принятия решений на основе лучшей практики проектов.</p>
              </div>
            </div>

            {/* Блоки 6 и 7: Только текст */}
            <div className="content-item left-text">
              <div className="text-section-header-block3">
                <h3>Продвижение интересов</h3>
              </div>
              <div className="text-section-content-block3">
                <p>Продвижение интересов членов ассоциации на региональном и международном уровнях.</p>
              </div>
            </div>
            <div className="content-item right-text">
              <div className="text-section-header-block3">
                <h3>Деловые контакты</h3>
              </div>
              <div className="text-section-content-block3">
                <p>Формирование деловых контактов с венчурными инвестициями и партнерами.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section contact-us-block">
          <div className="contact-form-container">
            <div className="form-content">
              <ContactForm/>
            </div>
          </div>
      </section>
    </Layout>
  );
};

export default AboutPage;