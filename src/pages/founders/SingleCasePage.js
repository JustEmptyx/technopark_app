import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

const SingleCasePage = () => {
  const { founderSlug, caseSlug } = useParams();
  
  return (
    <Layout>
      <div className="single-case-page">
        <h1>Кейс учредителя</h1>
        <p>Учредитель: {founderSlug}</p>
        <p>Кейс: {caseSlug}</p>
      </div>
    </Layout>
  );
};

export default SingleCasePage;