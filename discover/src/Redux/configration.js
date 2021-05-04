import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import MoviesReducer from '../Redux/reducers/moviesReducer';



const reducers = combineReducers({
    //left name is used
    MoviesReducer:MoviesReducer
    
})

const store = createStore(reducers,applyMiddleware(thunk))





export {store}