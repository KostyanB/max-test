import React, { useRef, useContext }  from "react";
import styled from 'styled-components';
import { Context } from '../Context/Context';
import { Button } from "../Styled/Button";

const HeaderWrap = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    padding-top: 10px;
    border-bottom: 4px double #4f4f4f;
    @media (max-width: 420px) {
        flex-direction: column;
        height: 120px;
        padding-bottom: 10px;
    }
`;
const InputWrap = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
`;
const SearchInput = styled.input`
    height: 50px;
    max-width: 300px;
    border: none;
    border-radius: 10px;
    background-color: #4f4f4f;
    padding-left: 10px;
    padding-right: 10px;
    color: #e5e5e5;
    box-sizing: border-box;
    @media (max-width: 420px) {
        margin-bottom: 10px;
    }
`;
const Label = styled.label`
    position: absolute;
    bottom: 55px;
    left: 10px;
    @media (max-width: 420px) {
        visibility: hidden;
    }
`;
const SearchButton = styled(Button)`
    margin-left: 10px;
    height: 50px;
    width: 100px;
`;

const Header = () => {

    const inputRef = useRef();

    const {
        postList: { setComplete, getPostList },
        inputValue: { inputValue, setInputValue },
        labelText: { labelText },
        showOnPage: { showOnPage, setStartIndex, setStopIndex },
    } = useContext(Context);

    const showResult = e => {
        e.preventDefault();
        setComplete(false);
        setInputValue('');
        setStartIndex(0);
        setStopIndex(showOnPage - 1);
        getPostList(inputRef.current.value);
    };

    const handleChange = e => setInputValue(e.target.value);

    const checkChange = e => (e.target.value !== inputValue) &&
        handleChange(e);

    return (
        <HeaderWrap>
            <InputWrap id="search-form" onSubmit={showResult}>
                <SearchInput ref={inputRef}
                    id="search"
                    value={inputValue}
                    onChange={handleChange}
                    onBlur={checkChange}
                />
                <Label htmlFor="search">{labelText}</Label>
            </InputWrap>
            <SearchButton form="search-form" type="submit">
                Показать
            </SearchButton>
        </HeaderWrap>
    );
}
export default Header;