import { createStore } from 'redux';

const initialState = {
  posts: [],
  signUpModal: {
    open: false,
  },
};

const reducer = (state = initialState, action) => {
  return state;
}

const store = createStore(reducer);

export default store;
