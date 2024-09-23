import { SET_AUTOCOMPLETE_OPTIONS, SET_MAP_LOCATION } from '../types';

const initialState = {
  autocompleteOptions: [],
  mapLocation: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTOCOMPLETE_OPTIONS:
      return {
        ...state,
        autocompleteOptions: action.payload,
      };
    case SET_MAP_LOCATION:
      return {
        ...state,
        mapLocation: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
