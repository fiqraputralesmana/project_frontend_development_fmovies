import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../api";
import ReactStars from "react-rating-stars-component";
const Dashboard = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  // Search
  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  const roundToNearestTenth = (num) => {
    return Math.ceil(num * 10) / 10;
  };

  const formatVoteCount = (count) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + "k";
    }
    return count.toString();
  };

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      // return popularMovies.slice(0, 5).map((movie, i) => {
      const rating = roundToNearestTenth(movie.vote_average / 2);
      const formattedVoteCount = formatVoteCount(movie.vote_count);
      return (
        <div
          className="movie-wrapper w-60 bg-zinc-600 pb-5 flex flex-col justify-center max-sm:w-40 "
          key={i}
        >
          <img
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt=""
          />
          <h1 className="p-2 h-16 text-white font-bold flex items-center justify-center text-lg max-sm:text-sm">
            {movie.title}
          </h1>
          <p className="text-white font-mono">{movie.release_date}</p>
          <p className="text-white">
            <div className="w-full flex justify-center items-center">
              <ReactStars
                count={5}
                value={rating}
                size={24}
                edit={false}
                activeColor="#ffd700"
                isHalf={true}
              />
            </div>
          </p>
        </div>
      );
    });
  };

  const styles = {
    movieContainer: {
      scrollbarWidth: "none", // Untuk Firefox
      msOverflowStyle: "none", // Untuk Internet Explorer dan Edge
    },
  };

  return (
    <div className="w-full h-screen flex max-sm:flex-col ">
      {/* Sidebar */}
      <div className="w-80 bg-slate-900 box-border py-7 ps-9 max-sm:w-full max-sm:py-1 max-sm:px-1 max-sm:flex max-sm:justify-center max-sm:items-center">
        <img src="fmovie-icon.png" alt="logo" width="100"></img>
        {/* HOME */}
        <div className="max-sm:hidden">
          <h1 className=" ps-3 my-5 font-bold text-gray-400">MENU</h1>
          <ul className="ps-5 flex flex-col gap-5 text-gray-500 font-semibold">
            <li className="border-e-4 border-red-700 text-white flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house-fill"
                viewBox="0 0 16 16"
                className="relative top-1"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
              </svg>
              Home
            </li>
            <li className="flex gap-2 hover:text-white hover:border-e-4 border-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-building"
                viewBox="0 0 16 16"
                className="relative top-1"
              >
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
              </svg>
              Community
            </li>
            <li className="flex gap-2 hover:text-white hover:border-e-4 border-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clock"
                viewBox="0 0 16 16"
                className="relative top-1"
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg>
              Discovery
            </li>
            <li className="flex gap-2 hover:text-white hover:border-e-4 border-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-alarm"
                viewBox="0 0 16 16"
                className="relative top-1"
              >
                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z" />
                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1" />
              </svg>
              Comming Soon
            </li>
          </ul>
        </div>
        {/* SOCIAL */}
        <div className="max-sm:hidden">
          <h1 className=" ps-3 mb-5 mt-10 font-bold text-gray-400">SOCIAL</h1>
          <ul className="ps-5 flex flex-col gap-5 text-gray-500 font-semibold">
            <li className="flex gap-2 hover:text-white hover:border-e-4 border-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-building"
                viewBox="0 0 16 16"
                className="relative top-1"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              Friends
            </li>
            <li className="flex gap-2 hover:text-white hover:border-e-4 border-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clock"
                viewBox="0 0 16 16"
                className="relative top-1"
              >
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
              </svg>
              Partners
            </li>
            <li className="flex gap-2 hover:text-white hover:border-e-4 border-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-alarm"
                viewBox="0 0 16 16"
                className="relative top-1"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1m4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5" />
              </svg>
              Media
            </li>
          </ul>
        </div>
        {/* GENERAL */}
        <div className="max-sm:hidden">
          <h1 className=" ps-3 mb-5 mt-10 font-bold text-gray-400">GENERAL</h1>
          <ul className="ps-5 flex flex-col gap-5 text-gray-500 font-semibold">
            <li className="flex gap-2 hover:text-white hover:border-e-4 border-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clock"
                viewBox="0 0 16 16"
                className="relative top-1"
              >
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
              </svg>
              Setting
            </li>
            <li className="flex gap-2 hover:text-white hover:border-e-4 border-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-alarm"
                viewBox="0 0 16 16"
                className="relative top-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                />
              </svg>
              Log Out
            </li>
          </ul>
        </div>
      </div>
      {/* Movie Dashboard*/}
      <div className="w-full bg-slate-800 p-9 max-sm:p-3">
        {/* Navbar */}
        <div className="flex justify-between max-sm:justify-center">
          <ul className="flex gap-6 font-bold text-xl text-gray-600">
            <li className="max-sm:hidden">TV Series</li>
            <li className="text-white max-sm:hidden">Movie</li>
            <li className="max-sm:hidden">Animes</li>
          </ul>
          {/* Search & Profile */}
          <div className="flex gap-4 max-sm:w-3/4 max-sm:flex max-sm:justify-center max-sm:items-center">
            <input
              type="search"
              className="py-2 px-4 bg-slate-700 text-white rounded-lg max-sm:w-3/4"
              placeholder="Search"
              autocomplete="on"
              size="30"
              onChange={({ target }) => search(target.value)}
            ></input>
            <img
              src="profile.png"
              alt="profile"
              className="w-10 h-10 rounded-full "
            ></img>
          </div>
        </div>
        {/* Movie List */}
        <div className="w-full mt-5">
          <h1 className="mt-5 mb-8 font-bold text-white text-2xl underline decoration-red-700 decoration-4 max-sm:text-center max-sm:text-lg">
            Popular Movies
          </h1>
          {/* List */}
          <div className="w-full mt-5 ">
            <div
              className="movie-container w-full text-center flex justify-center 
              flex-wrap gap-9 overflow-scroll h-dashboard-height max-sm:gap-4"
              style={styles.movieContainer}
            >
              <PopularMovieList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
