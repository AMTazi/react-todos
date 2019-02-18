// @flow
import {VisibilityFilters} from '../actions'

const visibility = (state = VisibilityFilters[0].value, {type,filter})  => {
    switch (type) {
        case "SET_VISIBILITY_FILTER":
            return filter
        default:
            return state;
    }
}

export default visibility;