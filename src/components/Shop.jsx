
import Products from "./Products";
import { useState } from "react";
import Cart from "./Cart";

export default function Shop({change, username}){

    const [carted, setCarted] = useState(false);
    const [cartSum, setCartSum] = useState(0);
    const [cartNum, setCartNum] = useState(0);

    function changeSetCartSum(arg){
        setCartSum(arg);
    }
    function changeSetCartNum(arg){
        setCartNum(arg);
    }


     function changeSetCarted(){
         setCarted(!carted);
     }

    function handleClick(){
        change();
    }
    if(carted === true){
        return(
            <Cart username={username} handleClick={handleClick} cartSum={cartSum} cartNum={cartNum}/>
        )
    }
    return(<>
        <h1>Inloggad som: {username}</h1>
        
        <button onClick={handleClick}>Logga ut</button> 
        <button onClick={changeSetCarted}>Kundvagn</button>
        <Products changeSetCartNum={changeSetCartNum} changeSetCartSum={changeSetCartSum}/>
        
    </>)
}