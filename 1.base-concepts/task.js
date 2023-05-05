"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (Math.pow(b,2)-4*a*c)
   if (d == 0) {
     arr = [(-b/(2*a))]
  } else if (d > 0) {
    arr = [(-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a)]
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercentage = percent/100/12;
  let loanBody = amount - contribution;
  let count = countMonths
  let pay = loanBody * (monthlyPercentage + (monthlyPercentage / (((1 + monthlyPercentage)**count) - 1)))
  let summa = pay * countMonths
  return Number(Math.round(summa*100)/100)
}