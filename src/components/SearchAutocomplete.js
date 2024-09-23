import React from 'react';
import { AutoComplete, Typography , Col} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { searchAutocomplete, fetchPlaceDetails } from '../redux/actions/actions';

const variables ={

    heading: 'Google Places Autocomplete with Map',
    placeHolder:'Search for a place'
    }

const { Title } = Typography;

const SearchAutocomplete = () => {

  const dispatch = useDispatch();
  const options = useSelector((state) => state.autocompleteOptions);
  
  const handleSearch = (query) => {
   
    if (query) {
      dispatch(searchAutocomplete(query));  // Dispatch search query for autocomplete
    }
  };

  const handleSelect = (value, option) => {
    dispatch(fetchPlaceDetails(option.placeId));  // Fetch place details on selection
  };



  return (
    <div style={{ padding: '50px' }}>
        <Title level={5}>{variables.heading}</Title>
          <Col span={24}>
            <AutoComplete
              options={options}
              style={{ width: '100%' }}
              onSelect={handleSelect}
              onSearch={handleSearch}
              placeholder={variables.placeHolder}
            />
          </Col>
  </div>
  );
};

export default SearchAutocomplete;
