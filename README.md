# Google Places Autocomplete with Map

A React web application that integrates Google Places Autocomplete with Google Maps. 
Users can search for places using an autocomplete input field, and the selected location is displayed on a Google Map.
The application also stores search history in Redux.

### Features

- `Google Places` Autocomplete API integration for search suggestions.
- Display selected place on `Google Maps`.
- Store search history using `Redux`.
- Responsive layout using `Ant` Design's grid system.

### Requirements

- Node.js >= 12.x
- Google Places API key
- React 16.8+ (hooks support)

### Libraries Used

- `React`: JavaScript library for building user interfaces.
- `Ant Design`: UI component library for React.
- `Google Maps API`: For rendering maps and places.
- `Google Places API`: For fetching place autocomplete suggestions.
- `Redux`: For store search history

### Installation

- Clone the Github repository
- Navigate to Project directory
- Run `npm install` to install packages

### Run the Application

Once everything is set up, run the application:
- run `npm start`
- The application will run on `http://localhost:3000`.

## Code Structure and Explanation

### 1. Components
### `SearchAutocomplete.js`:
- This is the main component that handles the Google Places Autocomplete input and displays the selected place on a Google Map. It also interacts with Redux to store search history.
- The search input is rendered using Ant Design's AutoComplete component.


### `Map.js`:
- This is the second component, in which map will render.When any place is searched, it will display inside map in this component.
- The Google Map is updated dynamically based on the selected location.

### 2. Redux
- `actions.js`:

  - Contains action creators to manage search history in the Redux store.
  - For example, an action to add a new search term to the store.
    
- `reducers.js`:

  - Manages the state of the application related to search history. When a new search term is submitted, it updates the Redux store.
- `types.js`:

  - Holds action type constants like ADD_SEARCH_TERM for better maintainability and avoiding hardcoding strings.
- `store.js`:

  - Configures the Redux store with reducers and middleware like redux-thunk to handle async actions (such as API requests).
 
### 3. Utils
-  `api.js`:
  
    - Contains helper functions for interacting with the Google Places API. For example, fetching place details or suggestions from the API.
    
### 4. App.js
-  The entry point of the application where the Redux store is integrated into the React app using Provider from react-redux.
