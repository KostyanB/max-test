import React, { useContext } from "react";
import styled from 'styled-components';
import { Context } from "../Context/Context";
import { Button } from '../Styled/Button';

const PaginationWrap = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const PrevButton = styled(Button)`
    height: 50px;
    width: 100px;
`;
const NextButton = styled(PrevButton)`
    margin-left: 10px;
`;


const Pagination = () => {

    const {
        showOnPage: { showOnPage, startIndex, setStartIndex, stopIndex, setStopIndex },
        postList: { postList },
        disableButton: { disablePrev, setDisablePrev, disableNext, setDisableNext },
    } = useContext(Context);

    const setIndexes = (start, stop) => {
        setStartIndex(start);
        setStopIndex(stop);
    };

    const checkButton = (start, stop) => {
        (start <= 0) ? setDisablePrev(true) : setDisablePrev(false);
        (stop >= postList.length - 1) ? setDisableNext(true) : setDisableNext(false);
    };

    const showNext = () => {
        const newStartIndex = stopIndex + 1,
            newStopIndex = Math.min(newStartIndex + showOnPage, postList.length) - 1;

        setIndexes(newStartIndex, newStopIndex);
        checkButton(newStartIndex, newStopIndex);
    };

    const showPrev = () => {
        const newStartIndex = Math.max(startIndex - showOnPage, 0),
            newStopIndex = newStartIndex + showOnPage -1;

        setIndexes(newStartIndex, newStopIndex);
        checkButton(newStartIndex, newStopIndex);
    };

    return (
        <PaginationWrap>
            <PrevButton disabled={disablePrev} onClick={showPrev}>Prev</PrevButton>
            <NextButton disabled={disableNext} onClick={showNext}>Next</NextButton>
        </PaginationWrap>
    );
}
export default Pagination;