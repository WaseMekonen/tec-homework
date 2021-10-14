function SafeDiv(num1, num2) {
  if (num2 == 0) {
    throw "Denominator is zero";
  }
  return num1 / num2;
}

console.log(SafeDiv(3, 0));
