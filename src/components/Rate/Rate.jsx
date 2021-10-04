import { useEffect, useState } from 'react'
import MovieList from '../MovieList/MovieList'
import { MovieAPI } from '../../api'
import mapper from '../utils/mapper'

import './Rate.css'

const Rate = (props) => {
  const { genres } = props
  const [movieList, setMovieList] = useState([])
  const [totalItems, setTotalItems] = useState(1)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const onPageChange = (page) => setPage(page)

  useEffect(() => {
    MovieAPI.getTopRated()
      .then((response) => {
        const {
          data: { results, total_results }
        } = response
        mapper(results, genres)
        setLoading(false)
        setMovieList(results)
        setTotalItems(total_results)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className="rate__tab">
      <MovieList
        page={page}
        loading={loading}
        movieList={movieList}
        totalItems={totalItems}
        onPageChange={onPageChange}
      />
    </div>
  )
}

export default Rate
