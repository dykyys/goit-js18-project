import axios from 'axios';

export default {
  searchQuery: 'kiev',
  apiKey: '16190641-6f6d4120eafc733567c1d4bc7',

  makeQuery() {
    const url = `https://pixabay.com/api/?image_type=backgrounds&orientation=horizontal&q=${this.query}&per_page=5&key=${this.apiKey}`;

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
