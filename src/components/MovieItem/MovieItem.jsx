import React from 'react'

import './MovieItem.css'

const MovieItem = (props) => {
  const {
    poster_path: img,
    release_date,
    vote_average,
    overview,
    title,
    genre_ids
  } = props.item
  return (
    <div className="movie__item">
      <div className="movie__block_img">
        <img
          src={`https://image.tmdb.org/t/p/w400${img}`}
          alt=""
          className="movie__img"
        />
      </div>
      <div className="movie__block_content">
        <div className=""></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default MovieItem
