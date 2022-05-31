import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [logged, setLogged] = useState(false);
  return (
    <div className="App">
      {logged ? (
        <Home
          list={listTransactions}
          setList={setListTransactions}
          setLogged={setLogged}
        ></Home>
      ) : (
        <Login setLogged={setLogged}></Login>
      )}
    </div>
  );
}

export default App;
