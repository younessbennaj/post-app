import { combineReducers } from 'redux';

const posts = (state = [], { type, payload }) => {
    switch (type) {
        case 'FETCH_API_DATA':
            return [...state, ...payload.data];
    }

    return state;


};

export default combineReducers({
    posts
});