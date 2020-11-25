import { put, takeEvery,all,call } from 'redux-saga/effects'
import * as actions from '././posts/actions';
import * as service from './service';

  function* incrementAsync() {
 try{
  yield put(actions.requestPost());
  const post = yield call(service.getPost);
       if(post.status===200){
    yield put(actions.receivePost(post.data.payload));  
  }
}
catch(error){
    yield put(actions.receivePostFailed());
}}

  function* postCollection() {
    try{
        yield put(actions.requestPost());
        const post = yield call(service.postCollection);
              if(post.status===200){
          yield put(actions.receivePost(post.data.payload));  
        }
      }
      catch(error){
          yield put(actions.receivePostFailed());
      }  
  }
function* deleteCollection() {
    try{
        yield put(actions.requestPost());
        const post = yield call(service.deleteCollection);
     if(post.status===200){
          yield put(actions.receivePost([]));  
        }
      }
      catch(error){
          yield put(actions.receivePostFailed());
      }   
  }
  function* expiredCollection() {
    try{
        yield put(actions.requestPost());
        const post = yield call(service.expiredCollection);
       if(post.status===200){
          yield put(actions.receivePost(post.data.payload));  
        }
      }
      catch(error){
          yield put(actions.receivePostFailed());
      }   
  }




  function* deleteOneDocument(action){

  try{
    yield put(actions.requestPost());
    const post = yield call(service.expiredOneCollection,action.id);
   if(post.status===200){
       yield put(actions.receivePost(post.data.payload));  
    }
  }
  catch(error){
      yield put(actions.receivePostFailed());
  }   
  }
  function* watchDeleteCollectionAsync(){
      yield takeEvery('DELETE_COLLECTION',deleteCollection)
  }

  function* watchExpiredCollectionAsync(){
      yield takeEvery('EXPIRED_ACTIVE_COLLECTION',expiredCollection);
  }
  function* watchDeleteOneDocumentAsync(){
      yield takeEvery('DELETE_ONE_DOCUMENT',deleteOneDocument);
  }
  function* watchPostCollectionAsync() {
    yield takeEvery('POST_COLLECTION',postCollection)
}
function* watchFetchCollectionAsync() {
    yield takeEvery('FETCH_COLLECTION', incrementAsync);
   
  }
export default function* rootSaga() {
   
    yield all([
    
        watchFetchCollectionAsync(),
        watchPostCollectionAsync(),
        watchDeleteCollectionAsync(),
        watchExpiredCollectionAsync(),
        watchDeleteOneDocumentAsync()
      ])
   
  };