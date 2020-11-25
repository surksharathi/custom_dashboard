import axios from 'axios';

export function getPost(){
   
  return axios.get(
    `http://localhost:5000/articles`
  ).then(
    response => {
    return { ...response };
    }
  ).catch(
    err => {
      throw err;
    }
  );
}
export function postCollection(){
   
    return axios.post(
      `http://localhost:5000/articles`
    ).then(
      response => {
      return { ...response };
      }
    ).catch(
      err => {
        throw err;
      }
    );
  }

  export function deleteCollection(){
   
    return axios.delete(
      `http://localhost:5000/articles`
    ).then(
      response => {
      return { ...response };
      }
    ).catch(
      err => {
        throw err;
      }
    );
  }
  export function expiredCollection(){
   
    return axios.put(
      `http://localhost:5000/articles/expiredDocument`
    ).then(
      response => {
      return { ...response };
      }
    ).catch(
      err => {
        throw err;
      }
    );
  }
  export function expiredOneCollection(id){
   console.log("service folder id",id)
    return axios.put(
      `http://localhost:5000/articles`,{id:id}
    ).then(
      response => {
      return { ...response };
      }
    ).catch(
      err => {
        throw err;
      }
    );
  }

