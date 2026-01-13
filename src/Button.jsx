
function Button(){

    const styles = {
            
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor:"pointer",

    }

    let count=0;

    const handleClick = (name) => {
        if(count<3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`)
        }
        else{
            console.log(`${name} stop clicking me`);
        }
    };

    const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    const handleClick3 = (e) => e.target.textContent = "ayyo 😁";

    return(
        // <button style={styles} onClick={(e)=>handleClick3(e)}>Click me! 😊</button>
        <button style={styles} onDoubleClick={(e)=>handleClick3(e)}>Click me! 😊</button>
    );
}

export default Button