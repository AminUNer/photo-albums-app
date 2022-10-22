import React, {useCallback, useEffect, useState} from 'react';
import AppRoutes from './AppRoutes';
import {Alert, Snackbar} from "@mui/material";
import {useSelector} from "react-redux";


const Root = () => {
    const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);

    const errorMessage = useSelector((state) => state.albumsReducer.errorMessage);
    const errorMessagePhotos = useSelector((state) => state.photosReducer.errorMessage);

    const handleCloseError = useCallback(
        (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }
            setErrorSnackbarOpen(false);
        },
        [],
    );


    // check albums reducer errorMessage content and setSnackBarOpen to true in order to show it
    useEffect(() => {
        if (errorMessage || errorMessagePhotos) {
            setErrorSnackbarOpen(true);
        }
    }, [errorMessage, errorMessagePhotos]);

    return (
        <>
            <AppRoutes />
            <Snackbar open={errorSnackbarOpen} autoHideDuration={6000} onClose={handleCloseError}>
                <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
                    {errorMessage || errorMessagePhotos}
                </Alert>
            </Snackbar>
        </>);
};

export default Root;
