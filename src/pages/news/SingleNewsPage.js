import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

const SingleNewsPage = () => {
  const { slug } = useParams();
  
  return (
    <Layout>
      <div className="single-news-page">
        <h1>Новость</h1>
        <p>Содержание новости: {slug}</p>
      </div>
    </Layout>
  );
};

export default SingleNewsPage;