import React from 'react'
import emptyImg from '../../assets/img/empty.jpg'
import { Rate } from 'antd'
import format from 'date-fns/format'
import { onRateMovie } from '../../utils/onRateMovie'

import './MovieItem.css'

const MovieItem = (props) => {
  const { item } = props
  const {
    poster_path: img,
    release_date,
    vote_average,
    overview,
    title,
    genre_ids
  } = item
  return (
    <li className="movie__item">
      <div className="movie__block_img">
        <img
          src={img ? `https://image.tmdb.org/t/p/w400${img}` : emptyImg}
          alt={title}
          className="movie__img"
        />
      </div>
      <div className="movie__title">
        <h2 className="title">{title}</h2>
        <div className="circle">
          <span className="vote">{vote_average}</span>
        </div>
      </div>
      <div className="movie__release_content">
        {release_date ? (
          <span className="release_year">
            {format(new Date(release_date), 'MMMM dd, yyyy')}
          </span>
        ) : null}
      </div>
      <div className="movie__genre_content">
        {genre_ids.map((el, id) => (
          <div
            key={`${new Date().getMilliseconds()} ${id}`}
            className="genre_wrapper"
          >
            <span className="genre">{el.name}</span>
          </div>
        ))}
      </div>
      <div className="movie__desc_content">
        <p className="desc">{overview}</p>
      </div>
      <div className="movie__stars_content">
        <Rate
          allowHalf
          value={vote_average}
          count={10}
          onChange={(value) => onRateMovie(value, item)}
        />
      </div>
    </li>
  )
}

export default MovieItem
