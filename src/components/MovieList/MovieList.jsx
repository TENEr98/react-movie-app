import React from 'react'
import MovieItem from '../MovieItem/MovieItem'
import { Pagination } from 'antd'

import './MovieList.css'

const MovieList = (props) => {
  const { page, loading, movieList, maxPageSize, onPageChange } = props

  return (
    loading === false && (
      <div className="movie__block">
        <div className="movie__list">
          {movieList?.map((item, idx) => (
            <MovieItem key={idx} item={item} />
          ))}
        </div>
        <div className="movie__pagination">
          <Pagination
            current={page}
            total={maxPageSize}
            onChange={onPageChange}
            pageSize={20}
            showQuickJumper
            showLessItems
          />
        </div>
      </div>
    )
  )
}

export default MovieList
