import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Articles from './components/Articles';
import ArticlePage from './components/ArticlePage';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <nav className="nav">
        <NavLink to="/" end>Главная</NavLink>
        <NavLink to="/articles">Статьи</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

