import React from 'react';
import './App.scss';
import { Context } from './components/functions/Context';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useInputValue } from './components/Hooks/useInputValue';
import { useLabelText } from './components/Hooks/useLabelText';
import { usePostList } from './components/Hooks/usePostList';
import { useShowOnPage } from './components/Hooks/useShowOnPage';
import { useDisableButton } from './components/Hooks/useDisableButton';


function App() {

  const inputValue = useInputValue(),
    labelText = useLabelText(),
    postList = usePostList(),
    showOnPage = useShowOnPage(),
    disableButton = useDisableButton();

  return (
    <Context.Provider value={{
      inputValue,
      labelText,
      postList,
      showOnPage,
      disableButton,
    }}>
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </Context.Provider>
  );
}
export default App;
