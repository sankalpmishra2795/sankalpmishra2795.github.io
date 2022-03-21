import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import SinInPage from '../components/SignPage/signIn';
import SinUpPage from '../components/SignPage/signup';
import HomePage from '../components/HomePage/homePage';
import MovieDetailsPage from '../components/MovieDetails/movieDetails';

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/MovieDetails" element={<MovieDetailsPage />} />
        <Route exact path="/SinInPage" element={<SinInPage />} />
        <Route exact path="/SinUpPage" element={<SinUpPage />} />
      </Routes>
    </Router>
  )
}

export default MyRoutes
