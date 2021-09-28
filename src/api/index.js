import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_URL
const imageURL = import.meta.env.VITE_IMAGE_URL
const userKEY = import.meta.env.VITE_TOKEN_KEY

const instance = axios.create({ baseURL })
const imageInstance = axios.create({ imageURL })

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
  fetchTopRated(page) {
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
  }
}

export const ImageAPI = {
  fetchImage(id, width) {
    return imageInstance
      .get(`/w${width}/${id}`)
      .then((response) => response)
      .catch((err) => err.response)
  }
}
