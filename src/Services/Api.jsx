import axios from 'axios'

// base url: https://api.themoviedb.org/3/
// url: https://api.themoviedb.org/3/movie/now_playing?api_key=1dc669e0dde823abe4d93e513cf0608d&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;