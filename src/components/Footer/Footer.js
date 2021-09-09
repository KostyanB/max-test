import React, { useContext } from "react";
import styled from 'styled-components';
import { Context } from "../functions/Context";
import { Button } from '../Styled/Button';

const FooterWrap = styled.div`
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


const Footer = () => {

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
        const newStart = stopIndex + 1,
            newStop = Math.min(newStart + showOnPage, postList.length) - 1;

        setIndexes(newStart, newStop);
        checkButton(newStart, newStop);
    };

    const showPrev = () => {
        const newStart = Math.max(startIndex - showOnPage, 0),
            newStop = newStart + showOnPage -1;

        setIndexes(newStart, newStop);
        checkButton(newStart, newStop);
    };

    return (
        <FooterWrap>
            <PrevButton disabled={disablePrev} onClick={showPrev}>Prev</PrevButton>
            <NextButton disabled={disableNext} onClick={showNext}>Next</NextButton>
        </FooterWrap>
    );
}
export default Footer;