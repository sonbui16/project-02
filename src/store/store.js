import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { counterSlice } from "@/features/counter";
import { productSlice } from "@/features/product";
import { loadingSlice } from "@/features/loading";

console.log("productSlice", counterSlice, productSlice);

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  [counterSlice.reducerPath]: counterSlice.reducer,
  [productSlice.reducerPath]: productSlice.reducer,
  [loadingSlice.reducerPath]: loadingSlice.reducer,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
const persistor = persistStore(store);
export { store, persistor };
