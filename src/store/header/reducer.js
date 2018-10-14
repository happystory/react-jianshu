import {
  CHANGE_LIST,
  SEARCH_FOCUS,
  SEARCH_BLUR,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  CHANGE_PAGE,
} from './constants';

const defaultState = {
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      return {
        ...state,
        focused: true
      };
    case SEARCH_BLUR:
      return {
        ...state,
        focused: false
      };
    case CHANGE_LIST:
      return {
        ...state,
        list: action.data,
        totalPage: action.totalPage
      };
    case MOUSE_ENTER:
      return {
        ...state,
        mouseIn: true
      };
    case MOUSE_LEAVE:
      return {
        ...state,
        mouseIn: false
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: (state.page + 1) % state.totalPage
      };
    default:
      return state;
  }
}
