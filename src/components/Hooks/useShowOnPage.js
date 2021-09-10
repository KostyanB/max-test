import { useState, useEffect } from 'react';

export const useShowOnPage = () => {
    // const show = settings?.showAmt;
    const showQuantity = 10,
        [ showOnPage, setShowOnPage ] = useState(),
        [ startIndex, setStartIndex ] = useState(0),
        [ stopIndex, setStopIndex ] = useState(),
        [ settingsError, setSettingsError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const result = await fetch('setting.json');
                const res = await result.json();
                const showAmt = res[0].showAmt;
                setShowOnPage(showAmt);
                setStopIndex(showAmt - 1);
            } catch (err) {
                setSettingsError(err);
            }
        })()
    }, [])

    return { showOnPage, setShowOnPage, startIndex, setStartIndex, stopIndex, setStopIndex, settingsError };
}