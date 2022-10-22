import * as types from "../../constants/ActionTypes";
import axios from "axios";
import baseUrl from "../../utils/apiConstants";

export const getAlbumPhotos = (page = 1, limit = 20, albumId) => async (dispatch) => {
    try {
        dispatch({
            type: types.GET_ALBUM_PHOTOS,
            payload: {page, limit, albumId},
        });
        const response = await axios.get(
            baseUrl + "photos?albumId=" + albumId + "&_start=" + page + "&_limit=" + limit,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            });
        dispatch({
            type: types.GET_ALBUM_PHOTOS_SUCCESS,
            payload: {photos: response.data, page, limit, albumId}
        });
        return response;
    } catch (err) {
        dispatch({
            type: types.GET_ALBUM_PHOTOS_ERROR,
            payload: err.message,
        });
        return false;
    }
};
