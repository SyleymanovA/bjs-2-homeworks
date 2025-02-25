function getArrayParams(...arr) {
if (arr.length === 0){
    return { min: null, max: null, avg: null };
    }
let min = arr[0];
let max = arr[0];
let sum = 0;
for (let i=0; i<arr.length; i++){
  const element= arr[i];
  if (element>max){
    max = element;
  }
  if (element<min){
    min=element;
  }
  sum += element;
}
const avg = Number((sum/arr.length).toFixed(2));
return { max: max, min: min, avg: avg };
}




function summElementsWorker(...arr) {
if (arr.length === 0){
  return 0;
}
return arr.reduce ((acc,val)=>acc+val,0);
}

function differenceMaxMinWorker(...arr) {
if (arr.length === 0){
    return 0;
  }
const max = Math.max(...arr);
const min = Math.min(...arr);
return max - min;
}

function differenceEvenOddWorker(...arr) {
if (arr.length === 0){
  return 0;
}
let sumEvenElement = 0;
let sumOddElement = 0;
for (const element of arr){
  if (element %2 === 0) {sumOddElement += element;}
  else {sumOddElement += element;}
}
return sumOddElement-sumOddElement;
}

function averageEvenElementsWorker(...arr) {
if (arr.length === 0){
    return 0;
  }
let sumEvenElement = 0;
let countEvenElement = 0;
for (const element of arr){
    if (element %2 === 0) {
    sumEvenElement += element;
    countEvenElement++;
    }
  }
if (countEvenElement === 0) {
  return 0;
  }
return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
if (arr.length === 0){
    return 0;
  }
}
