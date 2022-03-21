import axios from 'axios';
import { GET_MOVEIS_REQUEST, GET_MOVIES_FAILER, GET_MOVIES_SUCCESS, GET_TRENDING_MOVEIS_REQUEST, GET_TRENDING_MOVIES_FAILER, GET_TRENDING_MOVIES_SUCCESS, SEND_DETAILS } from './actionType';


export const getMovieApiCall = (searchName, bool) => (dispatch) => {
  dispatch(getMovieRequest());
  dispatch(getTrendingMovieRequest());

  if (bool) {
    axios
      .get(`https://www.omdbapi.com/?s=${searchName}&apikey=6a2d8bb`)
      .then((res) => {
        dispatch(getMovieSuccess(res.data.Search));
      })
      .catch((err) => {
        dispatch(getMovieFailer(err));
      });
  }

  axios
    .get('https://www.omdbapi.com/?s=Pirates&apikey=6a2d8bb')
    .then((res) => {
      dispatch(getMovieSuccess(res.data.Search));
      dispatch(getTrendingMovieSuccess(res.data.Search));
    })
    .catch((err) => {
      dispatch(getTrendingMovieFailer(err));
      dispatch(getMovieFailer(err));
    });
};

export const getMovieRequest = () => ({
    type: GET_MOVEIS_REQUEST,
  });

export const getMovieSuccess = (payload) => ({
    type: GET_MOVIES_SUCCESS,
    payload,
  });

export const getMovieFailer = (payload) => ({
    type: GET_MOVIES_FAILER,
    payload,
  });

export const getTrendingMovieRequest = () => ({
    type: GET_TRENDING_MOVEIS_REQUEST,
  });

export const getTrendingMovieSuccess = (payload) => ({
    type: GET_TRENDING_MOVIES_SUCCESS,
    payload,
  });

export const getTrendingMovieFailer = (payload) => ({
    type: GET_TRENDING_MOVIES_FAILER,
    payload,
  })

export const movieDetails = (payload) => ({
  type: SEND_DETAILS,
  payload,
});
