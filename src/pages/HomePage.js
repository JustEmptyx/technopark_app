import React from 'react';
import Layout from '../components/layout/Layout';

const HomePage = () => {
  return (
    <Layout showBreadcrumbs={false} transparentHeader={true}>
      <div className="home-page">
        <h1>Главная страница</h1>
        <p>Добро пожаловать на сайт Ассоциации технопарков</p>
      </div>
    </Layout>
  );
};

export default HomePage;