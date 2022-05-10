export default function Login({change, setUserName}){

    
    function handleClick(event){
        event.preventDefault();
        change();
    }

    function handleChange(event){
        const value = event.target.value;
        setUserName(value);
    }
    
    return(<>
        <input onChange={handleChange} type="text" placeholder="Användarnamn"></input>
        <button onClick={handleClick}>Logga in</button>     
    </>)
}