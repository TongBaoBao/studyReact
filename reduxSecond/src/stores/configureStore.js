import { createStore, applyMiddleware } from 'redux';
import { logger, thunk} from '../middlerwares/middlerwares';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunk,
            logger
        )
    );
    return store;
}