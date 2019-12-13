// Your code here
function saturdayFun(str = "roller-skate") {
    return `This Saturday, I want to ${str}!`;
}

let mondayWork = function(str = "go to the office") {
    return `This Monday, I will ${str}.`
}

function wrapAdjective(operator = "*") {
    let op = operator;
    return function(str = "special") {
        return `You are ${op}${str}${op}!`
    }
}

const Calculator = {
    
    add: function(num1, num2) {
        return num1 + num2;
    },

    subtract: function(num1, num2) {
        return num1 - num2;
    },

    multiply: function(num1, num2) {
        return num1 * num2;
    },

    divide: function(num1, num2) {
        return num1 / num2;
    }
}

function actionApplyer (num = 0, arr = []) {
    if (arr.length === 0) {
        return 0;
    } else {
      
      let multiply = arr[0];
      let product = multiply(num);

      let add = arr[1];
      let sum = add(product);
      
      let module = arr[2];
      let remainder = module(sum);
      
      return remainder;
    }
}