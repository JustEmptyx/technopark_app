import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';

// Компоненты
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SinglePost from './pages/SinglePost';

function App() {
  const [siteInfo, setSiteInfo] = useState({
    title: '',
    description: ''
  });

  useEffect(() => {
    // Получение информации о сайте из WordPress
    axios.get('https://your-wordpress-site.com/wp-json')
      .then(response => {
        setSiteInfo({
          title: response.data.name,
          description: response.data.description
        });
      })
      .catch(error => console.error('Error fetching site info:', error));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header siteTitle={siteInfo.title} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:slug" element={<SinglePost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;