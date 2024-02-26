import "./App.css";
import { ToastContainer } from "react-toastify";
import { RoutesComponents } from "./components/Router/Routes";

function App() {
  return (
    <>
      <ToastContainer />
      <RoutesComponents />
    </>
  );
}
{
  /* <Redirect from="/" to="/login" /> */
}
export default App;
