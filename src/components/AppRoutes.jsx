import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Albums from "./AlbumsList";
import Album from "./AlbumsList/Album";

const AppRoutes = () => {
    return(
        <Routes>
            <Route
                path="/albums"
                element={<Albums />}
            />
            <Route
                path="/albums/:albumId"
                element={<Album />}
            />
            <Route path="*" element={<Navigate to="/albums" replace />} />
        </Routes>
    );
};

export default AppRoutes;

