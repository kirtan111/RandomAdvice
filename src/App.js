import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        fetchAdvice();
    }, []);

    const fetchAdvice = async () => {
        try {
            const url = await fetch(`https://api.adviceslip.com/advice`);
            const data = await url.json();
            setAdvice(data.slip.advice);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="app">
            <div className="card">
                <h1 className="heading"> {advice} </h1>
                <button className="button" onClick={fetchAdvice}>
                    <span>Give an Advice !</span>
                </button>
            </div>
        </div>
    );
};

export default App;
