export const fetchPost = () => ({
	type: 'FETCH_COLLECTION',
	
  });
  export const requestPost = () => ({
	type: 'REQUEST_COLLECTION',
  });
  export const receivePost = (post) => ({
	type: 'RECEIVE_COLLECTION',
	post,
	
  });
  
  export const receivePostFailed = () => ({
	type: 'RECEIVE_COLLECTION_FAILED'
  });
  
  export const hideWarning = () => ({
	type: 'HIDE_WARNING'
  });

  /**Post request Data */
  export const postCollection=()=>({
	type:"POST_COLLECTION"
  });
  export const deleteCollection=()=>({
  type:"DELETE_COLLECTION"
  });

  export const expiredActiveCollection=()=>({
	  type:"EXPIRED_ACTIVE_COLLECTION"
  })
  export const deleteOneDocument=(id)=>({
	  type:"DELETE_ONE_DOCUMENT",
	  id
  })

