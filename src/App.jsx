import "./App.css";
import { ToastContainer } from "react-toastify";
import { RoutesComponents } from "./components/Router/Routes";
import AddToCart from "./components/clinicForm/Addto";
import NewAddToCart from "./components/NewAddToCart/NewAddToCart";

function App() {
  return (
    <>
      <ToastContainer />

      {/* <ToastContainer />
      <RoutesComponents /> */}

      {/* <AddToCart/> */}

      <NewAddToCart/>
    </>
  );
}
{
  /* <Redirect from="/" to="/login" /> */
}
export default App;
