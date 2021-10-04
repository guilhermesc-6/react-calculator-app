import {React, useState} from "react";

const Calculator = ({screen, setScreen}) => {
    const [currentNumber, setCurrentNumber] = useState('');
    const [operator, setOperator] = useState('');
    const [previousNumber, setPreviousNumber] = useState('');

    //Asign the number on screen
    function numberHandler (e) {
        if(e.target.innerText === '.'){
            if(currentNumber.includes('.')){
                return;
            };
        };
        setScreen(screen.concat(e.target.innerText));
        setCurrentNumber(currentNumber.concat(e.target.innerText));
    }

    // Assing the operator
    function operationHandler(e){
        setOperator(e.target.innerText);
        setPreviousNumber(currentNumber);
        setCurrentNumber('');
        setScreen('');
    };

    // Calculate the expression
    function calculate(){
        let result = '';
        switch (operator) {
            case '+':
                result = (Number(previousNumber) + Number(currentNumber));
                setPreviousNumber(result);
                setScreen(result);
                break;
            case '-':
                result = (Number(previousNumber) - Number(currentNumber))
                setScreen(result);
                break;
            case 'x':
                result = (Number(previousNumber) * Number(currentNumber))
                setScreen(result);
                break;
            case '/':
                result = (Number(previousNumber) / Number(currentNumber))
                setScreen(result);
                break;
            default:
                break;
        }
        
    };

    // Delete the last number  
    function deleteLast(){
        
        let numbers = [...currentNumber]
        numbers.pop();
        setCurrentNumber(numbers.toString());
        setScreen(numbers);
    };

    // Delete all values
    function deleteAll(){
        setScreen('');
        setCurrentNumber('');
        setPreviousNumber('');
        setOperator('');
    };

    return(
        <div className="keypad">
            <span onClick={numberHandler} className="keys">7</span>
            <span onClick={numberHandler} className="keys">8</span>
            <span onClick={numberHandler} className="keys">9</span>
            <span onClick={deleteLast} className="keys action">del</span>
            <span onClick={numberHandler} className="keys">4</span>
            <span onClick={numberHandler} className="keys">5</span>
            <span onClick={numberHandler} className="keys">6</span>
            <span onClick={operationHandler} className="keys">+</span>
            <span onClick={numberHandler} className="keys">1</span>
            <span onClick={numberHandler} className="keys">2</span>
            <span onClick={numberHandler} className="keys">3</span>
            <span onClick={operationHandler}  className="keys">-</span>
            <span onClick={numberHandler} className="keys">.</span>
            <span onClick={numberHandler} className="keys">0</span>
            <span onClick={operationHandler}  className="keys">/</span>
            <span onClick={operationHandler}  className="keys">x</span>
            <span onClick={deleteAll} className="keys action reset">reset</span>
            <span onClick={calculate} className="keys equal">=</span>
        </div>
    )
}

export default Calculator;