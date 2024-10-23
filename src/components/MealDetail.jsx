import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaCheckCircle, FaTrash, FaEdit } from 'react-icons/fa';
import Profile from './Profile/Profile'; // Adjust the path as necessary

const MealDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(data => setMeal(data.meals[0]));
  }, [id]);

  if (!meal) return <div className="text-center my-5">Loading...</div>;

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        {/* Left Column - Meal Details (col-8) */}
        <div className="col-md-8">
          {/* Title Row */}
          <span className="bg-primary bg-opacity-10 px-3 py-1 rounded mb-5">
            {meal.strMeal}
          </span>

          {/* Meal Image with Date in top-right corner */}
          <div className="position-relative mb-4 mt-2">
            <img src={meal.strMealThumb} className="img-fluid rounded w-100" alt={meal.strMeal} />
            <div className="position-absolute bg-success text-white px-3 py-1 rounded" style={{ top: '10px', right: '10px' }}>
              {new Date().toLocaleDateString()} {/* Date on top-right */}
            </div>
          </div>

          {/* Username, Edit, and Delete icons in the same row */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            {/* Username with success background and 10% opacity */}
            <div>
              <span className="bg-success bg-opacity-10 px-2 py-1 rounded">@username</span> {/* Replace with actual username */}
            </div>

            {/* Icons for Edit and Delete */}
            <div className="d-flex">
              <div className="bg-success shadow-lg rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '40px', height: '40px' }}>
                <FaEdit className="text-white" size={18} /> {/* Edit icon */}
              </div>
              <div className="bg-danger shadow-lg rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                <FaTrash className="text-white" size={18} /> {/* Delete icon */}
              </div>
            </div>
          </div>

          {/* Instructions with top and bottom borders */}
          <h4 className="mt-4">Instructions</h4>
          <p className="border-top border-bottom py-3">{meal.strInstructions}</p>

          {/* Ingredients without border */}
          <h4>Ingredients</h4>
          <ul className="list-unstyled">
            {Object.keys(meal)
              .filter(key => key.startsWith('strIngredient') && meal[key])
              .map(key => (
                <li className="d-flex align-items-center mb-2" key={key}>
                  <FaCheckCircle className="text-success me-2" /> {/* Success-colored check mark icon */}
                  {meal[key]}
                </li>
              ))}
          </ul>
        </div>

        {/* Right Column - Profile (col-4) */}
        <div className="col-md-4">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
