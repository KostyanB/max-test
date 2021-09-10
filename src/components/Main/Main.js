import React, { useContext } from "react";
import styled from 'styled-components';
import { Context } from "../functions/Context";
import {RepeatItem} from './RepeatItem';
import MainItem from "./MainItem";

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
        postList: { postList, mainTitle, completeFetch },
    } = useContext(Context);

    return (
        <MainWrap>
            <MainTitle>Результаты запроса: {mainTitle}</MainTitle>
            <ul>
            {(completeFetch && postList) &&
                <RepeatItem start={startIndex}
                    stop={stopIndex}
                >
                    {(index) => (
                    <MainItem key={index}
                        title={postList[index].data.title}
                        link={postList[index].data.url}
                        author={postList[index].data.author_fullname}
                        date={postList[index].data.created}
                    />
                )}
                </RepeatItem>
            }
            </ul>
        </MainWrap>

    )
}
export default Main;