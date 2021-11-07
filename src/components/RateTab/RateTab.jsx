import { useEffect, useState } from 'react'
import MovieList from '../MovieList/MovieList'

import './RateTab.css'

const Rate = () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem('ratedMovies'))
    if (temp) {
      setMovieList(temp)
    }
  }, [localStorage.getItem('ratedMovies')])

  return (
    <div className="rate__tab">
      <MovieList movieList={movieList} />
    </div>
  )
}

export default Rate
