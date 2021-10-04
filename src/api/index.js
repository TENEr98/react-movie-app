import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_URL
const userKEY = import.meta.env.VITE_TOKEN_KEY

const instance = axios.create({ baseURL })

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  function (error) {
    return error
  }
)

export const MovieAPI = {
  getTopRated(page) {
    return instance
      .get(`/movie/top_rated?api_key=${userKEY}&language=ru-Ru&page=${page}`)
      .then((response) => response)
      .catch((err) => err.response)
  },
  searchMovie(searchValue, page) {
    return instance
      .get(
        `/search/movie?api_key=${userKEY}&language=ru-Ru&query=${searchValue}&page=${page}`
      )
      .then((response) => response)
      .catch((err) => err.response)
  },
  getGenres() {
    return instance
      .get(
        `https://api.themoviedb.org/3//genre/movie/list?api_key=${userKEY}&language=en-En`
      )
      .then((response) => response)
      .catch((err) => err.response)
  }
}
