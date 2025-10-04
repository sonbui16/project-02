import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from 'react-redux'
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import {persistor, store} from '@/store/store'
import { PersistGate } from 'redux-persist/integration/react'


createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    {/* <StrictMode> */}
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    {/* </StrictMode> */}
  </ReduxProvider>

);
