import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import MealDetail from './components/MealDetail';
import CreateBlog from './pages/CreateBlog';
import Register from './pages/Register';
import Login from './pages/Login';
import MyBlog from './pages/MyBlog';
import NoPage from './pages/NoPage';

const App = () => {
  // State to manage loading
  const [loading, setLoading] = useState(true); // Set to true initially to show spinner

  // Simulate loading for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Spinner will be visible for 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  return (
    <Router basename="/react_api_blog_app">
      <Navbar />

      {/* Conditional rendering for loading spinner */}
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: '100vh' }} // Full viewport height to vertically center the spinner
        >
          {/* First button with loading spinner */}
          <button className="btn btn-success" type="button" disabled>
            <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
            <span className="visually-hidden" role="status">Loading...</span>
          </button>

          {/* Second button with loading spinner */}
          <button className="btn btn-success ms-3" type="button" disabled>
            <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
            <span role="status">Loading...</span>
          </button>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myblogs" element={<MyBlog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/meal/:id" element={<MealDetail />} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
