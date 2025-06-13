import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = ({ customItems }) => {
  const location = useLocation();

  if (customItems) {
    return (
      <div className="breadcrumbs">
        {customItems.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="breadcrumbs-separator">/</span>}
            {item.link ? (
              <Link to={item.link} className="breadcrumbs-link">
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumbs-current">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <div className="breadcrumbs">
      <Link to="/" className="breadcrumbs-link">Главная</Link>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        let label = name.charAt(0).toUpperCase() + name.slice(1);
        switch (name) {
          case 'founders': label = 'Учредители'; break;
          case 'goals': label = 'Цели и задачи'; break;
          case 'about': label = 'О нас'; break;
          case 'services': label = 'Услуги'; break;
          case 'membership': label = 'Условия вступления'; break;
          case 'news': label = 'Новости'; break;
          default: break;
        }

        return (
          <React.Fragment key={index}>
            <span className="breadcrumbs-separator">/</span>
            {isLast ? (
              <span className="breadcrumbs-current">{label}</span>
            ) : (
              <Link to={routeTo} className="breadcrumbs-link">{label}</Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;