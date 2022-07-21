import React from "react";
import { getMovies } from "../movie_data";
import { NavLink, Link, Outlet } from "react-router-dom";

const Movies = () => {
  const movies = getMovies();
  return (
    <div>
      <h1>넷플릭스 영화 추천목록</h1>
      <div>
        {movies.map((movie) => (
          <NavLink
            to={`/movies/${movie.id}`} // 링크를 클릭하면 movie.id 로 이동
            key={movie.id} // 고유한 키값도 id값으로 설정
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "#FF9E1B" : "",
              };
            }}
          >
            <p>{movie.title}</p>
          </NavLink>
        ))}
      </div>
      <hr />
      {/* 하위 컴포넌트를 볼 수 있음 */}
      <Outlet />
    </div>
  );
};

export default Movies;
