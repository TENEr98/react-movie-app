import React from 'react'
import MovieItem from '../MovieItem/MovieItem'
import { Pagination } from 'antd'
import Loader from '../Loader/Loader'

import './MovieList.css'

const MovieList = ({ page, loading, movieList, totalItems, onPageChange }) => {
  return !loading ? (
    <div className="movie__block">
      <ul className="movie__list">
        {movieList?.map((item, idx) => (
          <MovieItem key={`${idx}${item.title}`} item={item} />
        ))}
      </ul>
      {totalItems / page > 1 ? (
        <div className="movie__pagination">
          <Pagination
            current={page}
            total={totalItems}
            onChange={onPageChange}
            showTotal={false}
            showSizeChanger={false}
            defaultPageSize={20}
            responsive
            showQuickJumper
          />
        </div>
      ) : null}
    </div>
  ) : (
    <Loader />
  )
}

export default MovieList
