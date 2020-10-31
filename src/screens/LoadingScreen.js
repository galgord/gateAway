import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const LoadingScreen = () => {
    const { isUserSignedIn } = useContext(AuthContext);

    useEffect(() => {
        isUserSignedIn();
    }, []);

    return null;
};

export default LoadingScreen;