import { useState, useEffect } from 'react';

export const useShowOnPage = () => {
    const showQuantity = 10,
        [ showOnPage, setShowOnPage ] = useState(),
        [ startIndex, setStartIndex ] = useState(0),
        [ stopIndex, setStopIndex ] = useState();

    useEffect(() => {
        setShowOnPage(showQuantity);
        setStopIndex(showQuantity - 1);
    }, [])

    return { showOnPage, setShowOnPage, startIndex, setStartIndex, stopIndex, setStopIndex };
}