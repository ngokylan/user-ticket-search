import { TICKETS_SEARCH_ROUTE } from '../const/routes';
import axios from 'axios';

const fetchStoredTickets = () => {
  console.log(TICKETS_SEARCH_ROUTE);
  return axios.get(TICKETS_SEARCH_ROUTE).then((response) => response.data);
};

export default fetchStoredTickets;
