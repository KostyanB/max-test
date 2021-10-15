import { useState, useEffect } from 'react';
import setting from '../../setting.json';

export const useShowOnPage = () => {
    const [ showOnPage, setShowOnPage ] = useState();
    const [ startIndex, setStartIndex ] = useState(0);
    const [ stopIndex, setStopIndex ] = useState(0);

    useEffect(() => {
        const showAmt = setting.showAmt;
        setShowOnPage(showAmt);
        setStopIndex(showAmt - 1);
    }, []);

    return { showOnPage, setShowOnPage, startIndex, setStartIndex, stopIndex, setStopIndex };
}