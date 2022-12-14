import { useSelector } from "react-redux";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { selectUser } from "./reducers/userSlice";

function App() {
  const user = useSelector(selectUser)
  return (
   <>
    {user ? <Logout/> : <Login/>}
   </>
  );
}

export default App;
