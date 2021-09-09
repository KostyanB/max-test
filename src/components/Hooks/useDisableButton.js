import { useState } from 'react';

export const useDisableButton = () => {
    const [ disablePrev, setDisablePrev ] = useState(true);
    const [ disableNext, setDisableNext ] = useState(false);

    return { disablePrev, setDisablePrev, disableNext, setDisableNext }
}