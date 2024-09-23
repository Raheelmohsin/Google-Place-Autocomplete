import React from 'react';
import {  Row, Col} from 'antd';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchAutocomplete from './components/SearchAutocomplete';
import Map from './components/Map';


const App = () => (
  <Provider store={store}>
    <div style={{ padding: '20px', backgroundColor:'#e5e5e5', height:'100vh' }}>
    <Row justify="center">
      <Col xs={24} sm={18} md={12} lg={10} xl={8}>
        <Row style={{alignItems:'center', display:'flex', justifyContent:'center'}}>
      <SearchAutocomplete />
      <Map />
      </Row>
      </Col>
      </Row>
    </div>
  </Provider>
);

export default App;
