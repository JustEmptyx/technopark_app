import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/components/common/breadcrumbs.css';

const Breadcrumbs = ({ customItems }) => {
  const location = useLocation();
  
  if (customItems) {
    return (
      <div className="breadcrumbs">
        {customItems.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="breadcrumbs-separator">/</span>}
            {item.link ? (
              <Link to={item.link}>{item.label}</Link>
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
      <Link to="/">Главная</Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        // Преобразование URL в читаемый текст
        let label = name.charAt(0).toUpperCase() + name.slice(1);
        
        if (name === 'founders') label = 'Учредители';
        if (name === 'goals') label = 'Цели и задачи';
        if (name === 'about') label = 'О нас';
        if (name === 'services') label = 'Услуги';
        if (name === 'membership') label = 'Условия вступления';
        if (name === 'news') label = 'Новости';
        
        return (
          <React.Fragment key={index}>
            <span className="breadcrumbs-separator">/</span>
            {isLast ? (
              <span className="breadcrumbs-current">{label}</span>
            ) : (
              <Link to={routeTo}>{label}</Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;