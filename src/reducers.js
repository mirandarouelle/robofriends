import {CHANGE_SEARCH_FIELD} from './constants.js';

const initialState = {
  searchField: ''
};

export const searchRobots = (state=initialState, action={}) => {
  switch(action.type){
    case CHANGE_SEARCH_FIELD:
      //return { ...state, {searchField: action.payload})}
      return Object.assign({}, state, {searchField: action.payload});
      break;
    default:
      return state;
      break;
  }
}