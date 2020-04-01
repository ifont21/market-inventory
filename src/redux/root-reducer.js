import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import productsReducer from "./products/products.reducer";
import existencesReducer from "./existences/existences.reducer";

export default combineReducers({
  user: userReducer,
  products: productsReducer,
  existences: existencesReducer
});
