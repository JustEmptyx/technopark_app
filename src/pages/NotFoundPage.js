import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="not-found-page">
        <h1>404 - Страница не найдена</h1>
        <p>Запрашиваемая страница не существует.</p>
        <Link to="/" className="btn btn-primary">Вернуться на главную</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;