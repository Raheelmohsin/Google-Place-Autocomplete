import { SET_AUTOCOMPLETE_OPTIONS, SET_MAP_LOCATION } from '../types';
import { getAutocompletePredictions, getPlaceDetails } from '../../utils/api';

// Action to set autocomplete options
export const setAutocompleteOptions = (options) => ({
  type: SET_AUTOCOMPLETE_OPTIONS,
  payload: options,
});

// Action to set map location
export const setMapLocation = (location) => ({
  type: SET_MAP_LOCATION,
  payload: location,
});

// Thunk to handle autocomplete search
export const searchAutocomplete = (query) => async (dispatch) => {
  try {
    const predictions = await getAutocompletePredictions(query);
    dispatch(setAutocompleteOptions(predictions));
  } catch (error) {
    console.error('Autocomplete search failed:', error);
    dispatch(setAutocompleteOptions([]));
  }
};

// Thunk to fetch place details and update map location
export const fetchPlaceDetails = (placeId) => async (dispatch) => {
  try {
    const place = await getPlaceDetails(placeId);
    dispatch(setMapLocation({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    }));
  } catch (error) {
    console.error('Failed to fetch place details:', error);
    dispatch(setMapLocation(null));
  }
};
