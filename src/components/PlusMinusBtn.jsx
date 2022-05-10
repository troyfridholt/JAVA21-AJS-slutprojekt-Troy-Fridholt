export default function PlusMinusBtn({type, changeDigit}){

    function handleClick(){
        console.log(type);
        changeDigit();
    }

    return <button onClick={handleClick}>{type}</button>
}