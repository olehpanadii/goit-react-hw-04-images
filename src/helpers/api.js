import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const apiKey = '39180696-751dca007ad69505d1c72e10e';

export const fetchImages = async (serchValue, page = 1) => {
  const response = await axios.get('/', {
    params: {
      key: apiKey,
      q: serchValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  });
  return response.data;
};
