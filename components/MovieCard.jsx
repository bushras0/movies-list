import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-[#224957] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 relative">
      {movie.poster ? ( // Change here
        <img
          src={movie.poster} // Change here
          alt={movie.title}
          className="w-full h-60 object-cover rounded-lg mb-4 transition-opacity duration-300 hover:opacity-80"
        />
      ) : (
        <div className="w-full h-60 bg-gray-600 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-gray-400">No Image Available</span>
        </div>
      )}
      <h2 className="text-2xl font-semibold text-white mb-2">{movie.title}</h2>
      <p className="text-gray-300 mb-4">Year: {movie.year}</p>
    </div>
  );
};

export default MovieCard;
