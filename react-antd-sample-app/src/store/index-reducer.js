import { combineReducers } from 'redux'
import postsReducer from './posts/reducers'


const IndexReducer = combineReducers({
  postsReducer,
  
});

export default IndexReducer