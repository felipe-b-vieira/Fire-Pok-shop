import { combineReducers } from 'redux';
import pokeReducer from './pokeReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  cartReducer,
  pokeReducer
});
