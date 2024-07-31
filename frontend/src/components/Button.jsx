import { useState } from "react";

export default function Button(){
    const [state, setState] = useState(0)
    
    function handleClick(){
        return(
            setState(state + 1)
        );
    }

    return(
        <div>
            <button className="btn" onClick={handleClick}>Button</button>
            {state}
        </div>
    );
}