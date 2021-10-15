import React, { createContext } from 'react';
import { useInputValue } from '../Hooks/useInputValue';
import { useLabelText } from '../Hooks/useLabelText';
import { useGetPostList } from '../Hooks/useGetPostList';
import { useShowOnPage } from '../Hooks/useShowOnPage';
import { useDisableButton } from '../Hooks/useDisableButton';


export const Context = createContext();

export const ContextProvider = (props) => {
    const inputValue = useInputValue();
    const labelText = useLabelText();
    const postList = useGetPostList();
    const showOnPage = useShowOnPage();
    const disableButton = useDisableButton();


    return (
        <Context.Provider  value={{
            inputValue,
            labelText,
            postList,
            showOnPage,
            disableButton,
        }}>
            {props.children}
        </Context.Provider>
    );
}