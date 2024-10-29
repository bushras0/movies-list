"use client";

import React, { useState } from 'react';

const CreateMovie = ({ onAddMovie, setIsCreatingMovie }) => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newMovie = {
            title,
            year: Number(year), // Ensure year is a number
            poster: posterUrl,
        };

        try {
            const response = await fetch('http://localhost:5000/api/movies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMovie),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to create movie');
            }

            const createdMovie = await response.json();
            console.log('Movie created:', createdMovie);
            onAddMovie(createdMovie);
            setIsCreatingMovie(false);
        } catch (error) {
            setError(error.message);
            console.error('Error creating movie:', error);
        }
    };

    return (
        <div className="flex flex-col items-center text-white w-full max-w-md bg-[#093545] p-6 rounded-lg shadow-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">Create a New Movie</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
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
                    type="number" // Change to number type for year
                    placeholder="Publishing Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full p-3 rounded bg-[#224957] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2bd17e]"
                    required
                />
                <input
                    type="text"
                    placeholder="Poster URL"
                    value={posterUrl}
                    onChange={(e) => setPosterUrl(e.target.value)}
                    className="w-full p-3 rounded bg-[#224957] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2bd17e]"
                    required
                />
                <div className="w-full p-3 bg-[#224957] rounded flex flex-col items-center justify-center text-gray-400">
                    {posterUrl && (
                        <img
                            src={posterUrl}
                            alt="Poster Preview"
                            className="mb-3 w-full h-48 object-cover rounded-lg"
                        />
                    )}
                </div>
                <div className="flex justify-between mt-6">
                    <button 
                        type="button" 
                        onClick={() => setIsCreatingMovie(false)} 
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded transition-transform transform hover:scale-105"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-[#2bd17e] hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-transform transform hover:scale-105"
                    >
                        Create Movie
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateMovie;
