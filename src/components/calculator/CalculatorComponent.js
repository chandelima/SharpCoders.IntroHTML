import { useState } from 'react';
import Button from './Button';
import InputScreen from './InputScreen';

import styles from './CalculatorComponent.module.css'

function CalculatorComponent() {
  
  const operators = ['+', '-', 'x', '÷'];

  const [screenOperationText, setScreenOperationText] = useState("");
  const [screenResultText, setsScreenResultText] = useState("0");
  
  // Functions
  const addScreenDigit = (digit) => {
    let tempOperationText = screenOperationText;

    const newOpAfterAPreviousOne = 
      screenOperationText === "" && screenResultText !== "0";
    if(newOpAfterAPreviousOne) {
      tempOperationText = screenResultText;
    }
    
    const userInputsAnotherOperator =
      checkIfDigitIsOperator(digit) && checkIfLastCharIsOperator();

    if(userInputsAnotherOperator) {
      tempOperationText = screenOperationText.trim()
        .substring(0, (tempOperationText.length - 2));
    }
    
    setScreenOperationText(tempOperationText + digit);
  }

  const backspace = () => {
    const value = screenOperationText
      .substring(0, (screenOperationText.length -1));
    setScreenOperationText(value);
  }
  
  const operation = () => {
    let operationText = screenOperationText;

    operationText = operationText.replace("÷", "/");
    operationText = operationText.replace("x", "*");

    try {
      let result = eval(operationText);
      
      if (result === undefined)
        result = "0";

      setScreenOperationText("");
      setsScreenResultText(result);
    } catch (error) {
      setsScreenResultText("ERRO!");
    }
  }

  const cleanMemory = () => {
    setScreenOperationText("");
    setsScreenResultText("0");
  }

  const checkIfDigitIsOperator = (digit) => {
    let result = false;
    operators.forEach(op => {
      digit.trim() === op && (result = true);
    })

    return result;
  }

  const checkIfLastCharIsOperator = () => {
    let result = false;
    operators.forEach(op => {
      const lastCharIsOperator = (screenOperationText.trim().split(op).length - 1) > 0;
      lastCharIsOperator && (result = true);
    })

    return result;
  }

  // View
  return (
    <>
      <div id={styles.Container}>
        <InputScreen operationText={screenOperationText} resultText={screenResultText} />
        <div id={styles.buttonsContainer}>
          <Button label='AC' onClick={cleanMemory} />
          <Button label='(' onClick={() => addScreenDigit('(')} />
          <Button label=')' onClick={() => addScreenDigit(')')} />
          <Button label='÷' type='operator' onClick={() => addScreenDigit(' ÷ ')} />
          <Button label='7' onClick={() => addScreenDigit('7')} />
          <Button label='8' onClick={() => addScreenDigit('8')} />
          <Button label='9' onClick={() => addScreenDigit('9')} />
          <Button label='x' type='operator' onClick={() => addScreenDigit(' x ')} />
          <Button label='4' onClick={() => addScreenDigit('4')} />
          <Button label='5' onClick={() => addScreenDigit('5')} />
          <Button label='6' onClick={() => addScreenDigit('6')} />
          <Button label='-' type='operator' onClick={() => addScreenDigit(' - ')} />
          <Button label='1' onClick={() => addScreenDigit('1')} />
          <Button label='2' onClick={() => addScreenDigit('2')} />
          <Button label='3' onClick={() => addScreenDigit('3')} />
          <Button label='+' type='operator' onClick={() => addScreenDigit(' + ')} />
          <Button label='・' onClick={() => addScreenDigit('.')} />
          <Button label='0' onClick={() => addScreenDigit('0')} />
          <Button label='<' onClick={backspace} />
          <Button label='=' type='equals' onClick={operation} />
        </div>
      </div>
    </>
  );
}

export default CalculatorComponent;
