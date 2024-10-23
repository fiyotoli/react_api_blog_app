import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa'; // Import the Plus Icon
import referenceImage from '../assets/placeholder.jpg'; // Reference image from the assets folder
import Profile from '../components/Profile/Profile'; // Import Profile component

const CreateBlog = () => {
  const [foodName, setFoodName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState(['']); // Initialize with an empty ingredient input
  const [imagePreview, setImagePreview] = useState(referenceImage); // Use the reference image as default

  // Handles image upload and replaces reference image with uploaded one
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a preview URL for the uploaded image
      setImagePreview(imageUrl); // Replace the reference image with the uploaded one
    }
  };

  // Handles changes in the food name input
  const handleFoodNameChange = (e) => {
    setFoodName(e.target.value);
  };

  // Handles changes in instructions textarea
  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value);
  };

  // Handles changes in the ingredient input fields
  const handleIngredientChange = (index, event) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = event.target.value;
    setIngredients(newIngredients);
  };

  // Add new ingredient input field
  const addIngredientField = () => {
    setIngredients([...ingredients, '']); // Add a new empty input field
  };

  // Handles form submission (for now, it will just log data)
  const handleSubmit = (event) => {
    event.preventDefault();
    const blogData = {
      foodName,
      instructions,
      ingredients,
      imagePreview,
    };

    console.log('Blog Data:', blogData);
    alert('Blog Created Successfully!');
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        {/* Form Column (col-8) */}
        <div className="col-md-8">
          {/* Header with Success Background and 10% Opacity */}
          <h2 className="bg-success bg-opacity-10 p-3 rounded mb-2">Create New Blog</h2>
          <form
            onSubmit={handleSubmit}
            className="shadow p-4 rounded" // Add shadow and padding to the form
            style={{ borderRadius: '0.5rem', backgroundColor: '#fff' }} // Optional background color
          >
            {/* Reference Image and Upload Button */}
            <div className="mb-3">
              <label htmlFor="imageUpload" className="form-label"></label>
              {/* Full Width Image Preview with decreased height */}
              <div className="position-relative">
                <img
                  src={imagePreview}
                  alt="Food Preview"
                  className="img-fluid rounded mb-2"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Adjust the height here
                />
                {/* Upload Icon on the Left End Below the Image */}
                <div className="mt-2">
                  <label htmlFor="imageUpload">
                    <FaPlusCircle
                      className="text-success me-2"
                      size={40}
                      style={{ cursor: 'pointer' }}
                      title="Upload Image" // Tooltip for the icon
                    />
                  </label>
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    style={{ display: 'none' }} // Hidden input
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
            </div>

            {/* Food Name */}
            <div className="mb-3">
              <label htmlFor="foodName" className="form-label">
                Name of Food:
              </label>
              <input
                type="text"
                className="form-control border-0 border-bottom"
                id="foodName"
                value={foodName}
                onChange={handleFoodNameChange}
                placeholder="Enter food name"
                required
                style={{ borderBottom: '2px solid #0d6efd' }} // Custom bottom border
                onFocus={(e) => {
                  e.target.style.borderBottom = '2px solid #0d6efd';
                  e.target.style.boxShadow = '0 0 5px rgba(13, 110, 253, 0.5)'; // Add shadow on focus
                }}
                onBlur={(e) => {
                  e.target.style.borderBottom = '2px solid #ced4da';
                  e.target.style.boxShadow = 'none'; // Remove shadow on blur
                }}
              />
            </div>

            {/* Instructions */}
            <div className="mb-3">
              <label htmlFor="instructions" className="form-label">
                Instructions:
              </label>
              <textarea
                className="form-control border-0 border-bottom"
                id="instructions"
                rows="5"
                value={instructions}
                onChange={handleInstructionsChange}
                placeholder="Enter cooking instructions"
                required
                style={{ borderBottom: '2px solid #0d6efd' }} // Custom bottom border
                onFocus={(e) => {
                  e.target.style.borderBottom = '2px solid #0d6efd';
                  e.target.style.boxShadow = '0 0 5px rgba(13, 110, 253, 0.5)'; // Add shadow on focus
                }}
                onBlur={(e) => {
                  e.target.style.borderBottom = '2px solid #ced4da';
                  e.target.style.boxShadow = 'none'; // Remove shadow on blur
                }}
              ></textarea>
            </div>

            {/* Ingredients */}
            <div className="mb-3">
              <label className="form-label">Ingredients:</label>
              {ingredients.map((ingredient, index) => (
                <div key={index} className="d-flex mb-2 align-items-center">
                  <input
                    type="text"
                    className="form-control me-2 border-0 border-bottom"
                    placeholder={`Ingredient ${index + 1}`}
                    value={ingredient}
                    onChange={(event) => handleIngredientChange(index, event)}
                    required
                    style={{ borderBottom: '2px solid #0d6efd' }} // Custom bottom border
                    onFocus={(e) => {
                      e.target.style.borderBottom = '2px solid #0d6efd';
                      e.target.style.boxShadow = '0 0 5px rgba(13, 110, 253, 0.5)'; // Add shadow on focus
                    }}
                    onBlur={(e) => {
                      e.target.style.borderBottom = '2px solid #ced4da';
                      e.target.style.boxShadow = 'none'; // Remove shadow on blur
                    }}
                  />
                  {/* Add More Ingredients Button in the Same Row */}
                  {index === ingredients.length - 1 && (
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={addIngredientField}
                    >
                      Add
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-success rounded-pill">
              Create Blog
            </button>
          </form>
        </div>

        {/* Profile Component Column (col-4) */}
        <div className="col-md-4">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
