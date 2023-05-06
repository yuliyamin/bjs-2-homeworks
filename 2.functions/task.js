function getArrayParams(...arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((total, val) =>  total += val, 0)   
    const  avg = sum / arr.length 
         return { min: min, max: max, avg: Number(avg.toFixed(2))};
}


function summElementsWorker(...arr) {
    const sum = arr.reduce((total, val) =>  total += val, 0)
    return sum
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) {
        return 0
    }
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const difference = (max - min);
    return difference
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) {
        return 0
    }
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
            sumEvenElement += arr[i];
        } else {
            sumOddElement += arr[i]
        }                
    }
    const difference = sumEvenElement - sumOddElement;
    return difference;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0
    }
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
            (sumEvenElement += arr[i]) && (countEvenElement += 1);
        }                
    }
    const difference = sumEvenElement / countEvenElement;
    return difference;
}

function makeWork (arrOfArr, func) {
    let maxWorkerResult =  - Infinity;
    for (i = 0; i < arrOfArr.length; i++) {
        let result = func (...arrOfArr[i]) 
        if (result > maxWorkerResult) {
            maxWorkerResult = result
        }   
    }
    return maxWorkerResult
}
