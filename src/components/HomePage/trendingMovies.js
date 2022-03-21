import React from 'react';
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import { movieDetails } from '../../redux/movies/action';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 7 },
];

const TrendingMovies = ({ MovieList, movieDetails }) => {
  const navigator = useNavigate();

  const onClickHandler = (movie) => {
    movieDetails(movie);
    navigator('/MovieDetails');
  };

  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          fontSize: 'revert',
          fontWeight: 'normal',
          color: '#777',
          marginBottom: '30px',
        }}
      >
        Trending Films
      </h1>
      <div className="trendingContainer">
        <Carousel breakPoints={breakPoints}>
          {MovieList.map((movie, index) => (
            <div
              key={index}
              className="trendingMoviesList"
              onClick={() => onClickHandler(movie)}
            >
              <img className="trendingMoviesImg" src={movie.Poster} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
      <h1
        style={{
          textAlign: 'center',
          fontSize: 'revert',
          fontWeight: 'normal',
          color: '#777',
          marginBottom: '15px',
          marginTop: '30px',
        }}
      >
        Searched Films
      </h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  MovieList: state?.movie?.trendingMovieArr,
});

export default connect(mapStateToProps, { movieDetails })(TrendingMovies);
