import { GET_PERSON, GET_PERSON_ERROR, GET_PERSON_SUCCESS, SET_IS_FETCHING } from "../actions/index";

const initialState = {
person: {
  name: {
    title: 'Mr',
    first: 'Silas',
    last: 'Petersen'
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/men/70.jpg',
    medium: 'https://randomuser.me/api/portraits/med/men/70.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/70.jpg'
  }
},
isFetching: false,
error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
   
    case SET_IS_FETCHING:
       console.log(action);
      return {...state, isFetching: action.payload}
    case GET_PERSON_SUCCESS: 
    console.log(action);
    return {...state, isFetching: false, person: action.payload}
    case GET_PERSON_ERROR:
      return {...state, isFetching: false, error: action.payload}
    default:
      return state;
  }
};
// What is middleware? something that we are able to do something with our state or with some data before dispatching an action?
// we could also, before the reducer gets called, we could call it, have it logged to somewhere?  
// there are a lot of different types of middleware 
// we also use Thunk to be able to call up the APIs asynchronously, and then update our state after we received responses back from our API