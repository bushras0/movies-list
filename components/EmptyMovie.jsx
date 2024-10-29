// components/EmptyMovie.jsx
"use client";

import React from 'react';

const EmptyMovie = ({ onAddNewMovieClick }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[80vh]">
      <h1 className="text-3xl font-bold text-white mb-4">Your movie list is empty</h1>
      <p className="text-lg text-white mb-6">Start by creating a new movie!</p>
      <button
        onClick={onAddNewMovieClick}
        className="bg-[#2bd17e] hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-transform transform hover:scale-105"
      >
        Create New Movie
      </button>
    </div>
  );
};

export default EmptyMovie;
