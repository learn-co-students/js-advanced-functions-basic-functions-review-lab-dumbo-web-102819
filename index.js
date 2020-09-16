function saturdayFun (activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(val = "go to the office") {
  return `This Monday, I will ${val}.`
}

function wrapAdjective (fancy = `*`) {
  return (function inner (lol = special){
    return (`You are ${fancy + lol + fancy}!`)})
  }

let Calculator = {
  add : function (a, b){ return a+b},
  subtract : function (a, b){return a-b},
  multiply : function (a, b){return a*b},
  divide : (a, b) => a/b,
}

function actionApplyer (int, funcs){
  if (funcs.length === 0){return int}
  // else {return funcs.forEach(fun => fun(int))}
  else {
    let fin = int;
    funcs.forEach ((fun) => {
      fin = fun(fin)
    })
    return fin
  }
}
