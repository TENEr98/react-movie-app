export default (results, genres) => {
  results.map(
    (item) =>
      (item.genre_ids = genres.filter((el) => item.genre_ids.includes(el.id)))
  )
}
