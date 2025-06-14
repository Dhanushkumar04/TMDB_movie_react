import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { MovieDetails, MovieList ,Search} from '../pages'
const AllRoutes = () => {
  return (
        <>
        <Routes>
            <Route path='/' element={<MovieList title="Browse Movies" apiPath="movie/now_playing"/>}/>
            <Route path='movies/popular' element={<MovieList title="Popular Movies" apiPath="movie/popular"/>}/>
            <Route path='movies/top' element={<MovieList title="Top Rated Movies" apiPath="movie/top_rated"/>}/>
            <Route path='movies/upcoming' element={<MovieList title="Upcoming Movies" apiPath="movie/upcoming"/>}/>
            <Route path='movie/:id' element={<MovieDetails/>}/>
            <Route path='search' element={<Search  apiPath="search/movie"/>}/>
        </Routes>
        </>
  )
}

export default AllRoutes
