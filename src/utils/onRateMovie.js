export const onRateMovie = (count, item) => {
  const movieList = JSON.parse(localStorage.getItem('ratedMovies')) ?? []
  const temp = { ...item, vote_average: count }
  if (movieList.length > 0) {
    movieList.forEach((item, idx) =>
      item.id === temp.id
        ? movieList.splice(idx, 1, temp)
        : movieList.push(item)
    )
  } else {
    movieList.push(temp)
  }
  localStorage.setItem('ratedMovies', JSON.stringify(movieList))
}
