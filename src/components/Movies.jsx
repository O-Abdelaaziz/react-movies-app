import React, { useState } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { Like } from './common/Like';

const Movies = () => {
  const [movies, setMovies] = useState(getMovies());

  const deleteMovieHandler = (id) => {
    setMovies((prevMovie) => {
      const updateMovies = prevMovie.filter((movie) => movie._id !== id);
      return updateMovies;
    });
  };

  const likeMovieHandler = (movie) => {
    const updateMovies = [...movies];
    const index = updateMovies.indexOf(movie);
    updateMovies[index] = { ...updateMovies[index] };
    updateMovies[index].liked = !updateMovies[index].liked;
    setMovies(updateMovies);
  };
  return (
    <React.Fragment>
      <div className="alert alert-primary mt-2" role="alert">
        Showing {movies.length} movies in the database.
      </div>
      {movies.length === 0 && <p>There are no movies in the database</p>}
      {movies.length > 0 && (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Like</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <th scope="row">{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onLike={() => likeMovieHandler(movie)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteMovieHandler(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </React.Fragment>
  );
};

export default Movies;
