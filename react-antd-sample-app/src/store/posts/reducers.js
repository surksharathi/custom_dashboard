const initialState={
	loading:false,
	error:null,
	collection:[]
}
const reducer = function postReducer(state = initialState, action) {
	
	switch (action.type) {
    /* Get Collection */
		case 'REQUEST_COLLECTION' || 'REQUEST_POST_COLLECTION':
			return {
			  ...state,
			  fetching: true
			};
		  case 'RECEIVE_COLLECTION':
			return {
			  ...state,
			  fetching: false,
			  collection:action.post
			 
			};
		  case 'RECEIVE_COLLECTION_FAILED':
			return {
			  ...state,
			  fetching: false,
			  error: true
			}
		 
		default:
			return state
	}
};

export default reducer
