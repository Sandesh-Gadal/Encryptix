// script.js
document.addEventListener('DOMContentLoaded', () => {
    const output= document.getElementById('result');
    const inputvalue = document.getElementById('input');
    const currentOperator = document.getElementById('operator');
      let input = '';
    let operator = '';
    let operand = '';
    let tempOperand ='';
    
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.getAttribute('value');
            
            if (value === 'C') {
                input = '';
                operator = '';
                operand = '';
                output.textContent = '';
                inputvalue.textContent = '0';
                currentOperator.textContent='';
            } else if (value === '=') {
                if (operator && operand) {
                    getresult= eval(`${operand} ${operator} ${input}`);
                    output.textContent = getresult;
                    input = getresult;
                    tempOperand = operand;
                    operator = '';
                    operand = '';
                }
            } else if (['+', '-', '*', '/','%'].includes(value)) {
                if (operator) {
                    if (input === '') {
                        operator = value;
                        currentOperator.textContent = operator; 
                    } else {
                        input = eval(`${operand} ${operator} ${input}`);
                        output.textContent = input;
                        operand = input;
                        operator = value;
                        input = '';
                        currentOperator.textContent = operator;
                    }
                } else {
                    operand = input;
                    operator = value;
                    input = '';
                    currentOperator.textContent = operator; 
                }
            } else if (value === "backspace") {
              if(output.textContent === ''){
                input = input.slice(0, -1);
                inputvalue.textContent = input || '0';
              }
              else{
                inputvalue.textContent ='0';
              }
            } else {
                input += value;
                inputvalue.textContent = input;
            }
        });
    });
});
