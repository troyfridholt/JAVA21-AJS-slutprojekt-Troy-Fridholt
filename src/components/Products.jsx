import itemArr from "./StoreItems";
import ItemInfo from "./ItemInfo";
import { useState } from "react";


export default function Products({changeSetCartSum, changeSetCartNum}) {
    const [totalNum, setTotalNum] = useState(0);
    const [totalSum, setTotalSum] = useState(0);
   

    function changeSetPrice(arg){
        setPrice(arg);   
    }

    function changeSetTotalNum(arg){
        const totNum = totalNum + arg;
        setTotalNum(totNum);
        
    }
    
    function changeSetTotalSum(arg){
        setTotalSum(totalSum + arg);
    }

    changeSetCartNum(totalNum);
    changeSetCartSum(totalSum);


    return (<>
     
        
        {itemArr.map(
            (item)=>{
                return (<div key = {item.id}>
                    <ItemInfo header = {item.header} 
                    price = {item.price} 
                    url = {item.url}
                    changeSetTotalNum={changeSetTotalNum}
                    changeSetTotalSum={changeSetTotalSum}
                    changeSetPrice={changeSetPrice}
                    />
                </div>)
            }
        )}
    </>)
}