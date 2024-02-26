import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Store from "./redux/store";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
// const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

const client = new ApolloClient({
  uri: "http://localhost:8000",
  // uri: {baseUrl},
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Provider store={Store}>
          <App />
        </Provider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
