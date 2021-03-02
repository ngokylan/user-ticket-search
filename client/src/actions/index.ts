import {
  ORGANIZATION_SEARCH_ROUTE,
  TICKETS_SEARCH_ROUTE,
} from './../const/routes';
import { FETCH_DATA, FETCH_USERS_ERROR, FETCHING_DATA } from './../const/index';
import axios from 'axios';
import { USER_SEARCH_ROUTE } from '../const/routes';

const getRequestUrl = (queryParam: string) => {
  const conditions = queryParam.split(';');
  if (!conditions || !Array.isArray(conditions)) {
    return '';
  }

  let baseUrl = USER_SEARCH_ROUTE;
  let queryType = 'user';
  if (conditions[0] && conditions[0].toLowerCase() === 'organization') {
    queryType = 'organization';
    baseUrl = ORGANIZATION_SEARCH_ROUTE;
  } else if (conditions[0] && conditions[0].toLowerCase() === 'ticket') {
    queryType = 'ticket';
    baseUrl = TICKETS_SEARCH_ROUTE;
  }

  const queryTypeParam = `&type=${queryType}`;

  const filterParam = conditions[1] ? `?filter=${conditions[1]}` : '';
  if (!filterParam) {
    return baseUrl;
  }

  return baseUrl + filterParam + queryTypeParam;
};

const fetchData = (queryParam: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: FETCHING_DATA,
      data: [],
    });
    const url = getRequestUrl(queryParam);
    const res = await axios.get(url);
    console.log(res);
    dispatch({
      type: FETCH_DATA,
      data: res.data,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: FETCH_USERS_ERROR,
      data: console.log(e),
    });
  }
};

export default {
  fetchData,
};
