import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { counterSlice } from "@/features/counter";
import { productSlice } from "@/features/product";

console.log("productSlice", counterSlice, productSlice );


const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  [counterSlice.reducerPath]: counterSlice.reducer,
  [productSlice.reducerPath]: productSlice.reducer,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});
const persistor = persistStore(store);
export { store, persistor };
