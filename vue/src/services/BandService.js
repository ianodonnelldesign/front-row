import axios from 'axios';

export default {
  getGenres() {
    return axios.get('/genres');
  },

  getBands() {
    return axios.get(`/bands`);
  },

  getFollowedBands() {
    return axios.get('/my-bands');
  },

  getBand(bandName){
    return axios.get(`/${bandName}`)
  },

  create(band) {
    return axios.post('/create-band', band);
  },

  followBand(bandId) {
    return axios.post(`/subscribe/${bandId}`);
  },

  unfollowBand(bandId) {
    return axios.delete(`/unsubscribe/${bandId}`);
  },

  getIsFollowing(bandId) {
    return axios.get(`/is-following/${bandId}`);
  },

  updateRole(role) {
    return axios.put(`/change-role/${role}`);
  },

  getManagedBands() {
    return axios.get('/managed-bands');
  }

}
