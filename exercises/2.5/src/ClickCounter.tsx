import { useState } from "react";

interface ClickCounterProps{
    title : string;
    message : string;
    buttonMessage : string;
}

const ClickCounter = ({title, message}: ClickCounterProps) => {

    const [count, setCount] = useState(0)

    const HandleClick = () => {
        setCount((count) => count + 1);
    }

    const [buttonMessage, setButtonMessage] = useState("")

    const HandleHover = () => {
        if(buttonMessage === ""){
            setButtonMessage("Please click on me now !");
        }else{
            setButtonMessage("");
        }
        
    }
    
    

    return (
        <div className="card">
            <h3>{title}</h3>
            <p className="buttonMessage">{buttonMessage ? buttonMessage : ""}</p>
            <button onClick={HandleClick} onMouseEnter={HandleHover} onMouseLeave={HandleHover}>
                count is {count}
            </button>
            
            <p>
                {count >= 10 ? message  : ""}
            </p>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
    );
};

export default ClickCounter;