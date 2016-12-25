import { default as act } from '../actionTypes.js';

const defaultGui = {
  urlCopied: false
}
export default (state = defaultGui, { type, payload }) => {
  switch (type) {
    case act.FLAG_URL_COPIED:
    console.log(type)
  return { ...state, urlCopied: true };
    default:
  return state;
  }
}
  