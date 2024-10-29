"use client";

import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

export default function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/movies');
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#093545] p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">My Movie Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {movies.length === 0 ? (
          <p className="text-lg text-gray-300">No movies found.</p>
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}
