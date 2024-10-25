import { useState } from "react";

interface ClickCounterProps{
    title : string;
    message : string;
}

const ClickCounter = ({title, message}: ClickCounterProps) => {

    const [count, setCount] = useState(0)

    const HandleClick = () => {
        setCount((count) => count + 1);
    }

    return (
        <div className="card">
            <h3>{title}</h3>
            <button onClick={HandleClick}>
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