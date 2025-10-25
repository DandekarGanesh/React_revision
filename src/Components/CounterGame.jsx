import { useState } from "react";


function CounterGame() {
    const [count, setCount] = useState(0);


    const incValue = () => {
        if(count >= 10) {
            alert("Count can not be greater than 10");
            return;
        }

        setCount(count+1)
    }



    const decValue = () => {
        if(count <= 0) {
            alert("Count can not be less than 0");
            return;
        }

        setCount(count-1);
    }


    return(
        <div style={{border: '2px solid black', margin: '20px', paddingLeft: '40%'}}>
            <h1 style={{color: 'brown'}}>
                Counter Game 
            </h1>

            <br /> <br />

            <h1>  Game Count is: {count} </h1>  <br /> 

            <button onClick={incValue}> +1 </button>    &nbsp; &nbsp;
            <button onClick={decValue}> -1</button>     <br /> <br />
        </ div>
    )
}


export default CounterGame;