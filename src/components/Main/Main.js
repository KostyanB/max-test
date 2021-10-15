import React, { useContext } from "react";
import styled from 'styled-components';
import { Context } from "../Context/Context";
import Item from "./Item";

const MainWrap = styled.main`
    flex: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 20px;
    overflow-y: auto;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 5px;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: #e5e5e5;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #4f4f4f;
        border-radius: 100px;
    }
`;
const MainTitle = styled.h1`
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
`;

const Main = () => {
    const {
        showOnPage: { startIndex, stopIndex },
        postList: { postList, mainTitle },
    } = useContext(Context);

    return (
        <MainWrap>
            <MainTitle>Результаты запроса: {mainTitle}</MainTitle>
            <ul>
                {postList.slice(startIndex, stopIndex + 1).map((item, i) =>
                        <Item key={i} params={item.data}/>)
                }
            </ul>
        </MainWrap>
    )
}
export default Main;