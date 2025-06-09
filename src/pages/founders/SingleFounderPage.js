import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

const SingleFounderPage = () => {
  const { slug } = useParams();
  
  return (
    <Layout>
      <div className="single-founder-page">
        <h1>Страница учредителя</h1>
        <p>Информация об учредителе: {slug}</p>
      </div>
    </Layout>
  );
};

export default SingleFounderPage;