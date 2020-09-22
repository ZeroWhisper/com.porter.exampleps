import axios from 'axios';

export const api_image_url = 'https://image.tmdb.org/t/p/w500/';

export const api_key = '198d3d3577c1913a6ecdced77d704e60';

const baseURL = 'https://api.themoviedb.org/3/';

export const api = axios.create({
  baseURL,
});

export const authentication = {
  get: async () => {
    return await api.get(`authentication/token/new?api_key=${api_key}`);
  },
};

export const movies = {
  upcoming: async page => {
    return await api.get(
      `/movies/get-upcoming?api_key=${api_key}&language=pt-BR&page=${page}`,
    );
  },
};

export default api;
