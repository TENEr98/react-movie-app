import { useState, useEffect } from 'react'
import MovieList from '../MovieList/MovieList'
import { MovieAPI } from '../../api'
import { Input, message } from 'antd'
import useDebounce from '../../useDebounce/useDebounce'
import { mapGenreIds, mapRateZero } from '../../utils/mapper'

import './SearchTab.css'

const Search = ({ genres }) => {
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(1)
  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalItems, setTotalItems] = useState(1)

  const onChangeDebounce = useDebounce(searchValue, 250)
  const onPageChange = (page) => setPage(page)

  const onChangeSearch = ({ target: { value } }) => {
    const temp = value.trimStart()
    if (temp.length >= 0) {
      setSearchValue(temp)
    }
  }

  useEffect(() => {
    if (onChangeDebounce.length !== 0) {
      setLoading(true)
      MovieAPI.searchMovie(searchValue, page)
        .then((response) => {
          const {
            data: { results, total_results }
          } = response
          setLoading(false)
          if (results.length === 0) {
            message.warning('Таких фильмов не существуют в базе данных')
          } else {
            setMovieList(mapRateZero(mapGenreIds(results, genres)))
            setTotalItems(total_results)
          }
        })
        .catch(() => message.error('Что-то пошло не так'))
    }
  }, [onChangeDebounce, page])

  return (
    <div className="search__tab">
      <div className="search__container_input">
        <Input
          placeholder="Type to search..."
          className="search__input"
          value={searchValue}
          onChange={(e) => onChangeSearch(e)}
        />
      </div>
      <div className="search__content">
        <MovieList
          page={page}
          loading={loading}
          movieList={movieList}
          totalItems={totalItems}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  )
}

export default Search
