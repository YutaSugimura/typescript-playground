export const isPrimeNumber = (num: number) => {
  if (num <= 1) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i < Math.floor(Math.sqrt(num)) + 1; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrimeNumber(2));
console.log(isPrimeNumber(3));
console.log(isPrimeNumber(15));
console.log(isPrimeNumber(64));
console.log(isPrimeNumber(197));
