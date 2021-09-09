import { useEffect, useState, useCallback } from 'react';
import { setStorage, getStorage } from '../functions/handleStorage';

export const usePostList = () => {

    const [postList, setPostList] = useState(null);
    const [error, setError] = useState(null);
    const [ mainTitle, setMainTitle ] = useState();
    const [ completeFetch, setCompleteFetch ] = useState(false);

    const getFetch = useCallback(async (search) => {
        try {
            const link = `https://www.reddit.com/r/${search}/hot.json`;
            const result = await fetch(link);
            const res = await result.json();
            const data = res.data.children;
            setPostList(data);
            setMainTitle(search);
            setStorage(search);
            setCompleteFetch(true);
        } catch (err) {
            setMainTitle('ошибка запроса')
            setError(err);
        }
    }, [setPostList]);

    useEffect(() => (getStorage()) ? getFetch(getStorage()) :
        setMainTitle('пока отсутствуют'), [getFetch]);

    return { postList, error, mainTitle, getFetch, completeFetch, setCompleteFetch };
};