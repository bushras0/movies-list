import React from 'react';

const MyMovies = ({ movies, onEditMovie }) => {
  return (
    <div className="min-h-screen bg-[#093545] p-6 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center">My Movies</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-6xl">
        {movies.map((movie) => (
          <div
            key={movie._id} // Ensure you're using the correct unique identifier
            className="bg-[#224957] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 relative"
          >
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
            <h2 className="text-2xl font-semibold mb-2">{movie.title}</h2>
            <p className="text-gray-300 mb-4">Year: {movie.year}</p>
            <button
              onClick={() => onEditMovie(movie)}
              className="absolute bottom-4 right-4 bg-[#2bd17e] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none transition-transform transform hover:scale-105 shadow-md"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMovies;
