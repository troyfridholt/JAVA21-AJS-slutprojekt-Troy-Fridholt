
export default function Cart({username, handleClick, cartSum, cartNum}){

    function sendAlert(){
        alert('Order klar! Beställda varor ' + cartNum + 'Kalaset kostar: ' + cartSum);
        handleClick();
    }


    return(<>
    <h1>Kundvagn</h1>
    <h4>Inloggad som: {username}</h4>
    <p>Antal i Varukorgen: {cartNum}</p>
    <br />
    <p>Pris: {cartSum} Sek </p>

    <button onClick={handleClick}>Logga ut</button>
    <button onClick={sendAlert}>Köp</button>
    </>)
}