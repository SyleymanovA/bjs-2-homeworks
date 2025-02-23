'use strict';
function solveEquation (a, b, c){
    const d= b ** 2 -4 * a * c;
    let roots = [];
    if (d<0) {
        return roots;
    }
    if (d===0) {
        const root = -b/(2*a);
        roots.push(root);
        return roots;
    }
    else {
        const root1 = (-b + Math.sqrt(d) )/(2*a);
        const root2 = (-b - Math.sqrt(d) )/(2*a);
        roots.push(root1, root2);
        return roots;
    }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = (percent / 100) / 12;
  let loanBody = amount - contribution;
  if (loanBody <= 0) {
      return 0;
  }
  let monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (Math.pow((1 + monthlyRate), countMonths) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  return Math.round(totalAmount * 100) / 100;
}

