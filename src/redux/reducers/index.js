import { combineReducers } from "@reduxjs/toolkit";
import albumsReducer from './albumsReducer';
import photosReducer from './photosReducer';

const rootReducer = combineReducers({
    albumsReducer,
    photosReducer,
});

export default rootReducer;
