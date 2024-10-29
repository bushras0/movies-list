"use client";

import React, { useState } from 'react';
import axios from 'axios';

const CreateMovie = ({ onMovieCreated }) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [error, setError] = useState('');

  const handleCreateMovie = async (e) => {
    e.preventDefault();

    if (!title || !year || !posterUrl) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const newMovie = {
        title,
        year,
        posterUrl
      };

      const response = await axios.post('http://localhost:5000/api/movies', newMovie);
      onMovieCreated(response.data); // Call the callback to update the movie list
      setTitle('');
      setYear('');
      setPosterUrl('');
      setError('');
    } catch (error) {
      setError('Failed to create movie.');
      console.error('Error creating movie:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="bg-[#093545] p-6 rounded-lg text-white w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Movie</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleCreateMovie} className="flex flex-col space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Movie Title"
          className="p-2 rounded bg-[#224957] text-white focus:outline-none"
        />
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year"
          className="p-2 rounded bg-[#224957] text-white focus:outline-none"
        />
        <input
          type="url"
          value={posterUrl}
          onChange={(e) => setPosterUrl(e.target.value)}
          placeholder="Poster URL"
          className="p-2 rounded bg-[#224957] text-white focus:outline-none"
        />
        <button
          type="submit"
          className="bg-[#2bd17e] hover:bg-green-700 py-2 px-4 rounded text-white font-bold transition-transform transform hover:scale-105"
        >
          Create Movie
        </button>
      </form>
    </div>
  );
};

export default CreateMovie;
