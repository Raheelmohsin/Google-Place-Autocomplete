export const getAutocompletePredictions = (input) => {
    const autocompleteService = new window.google.maps.places.AutocompleteService();
    return new Promise((resolve, reject) => {
      autocompleteService.getPlacePredictions({ input }, (predictions, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          resolve(predictions.map(prediction => ({
            value: prediction.description,
            placeId: prediction.place_id,
          })));
        } else {
          reject(status);
        }
      });
    });
  };
  
  export const getPlaceDetails = (placeId) => {
    const map = new window.google.maps.Map(document.createElement('div'));
    const placesService = new window.google.maps.places.PlacesService(map);
  
    return new Promise((resolve, reject) => {
      placesService.getDetails({ placeId }, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          resolve(place);
        } else {
          reject(status);
        }
      });
    });
  };
  