import React, { useState } from 'react';

const AdminPanel = ({ galleryImagesAdmin, setGalleryImagesAdmin }) => {
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newAltText, setNewAltText] = useState('');

  const handleAddImage = () => {
    if (newImageUrl) {
      const newImage = { imageUrl: newImageUrl, altText: newAltText };
      setGalleryImagesAdmin([...galleryImagesAdmin, newImage]);
      setNewImageUrl('');
      setNewAltText('');
    } else {
      alert("Please enter an image URL.");
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold text-orange-900 mb-6">Admin - Gallery Management</h2>

      <div className="mb-6">
        <label htmlFor="imageUrl" className="block text-gray-700 text-sm font-bold mb-2">
          New Image URL:
        </label>
        <input
          type="url"
          id="imageUrl"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter image URL"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="altText" className="block text-gray-700 text-sm font-bold mb-2">
          Image Alt Text (Optional):
        </label>
        <input
          type="text"
          id="altText"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter alt text (for accessibility)"
          value={newAltText}
          onChange={(e) => setNewAltText(e.target.value)}
        />
      </div>

      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleAddImage}
      >
        Add Image to Gallery
      </button>

      <h3 className="text-xl font-semibold text-orange-700 mt-8 mb-4">Current Gallery Images:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImagesAdmin.map((image, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <img src={image.imageUrl} alt={image.altText} className="w-full h-40 object-cover" />
            <div className="p-2">
              <p className="text-gray-700 text-sm">{image.altText || 'No alt text'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;