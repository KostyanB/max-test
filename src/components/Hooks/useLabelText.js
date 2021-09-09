import { useState } from 'react';

export const useLabelText = () => {
    const [ labelText, setLabelText ] = useState('Введите запрос');

        return { labelText, setLabelText };
}