import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '28883185-baf66725e1fe3e306d813d750';

export const fetchImages = async (query, page) => {

        const response = await axios.get('', {
            params: {
                q: query,
                page: page,
                key: API_KEY,
                image_type: 'photo',
                orientation: 'horizontal',
                per_page: 12,
        }});
        return response.data.hits;
};


