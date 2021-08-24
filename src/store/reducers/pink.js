import {MENU_TOGGLE, UPDATE_WIDTH} from "../actions/actionTypes";

const initialState = {
  isMenuOpen: false,
  width: window.innerWidth
}

const handlers = {
  [MENU_TOGGLE]: state => ({...state, isMenuOpen: !state.isMenuOpen}),
  [UPDATE_WIDTH]: (state, {newWidth}) => ({...state, width: newWidth}),
  DEFAULT: state => state
}


export default function pinkReducer(state = initialState, action) {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}