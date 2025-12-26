import react from "react";

function Child({increment}){
    console.log("child rendered");
    return (
        <button onClick={increment}>Increment</button>
    );
}

export default react.memo(Child);