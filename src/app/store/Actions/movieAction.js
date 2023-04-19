import axios from "axios";
import {keyAuthorization} from '../../../utils/constants'
export const fetchMovies = (page) => async (dispatch) => {
  await axios({
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/playlistItems",
    params: {
      playlistId: 'RDZiQo7nAkQHU',
      part: 'snippet',
      maxResults: '50',
    },
    headers: {
      "X-RapidAPI-Key": keyAuthorization,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  })
    .then((res) => {
        console.log(res.data);
      dispatch({
        type: "FETCH_MOVIES",
        payload: {...res.data, page: page}
      })
    })
    .catch((err) => console.log(err));
};


