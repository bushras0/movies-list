"use client";

import React, { useState } from 'react';

const EditMovie = ({ movie, onEditMovie, setEditingMovie }) => {
  const [title, setTitle] = useState(movie.title);
  const [year, setYear] = useState(movie.year);
  const [image, setImage] = useState(movie.image || null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMovie = {
      ...movie,
      title,
      year,
      image,
    };
    onEditMovie(updatedMovie);
  };

  return (
    <div className="flex flex-col items-center text-white w-full max-w-md bg-[#093545] p-6 rounded-lg shadow-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Edit Movie</h1>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded bg-[#224957] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2bd17e]"
          required
        />
        <input
          type="text"
          placeholder="Publishing Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full p-3 rounded bg-[#224957] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2bd17e]"
          required
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-3 rounded bg-[#224957] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2bd17e]"
          required
        />
        <div className="w-full p-3 bg-[#224957] rounded flex flex-col items-center justify-center text-gray-400">
          {image && (
            <img
              src={image}
              alt="Uploaded Preview"
              className="mb-3 w-full h-48 object-cover rounded-lg"
            />
          )}
        </div>
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={() => setEditingMovie(null)}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded transition-transform transform hover:scale-105"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#2bd17e] hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-transform transform hover:scale-105"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMovie;
