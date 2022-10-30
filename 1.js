function validator(expression) {
  let count = 0;
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] == "(") count++;
    else if (expression[i] == ")")
      if (count == 0) return false;
      else count--;
  }

  if (count == 0) return true;

  return false;
}

console.log(validator(""));