export function handleNumberClick(viewedNumber: number, newNumber: number,
  negative: boolean, decimal: boolean) {

  let returnedNumber: number = 0;

  if (viewedNumber === 0) {
    if (negative) {
      if (decimal) {
        returnedNumber = Number(((newNumber * .1) * -1).toFixed(1));
      } else {
        returnedNumber = newNumber * -1;
      }
    } else {
      if (decimal) {
        returnedNumber = Number((newNumber * .1).toFixed(1));
      } else {
        returnedNumber = newNumber;
      }
    }
  } else {
    if (negative) {
      if (decimal) {
        if (viewedNumber % 1 === 0) {
          returnedNumber = viewedNumber - (newNumber * .1);
        } else {
          const decimals = countDecimals(viewedNumber);
          const exponent = decimals + 1;
          const denom = Math.pow(10, exponent);
          const addedNumber = newNumber * (1 / denom);
          returnedNumber = viewedNumber - addedNumber;
          returnedNumber = Number(returnedNumber.toFixed(decimals + 2));
        }
      } else {
        returnedNumber = (viewedNumber * 10) - newNumber;
      }
    } else {
      if (decimal) {
        if (viewedNumber % 1 === 0) {
          returnedNumber = viewedNumber + (newNumber * .1);
        } else {
          const decimals = countDecimals(viewedNumber);
          const exponent = decimals + 1;
          const denom = Math.pow(10, exponent);
          const addedNumber = newNumber * (1 / denom);
          returnedNumber = viewedNumber + addedNumber;
          returnedNumber = Number(returnedNumber.toFixed(decimals + 2));
        }
      } else {
        returnedNumber = (viewedNumber * 10) + newNumber;
      }
    }
  }
  return returnedNumber;
}


function countDecimals(num: number) {
  const strValue = num.toString();
  if (strValue.indexOf('e-') > -1) {
    let [base, trail] = strValue.split('e-');
    let deg = parseInt(trail, 10);
    return deg;
  }
  if (Math.floor(num) !== num) {
    return num.toString().split(".")[1].length || 0;
  }
  return 0;
}
