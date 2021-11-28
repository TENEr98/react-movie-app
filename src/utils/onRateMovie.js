export const onRateMovie = (count, item) => {
  const movieList = JSON.parse(localStorage.getItem('ratedMovies')) ?? []
  const temp = { ...item, vote_average: count }

  if (movieList.length >= 1) {
    const idx = movieList.findIndex((el) => el.id === temp.id)
    idx !== -1 ? movieList.splice(idx, 1, temp) : movieList.push(temp)
  } else {
    movieList.push(temp)
  }

  localStorage.setItem('ratedMovies', JSON.stringify(movieList))
}
