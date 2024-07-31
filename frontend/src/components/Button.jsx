import { useState } from "react";

export default function Button(){
    const [state1, setState1] = useState(0)
    const [state2, setState2] = useState(0)
    const [state3, setState3] = useState(0)
    const [state4, setState4] = useState(0)

    return(
        <div>
            <button className="btn" onClick={() => setState1(state1 + 1)}>Button</button>
            {state1}
            <button className="btn" onClick={() => setState2(state2 + 1)}>Button</button>
            {state2}
            <button className="btn" onClick={() => setState3(state3 + 1)}>Button</button>
            {state3}
            <button className="btn" onClick={() => setState4(state4 + 1)}>Button</button>
            {state4}
        </div>
    );
}