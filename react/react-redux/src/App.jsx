import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostListPage from './Pages/PostListPage';
import PostPage from './Pages/PostPage';
import WeatherPage from './Pages/WeatherPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<PostListPage />} />
        <Route path="/:id" element={<PostPage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
