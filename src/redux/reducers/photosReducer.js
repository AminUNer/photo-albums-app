import * as types from '../../constants/ActionTypes';

const initialState = {
    loading: false,
    errorMessage: "",
    photos: {
        '20': {
            '1': [],
        },
    },
    page: 1,
    limit: 20,
};

const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALBUM_PHOTOS: {
            return {
                ...state,
                loading: true,
                errorMessage: "",
            };
        }
        case types.GET_ALBUM_PHOTOS_SUCCESS: {
            return {
                ...state,
                loading: false,
                photos: {
                    ...state.photos,
                    [action.payload.limit]: {
                        ...state.photos[action.payload.limit],
                        [action.payload.page]: action.payload.photos,
                    },
                },
                page: action.payload.page,
                limit: action.payload.limit,
            };
        }
        case types.GET_ALBUM_PHOTOS_ERROR: {
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            };
        }
        case types.RESET_PHOTOS: {
            return {
                ...state,
                loading: false,
                photos: {
                    '20': {
                        '1': [],
                    },
                },
                limit: 20,
                page: 1,
            };
        }
        default:
            return state;
    }
};

export default photosReducer;

