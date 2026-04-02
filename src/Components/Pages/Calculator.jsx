import React, { useState, useEffect } from 'react'
import "./Calculator.css"

const Calculator = () => {
    const [display, setDisplay] = useState("0");
    const [prevValue, setPrevValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [newNumber, setNewNumber] = useState(true);

    // Perform calculation
    const calculate = (prev, current, op) => {
        const a = parseFloat(prev);
        const b = parseFloat(current);
        
        const operations = {
            "+": () => a + b,
            "-": () => a - b,
            "*": () => a * b,
            "/": () => b !== 0 ? a / b : "Error",
            "^": () => Math.pow(a, 2),
            "%": () => b !== 0 ? a % b : "Error"
        };

        return operations[op] ? String(operations[op]()) : current;
    };

    // Handle number input
    const handleNumber = (num) => {
        setDisplay(display === "" || newNumber ? String(num) : display + num);
        setNewNumber(false);
    };

    // Handle operators
    const handleOperation = (op) => {
        const currentNum = parseFloat(display);

        if (prevValue === null) {
            setPrevValue(currentNum);
        } else if (operation) {
            const result = calculate(prevValue, currentNum, operation);
            setPrevValue(parseFloat(result));
        }

        setOperation(op);
        setDisplay(""); // Clear display for next number
        setNewNumber(true);
    };

    // Handle equals
    const handleEquals = () => {
        if (operation && prevValue !== null) {
            const result = calculate(prevValue, display, operation);
            setDisplay(result);
            setPrevValue(null);
            setOperation(null);
            setNewNumber(true);
        }
    };

    // Handle decimal
    const handleDecimal = () => {
        if (!display.includes(".")) {
            setDisplay(display + ".");
            setNewNumber(false);
        }
    };

    // Handle backspace
    const handleBackspace = () => {
        if (display.length === 1) {
            setDisplay("0");
            setNewNumber(true);
        } else {
            setDisplay(display.slice(0, -1));
        }
    };

    // Clear all
    const handleClear = () => {
        setDisplay("0");
        setPrevValue(null);
        setOperation(null);
        setNewNumber(true);
    };

    // Handle percentage
    const handlePercent = () => {
        setDisplay(String(parseFloat(display) / 100));
    };

    // Handle keyboard input
    useEffect(() => {
        const handleKeyPress = (e) => {
            const key = e.key;

            if (key >= "0" && key <= "9") {
                handleNumber(parseInt(key));
            } else if (key === ".") {
                handleDecimal();
            } else if (key === "+" || key === "-" || key === "*" || key === "/") {
                e.preventDefault();
                handleOperation(key);
            } else if (key === "Enter" || key === "=") {
                e.preventDefault();
                handleEquals();
            } else if (key === "Backspace") {
                e.preventDefault();
                handleBackspace();
            } else if (key === "Escape") {
                e.preventDefault();
                handleClear();
            } else if (key === "%") {
                e.preventDefault();
                handlePercent();
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [display, prevValue, operation, newNumber]);

    return (
        <div className='calt-main-div'>
            <div className="input">
                <p>{prevValue !== null && operation ? `${prevValue} ${operation}` : ""} {display}</p>
            </div>

            <div className="calt-cols">
                <div className="calt-col-1 col">
                    <button className="btn-num oprs" onClick={handleClear}>C</button>
                    <button className="btn-num oprs" onClick={handleBackspace}>DEL</button>
                    <button className="btn-num oprs" onClick={handlePercent}>%</button>
                    <button className="btn-num oprs" onClick={() => handleOperation("/")}>/</button>
                </div>

                <div className="calt-col-2 col">
                    <button className="btn-num" onClick={() => handleNumber(7)}>7</button>
                    <button className="btn-num" onClick={() => handleNumber(8)}>8</button>
                    <button className="btn-num" onClick={() => handleNumber(9)}>9</button>
                    <button className="btn-num oprs" onClick={() => handleOperation("*")}>×</button>
                </div>

                <div className="calt-col-3 col">
                    <button className="btn-num" onClick={() => handleNumber(4)}>4</button>
                    <button className="btn-num" onClick={() => handleNumber(5)}>5</button>
                    <button className="btn-num" onClick={() => handleNumber(6)}>6</button>
                    <button className="btn-num oprs" onClick={() => handleOperation("-")}>−</button>
                </div>

                <div className="calt-col-4 col">
                    <button className="btn-num" onClick={() => handleNumber(1)}>1</button>
                    <button className="btn-num" onClick={() => handleNumber(2)}>2</button>
                    <button className="btn-num" onClick={() => handleNumber(3)}>3</button>
                    <button className="btn-num oprs" onClick={() => handleOperation("+")}>+</button>
                </div>

                <div className="calt-col-5 col">
                    <button className="btn-num oprs" onClick={() => handleOperation("^")}>x²</button>
                    <button className="btn-num" onClick={() => handleNumber(0)}>0</button>
                    <button className="btn-num" onClick={handleDecimal}>.</button>
                    <button className="btn-num oprs" onClick={handleEquals}>=</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;