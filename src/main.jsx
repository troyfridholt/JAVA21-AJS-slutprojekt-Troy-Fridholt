import ReactDOM from "react-dom/client";
import Login from "./components/Login";
import {useState} from "react";
import Shop from "./components/Shop";
import Login from "./components/Login";

function App(){
    const [logged, setLogged] = useState(false);
    const [username, setUserName] = useState('');

     function ChangeSetLogged(){
         setLogged(!logged);
     }

    return(<>
    {logged ?  <Shop change={ChangeSetLogged} username={username}/> : <Login change={ChangeSetLogged} setUserName={setUserName}/> }
    </>)
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App/>)