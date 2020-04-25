import { GET_REVIEWS } from "../actions/types";

const initialState = {
    reviews: [],
    totalElements: 0,
    totalPages: 0,
    itemsCountPerPage: 10
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_REVIEWS:
            return {
                ...state,
                reviews: action.payload.content,
                totalElements: action.payload.totalElements,
                totalPages: action.payload.totalPages,
                itemsCountPerPage: action.payload.size
            };

        default:
            return state;
    }
}