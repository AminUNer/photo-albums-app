import * as types from '../../constants/ActionTypes';

const initialState = {
    loading: false,
    errorMessage: "",
    albumsArray: [],
    albums: {
        '20': {
            '1': [],
        },
    },
    users: [],
    page: 1,
    limit: 20,
};

const albumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALBUMS: {
            return {
                ...state,
                loading: true,
                errorMessage: "",
            };
        }
        case types.GET_ALBUMS_RECEIVED: {
            return {
                ...state,
                loading: false,
                albumsArray: [
                    ...state.albumsArray,
                    ...action.payload.albums,
                ],
                albums: {
                    ...state.albums,
                    [action.payload.limit]: {
                        ...state.albums[action.payload.limit],
                        [action.payload.page]: action.payload.albums,
                    },
                },
                page: action.payload.page,
                limit: action.payload.limit,
            };
        }
        case types.GET_ALBUMS_ERROR: {
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            };
        }
        case types.GET_USERS: {
            return {
                ...state,
                errorMessage: "",
            };
        }
        case types.GET_USERS_SUCCESS: {
            return {
                ...state,
                users: action.payload.users,
            };
        }
        case types.GET_USERS_ERROR: {
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            };
        }
        default:
            return state;
    }
};

export default albumsReducer;

