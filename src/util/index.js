import { api_image_url } from '~/services/api';

export const getUri = path => ({
  uri: `${api_image_url}${path}`,
});
