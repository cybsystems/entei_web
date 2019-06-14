import React from 'react';
import Routes from './imports/routes';
import { store } from './imports/store';
import { Provider } from 'react-redux'

function App() {
   
  return (
    <div>
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
