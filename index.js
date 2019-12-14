// Your code here


function saturdayFun(activity = "roller-skate") {
    
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(effect = "*") {
    return function(string1 = "special") {
        return `You are ${effect}${string1}${effect}!`
    }
}

let Calculator = {
    add: function() { return (1 +3) },
    subtract: function() { return (1 - 3) }, 
    multiply: function() { return (1 * 3) }, 
    divide: function() { return (10 / 5) }
}

function actionApplyer(startInt, arrFunc) {
    if (arrFunc.length === 0) {
        return startInt
    } else {
        let temp_total = startInt
        arrFunc.forEach(func => {
            temp_total = func(temp_total)
        })
        return temp_total
        // return (((startInt * 2) + 1000) % 7)
       //////// FININSH THIS FOOOOOOOLLLL
    }

}