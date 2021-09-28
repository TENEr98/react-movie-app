import { useState, useEffect } from 'react'
import MovieList from '../MovieList/MovieList'
import { MovieAPI } from '../../api'
import { Input } from 'antd'
import useDebounce from '../utils/useDebounce'

import './Search.css'

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(1)
  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(true)
  const [maxPageSize, setMaxPageSize] = useState(1)

  const onChangeDebounce = useDebounce(searchValue, 250)

  useEffect(() => {
    if (onChangeDebounce) {
      setLoading(true)
      MovieAPI.searchMovie(searchValue, page)
        .then((response) => {
          const {
            data: { results, total_results, total_pages }
          } = response
          console.log(total_results)
          setLoading(false)
          setMovieList(results)
          setMaxPageSize(total_results)
        })
        .catch((err) => console.log(err))
    }
  }, [onChangeDebounce, page])

  const onPageChange = (page) => setPage(page)

  return (
    <div className="search__tab">
      <div className="search__container_input">
        <Input
          placeholder="Type to search..."
          className="search__input"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="search__content">
        <MovieList
          page={page}
          loading={loading}
          movieList={movieList}
          maxPageSize={maxPageSize}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  )
}

export default Search
