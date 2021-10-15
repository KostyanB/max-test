import { useEffect, useState, useCallback } from 'react';
import { setStorage, getStorage } from '../functions/handleStorage';

export const useGetPostList = () => {

    const [postList, setPostList] = useState(null);
    const [error, setError] = useState(null);
    const [ mainTitle, setMainTitle ] = useState();
    const [ complete, setComplete ] = useState(false);

    const getPostList = useCallback(async (search) => {
        try {
            const link = `https://www.reddit.com/r/${search}/hot.json`;
            const result = await fetch(link);
            const res = await result.json();
            const data = res.data.children;
            setPostList(data);
            setMainTitle(search);
            setStorage(search);
            setComplete(true);
        } catch (err) {
            setMainTitle('ошибка запроса')
            setError(err);
        }
    }, [setPostList]);

    useEffect(() => (getStorage()) ? getPostList(getStorage()) :
        setMainTitle('пока отсутствуют'), [getPostList]);

    return { postList, error, mainTitle, getPostList, complete, setComplete };
};