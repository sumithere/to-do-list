import React from 'react';
import Bat from './Components/Bat';
import Ball from './Components/Ball';
import {Provider} from "react-redux";
import store from './store'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Ball></Ball>
        {/* <Bat></Bat> */}
      </div>
    </Provider>
  );
}

export default App;
