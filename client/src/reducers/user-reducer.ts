import { FETCH_DATA, FETCHING_DATA } from './../const/index';

const initialState = {
  items:[],
  loading:true,
  type: 'user'
}


const UserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        loading: false,
        items: action.data ? action.data : [],
      };
    }    
    case FETCHING_DATA: {
      return {
        ...state,
        loading: true,
        items: [],
      };
    }    
    default: {
      return state;
    }
  }
};
export default UserReducer;
