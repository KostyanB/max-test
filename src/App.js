import React from 'react';
import './App.scss';
import { ContextProvider } from './components/Context/Context';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Pagination from './components/Pagination/Pagination';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header/>
        <Main/>
        <Pagination/>
      </div>
    </ContextProvider>
  );
}
export default App;
