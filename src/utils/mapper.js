export const mapGenreIds = (results, genres) =>
  results.map((item) => ({
    ...item,
    genre_ids: genres.filter((el) => item.genre_ids.includes(el.id))
  }))

export const mapRateZero = (results) =>
  results.map((item) => ({ ...item, vote_average: 0 }))
