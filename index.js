// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(action="go to the office") {
    return `This Monday, I will ${action}.`
}

function wrapAdjective(flair="*"){
    return function(para = "special"){
        return `You are ${flair}${para}${flair}!`
    }
}

let Calculator = {
    add: function(num1, num2){return num1+num2},
    subtract: function(num1, num2){return num1-num2},
    multiply: function(num1, num2){return num1*num2},
    divide: function(num1, num2){return num1/num2}
}

function actionApplyer(int, arr){
    let num = int
    arr.forEach((fun) => {
        num = fun(num)
    })
    return num
}