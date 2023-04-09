import Api from "./components/api";
import { useSelector, useDispatch } from "react-redux";
import { ResponseChat } from "./components/ResponseChat";
import Main from './components/Main/Main'

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
