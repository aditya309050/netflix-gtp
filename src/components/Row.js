import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import "./Row.css"; // We'll use some raw CSS for hiding scrollbars

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      } catch (error) {
        console.error("Failed to fetch movies: ", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="ml-5 text-white">
      <h2 className="text-xl font-bold mt-4">{title}</h2>

      <div className="row__posters flex overflow-y-hidden overflow-x-scroll p-5 space-x-4">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`w-full object-contain transition-transform duration-450 hover:scale-108 ${
                  isLargeRow ? "max-h-64 hover:scale-110" : "max-h-28"
                }`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
