import axios from 'axios';
import {pixabayKey} from '../../keys'
export default {
  searchQuery: 'kiev',

  makeQuery() {
    const url = `https://pixabay.com/api/?image_type=backgrounds&orientation=horizontal&q=${this.query}&per_page=5&key=${pixabayKey}`;

    return axios.get(url).then(({ data: { hits } }) => {
      return hits;
    });
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
