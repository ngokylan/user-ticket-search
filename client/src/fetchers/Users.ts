import { USER_SEARCH_ROUTE } from './../const/routes';
import axios from 'axios';

const fetchStoredUsers = () => {
  console.log(USER_SEARCH_ROUTE);
  return axios.get(USER_SEARCH_ROUTE).then((response) => response.data);
};

export default fetchStoredUsers;
