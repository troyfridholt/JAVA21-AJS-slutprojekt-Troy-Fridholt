import PlusMinusBtn from "./PlusMinusBtn";
import {useState} from "react";

function ItemInfo({header, price, url, changeSetTotalNum, changeSetTotalSum, changeSetPrice}){


    const [digit, setDigit] = useState(0);
    
    function add() {
        
        setDigit(digit + 1);
        changeSetTotalNum(1);
        changeSetTotalSum(price);
        changeSetPrice(price*1);
    }
    function subtract() {
        setDigit(digit - 1);
        changeSetTotalNum(-1);
        changeSetTotalSum(-price);
        changeSetPrice(price*1);

        if (digit == 0) {
            setDigit(digit == 0);
            changeSetTotalNum(0);
        }
    }

    return (
        <div>
         <h2>{header}</h2>
        <h4>Pris: {price}Kr</h4>
        <img src={url} style={{width: '200px'}}></img>            <h2>Varukorgen {digit}</h2>
        <PlusMinusBtn type="+" changeDigit={add}/>
        <PlusMinusBtn type="-" changeDigit={subtract}/>
        </div>
    );
}

export default ItemInfo;