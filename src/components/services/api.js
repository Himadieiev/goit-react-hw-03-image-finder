import axios from 'axios';

const KEY = '34391512-847c3dd62fc26ce6cb8d8814a';
axios.defaults.baseURL = `https://pixabay.com/api/`;

export async function getPictures(pictureName, page) {
  const response = await axios.get(
    `?&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12&q=${pictureName}`
  );

  return response.data;
}
