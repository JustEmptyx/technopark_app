import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from '../common/Breadcrumbs';
import '../../styles/components/layout/layout.css';

const Layout = ({ 
  children, 
  showBreadcrumbs = true, 
  customBreadcrumbs,
  transparentHeader = false
}) => {
  return (
    <div className="site-layout">
      <Header transparent={transparentHeader} />
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;