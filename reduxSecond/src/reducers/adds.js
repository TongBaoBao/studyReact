import {
    ADD
} from '../actions';

function adds(state = [], action) {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                {
                    text: action.text
                }
        ];
        default:
            return state
    }
}

export default adds;