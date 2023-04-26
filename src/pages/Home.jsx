import React, {  } from 'react'
import Genres from '../components/Genres'
import MovieList from '../components/MovieList'

import {  } from '../app/store/Actions/movieAction'


const Home = () => {

  // useEffect(()=>{
  //   dispatch(fetchMovies);
  // },[]);
  return (
    <div>
       <Genres/>
       <MovieList/>
    </div>
  )
}

export default Home
