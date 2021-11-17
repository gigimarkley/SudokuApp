import React from "react";
import { Provider } from "react-redux";
import store from "./client/store";
import Main from "./client/screens/Main";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
