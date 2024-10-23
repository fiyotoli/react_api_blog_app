import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegComment, FaHeart, FaEye } from 'react-icons/fa'; // Import icons from react-icons
import Profile from './Profile/Profile'; // Modified import for Profile

const MealList = () => {
  const [meals, setMeals] = useState([]);
  const [visibleMeals, setVisibleMeals] = useState(6); // Initially show 6 meals
  const [isLoading, setIsLoading] = useState(true); // Initial loading state
  const [loadingMessage, setLoadingMessage] = useState(''); // Weak connection message
  const bgColors = ['bg-primary', 'bg-danger', 'bg-warning', 'bg-info', 'bg-secondary']; // Random background colors for usernames

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      if (isLoading) {
        // Only show this message if loading hasn't finished in 5 seconds
        setLoadingMessage('Loading, your connection is weak...');
      }
    }, 5000); // 5-second delay before showing the message

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(response => response.json())
      .then(data => {
        setMeals(data.meals);
        setIsLoading(false); // Stop loading once data is fetched
        clearTimeout(loadingTimeout); // Clear timeout to avoid showing the weak connection message
      })
      .catch(() => {
        setIsLoading(false); // Even in case of error, stop loading
        setLoadingMessage('Failed to load meals, please check your connection.');
      });

    return () => clearTimeout(loadingTimeout); // Clean up the timeout if component unmounts
  }, [isLoading]);

  const handleExploreMore = () => {
    setVisibleMeals((prevVisibleMeals) => prevVisibleMeals + 6); // Load 6 more meals
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleExploreLess = () => {
    setVisibleMeals(6); // Show only the initial 6 meals
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container my-4">
      <div className="row">
        {/* Meal Cards Column - Left Side (col-8) */}
        <div className="col-md-8">
          {isLoading && meals.length === 0 ? ( // Check if still loading and no meals are loaded
            <div className="text-center my-4">
              <p>{loadingMessage || 'Loading...'}</p> {/* Show loading or weak connection message */}
            </div>
          ) : (
            <div className="row">
              {meals.slice(0, visibleMeals).map((meal, index) => (
                <div className="col-md-6 mb-4" key={meal.idMeal}>
                  <div className="card shadow-sm position-relative">
                    {/* Date in top-right corner with bg-success */}
                    <div className="badge bg-success position-absolute" style={{ top: '10px', right: '10px' }}>
                      {new Date().toLocaleDateString()} {/* Use actual date here */}
                    </div>

                    <Link to={`/meal/${meal.idMeal}`}>
                      <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
                    </Link>

                    <div className="card-body">
                      <h5 className="card-title">{meal.strMeal}</h5>

                      {/* Username with random background color and 10% opacity */}
                      <div>
                        <span className={`${bgColors[index % bgColors.length]} rounded px-2 bg-opacity-10 text-dark`}>
                          @username {/* Replace with actual user data */}
                        </span>
                      </div>

                      <div className="d-flex justify-content-between align-items-center mt-3">
                        {/* Left side: View Recipe button */}
                        <Link to={`/meal/${meal.idMeal}`} className="btn btn-success rounded-pill">
                          View Detail
                        </Link>

                        {/* Right side: comment, like, and view icons */}
                        <div className="d-flex align-items-center">
                          <FaRegComment className="me-3 text-success" size={20} /> {/* Comment icon, size increased */}
                          <FaHeart className="me-3 text-danger" size={20} /> {/* Like icon with danger color, size increased */}
                          <FaEye className="text-success" size={20} /> {/* View icon, size increased */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Smooth scrolling and functional Explore More/Explore Less buttons */}
          <div className="text-center mt-4">
            {visibleMeals < meals.length ? (
              <button className="btn btn-success" onClick={handleExploreMore}>
                Explore More
              </button>
            ) : (
              <button className="btn btn-danger" onClick={handleExploreLess}>
                Explore Less
              </button>
            )}
          </div>
        </div>

        {/* Profile Component Column - Right Side (col-4) */}
        <div className="col-md-4">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default MealList;
