import * as types from '../../constants/ActionTypes';
import axios from "axios";
import baseUrl from "../../utils/apiConstants";

export const getAlbums = (page = 1, limit = 20) => async (dispatch) => {
    try {
        dispatch({
            type: types.GET_ALBUMS,
        });
        const response = await axios.get(
            baseUrl + "albums?_start=" + page + "&_limit=" + limit,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            });
        dispatch({
            type: types.GET_ALBUMS_RECEIVED,
            payload: {albums: response.data, page, limit}
        });
        return response;
    } catch (err) {
        console.log(err);
        dispatch({
            type: types.GET_ALBUMS_ERROR,
            payload: err.message,
        });
        return false;
    }
};

export const getUsers = () => async (dispatch) => {
    try {
        dispatch({
            type: types.GET_USERS,
        });
        const response = await axios.get(
            baseUrl + "users",
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            });
        dispatch({
            type: types.GET_USERS_SUCCESS,
            payload: {users: response.data}
        });
        return response;
    } catch (err) {
        console.log(err);
        dispatch({
            type: types.GET_USERS_ERROR,
            payload: err.message,
        });
        return false;
    }
};
