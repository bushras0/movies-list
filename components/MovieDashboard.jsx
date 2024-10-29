"use client"; // Marking this as a client component

import React, { useState } from 'react';
import EmptyMovie from './EmptyMovie';
import MyMovies from './Movies';
import CreateMovie from './CreateMovie';
import EditMovie from './EditMovie';

const MovieDashboard = () => {
  const [movies, setMovies] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);
  const [isCreatingMovie, setIsCreatingMovie] = useState(false); // Renamed state for clarity

  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
    setIsCreatingMovie(false);
  };

  const handleEditMovie = (updatedMovie) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === updatedMovie.id ? updatedMovie : movie
      )
    );
    setEditingMovie(null);
  };

  const handleAddNewMovieClick = () => {
    setIsCreatingMovie(true);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#093545] p-6">
      {isCreatingMovie ? ( // Show CreateMovie if in creating mode
        <CreateMovie onAddMovie={handleAddMovie} setIsCreatingMovie={setIsCreatingMovie} />
      ) : editingMovie ? (
        <EditMovie
          movie={editingMovie}
          setEditingMovie={setEditingMovie}
          onEditMovie={handleEditMovie}
        />
      ) : movies.length === 0 ? (
        <EmptyMovie onAddNewMovieClick={handleAddNewMovieClick} />
      ) : (
        <>
          <MyMovies movies={movies} onEditMovie={setEditingMovie} />
          <button
            onClick={handleAddNewMovieClick}
            className="bg-[#2bd17e] hover:bg-green-700 text-white font-bold py-2 px-6 rounded mt-6 transition-transform transform hover:scale-105"
          >
            Add a New Movie
          </button>
        </>
      )}
    </div>
  );
};

export default MovieDashboard;
