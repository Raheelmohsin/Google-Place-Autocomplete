import { fetchSearchResultsStart, fetchSearchResultsSuccess, fetchSearchResultsError } from '../actions/searchActions';
import { getPlacesAutocomplete } from '../../utils/api';

export const fetchSearchResults = (searchText) => async (dispatch) => {
  try {
    dispatch(fetchSearchResultsStart());
    const result = await getPlacesAutocomplete(searchText);
    dispatch(fetchSearchResultsSuccess(result));
  } catch (error) {
    dispatch(fetchSearchResultsError(error));
  }
};
