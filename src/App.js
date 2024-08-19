import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddName from './components/AddName';
import NameList from './components/NameList';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        
        <AddName />
        <NameList />
      </div>
    </Provider>
  );
}

export default App;