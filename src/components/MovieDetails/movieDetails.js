import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const movieDetails = ({ movie }) => {
  return (
    <div>
      <Link to="/">
        <div className="logo" style={{ height: '12px' }}>
          <div
            style={{
              color: 'red',
              fontSize: '1.6rem',
              fontWeight: 'bold',
              position: 'relative',
              top: '18px',
              left: '16px',
              width: 'fit-content',
            }}
          >
            <div style={{ color: '#999' }}>M<span style={{ color: '#333' }}>ovieSala</span></div>
          </div>
        </div>
      </Link>

      <div className="container" style={{ maxWidth: '100%' }}>
        <div className="cellphone-container">
          <div className="movie">
            <div
              className="movie-img"
              style={{ backgroundImage: `url(${movie.Poster})` }}
            ></div>
            <div className="text-movie-cont">
              <div className="mr-grid">
                <div className="col1">
                  <h1>{movie.Title}</h1>
                  <ul className="movie-gen">
                    <li>PG-13 /</li>
                    <li>2h 49min /</li>
                    <li>Adventure, Drama, Sci-Fi,</li>
                  </ul>
                </div>
              </div>
              <div className="mr-grid summary-row">
                <div className="col2">
                  <h5>{movie.Year}</h5>
                </div>
                <div className="col2">
                  <ul className="movie-likes">
                    <li>
                      <i className="material-icons">&#xE813;</i>124
                    </li>
                    <li>
                      <i className="material-icons">&#xE813;</i>3
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mr-grid">
                <div className="col1">
                  <p className="movie-description">
                  Stand Up Rahul is the kind of film you want to watch over a large tub of popcorn despite its flaws, watch it if breezy rom-coms are your thing.
                  </p>
                </div>
              </div>
              <div className="mr-grid actors-row">
                <div className="col1">
                  <p className="movie-actors">{movie.Type}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  movie: state?.movie?.movieDetails,
});

export default connect(mapStateToProps, null)(movieDetails);
