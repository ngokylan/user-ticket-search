import { ORGANIZATION_SEARCH_ROUTE } from '../const/routes';
import axios from 'axios';

const fetchStoredOrganizations = () => {
    console.log(ORGANIZATION_SEARCH_ROUTE);
  return axios.get(ORGANIZATION_SEARCH_ROUTE).then((response) => response.data);
};

export default fetchStoredOrganizations;
