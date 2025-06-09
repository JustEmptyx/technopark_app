import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import FoundersPage from './pages/founders/FoundersPage';
import SingleFounderPage from './pages/founders/SingleFounderPage';
import SingleCasePage from './pages/founders/SingleCasePage';
import GoalsPage from './pages/GoalsPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import MembershipPage from './pages/MembershipPage';
import NewsPage from './pages/news/NewsPage';
import SingleNewsPage from './pages/news/SingleNewsPage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/goals" element={<GoalsPage />} />
      <Route path="/founders" element={<FoundersPage />} />
      <Route path="/founders/:slug" element={<SingleFounderPage />} />
      <Route path="/founders/:founderSlug/cases/:caseSlug" element={<SingleCasePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/membership" element={<MembershipPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:slug" element={<SingleNewsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;