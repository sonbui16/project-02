import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.jsx";
import { persistor, store } from "@/store/store";
import { ThemeProvider } from "@/components/theme-provider";
import ErrorBoundary from "./components/ ErrorBoundary.jsx";
import "./index.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  </ErrorBoundary>,
);

const persion = {
  firstName: "Jone",
  age: 12,
  child: {
    firstName: "Nam",
  },
};
const color = [
  "red",
  "green",
  {
    firstName: "yellow",
  },
];
const [value1, value2, { firstName: firstName1 }] = color;
console.log(value1);
console.log(value2);
console.log(firstName1);

const {
  firstName,
  age,
  child: { firstName: childName },
} = persion;

console.log(firstName);
console.log(age);
console.log(childName);

function slideShow({ loop, autoplay, abc = "sonbh" }) {
  console.log(loop);
  console.log(autoplay);
  console.log(abc);
}
slideShow({
  autoplay: false,
  loop: true,
});

function findMax(...rest) {
  console.log(rest);
}
findMax(1, 2, 3, 4);
