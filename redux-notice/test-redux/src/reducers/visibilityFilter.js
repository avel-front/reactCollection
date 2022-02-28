import {VisibilityFilters} from "../actions";



const { SHOW_ALL } = VisibilityFilters;

// reducer
const setVisibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.filter

        default:
            return state
    }
}

export default setVisibilityFilter;
