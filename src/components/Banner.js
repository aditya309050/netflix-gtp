import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import requests from "../utils/requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        return request;
      } catch (error) {
         console.error(error);
      }
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="text-white object-contain h-[448px] relative bg-cover bg-center"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="ml-8 pt-36 h-[190px]">
        <h1 className="text-5xl font-extrabold pb-2">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="w-[45rem] leading-[1.3] pt-4 text-sm max-w-[360px] h-20">
          {truncate(movie?.overview, 150)}
        </div>
        <div className="mt-4">
          <button className="cursor-pointer text-black outline-none border-none font-bold rounded px-8 py-2 mr-4 bg-white hover:bg-white/80 transition-all text-xl">
            Play
          </button>
          <button className="cursor-pointer text-white outline-none border-none font-bold rounded px-8 py-2 bg-[rgba(51,51,51,0.5)] hover:text-black hover:bg-[#e6e6e6] transition-all text-xl">
            My List
          </button>
        </div>
      </div>
      
      <div className="h-[7.4rem] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
    </header>
  );
}

export default Banner;
