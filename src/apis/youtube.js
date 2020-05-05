import axios from 'axios';

const KEY = 'AIzaSyDu3g5hZcVCRsOLf0xaYgEEM6zqFyOWnC4'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part:'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
})