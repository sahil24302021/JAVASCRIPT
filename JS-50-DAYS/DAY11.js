export const primes = (limit) => {
  if (limit < 2) return []
  
  const numbers = new Array(limit + 1).fill(true);
  numbers[0] = false;
  numbers[1] = false;

  for (let i = 2; i * i <= limit; i++) {
    if (numbers[i]) {
      for (let j = i * i; j <= limit; j += i) {
        numbers[j] = false;
      }
    }
  }

  const primeNumbers = [];
  for (let i = 2; i <= limit; i++) {
    if (numbers[i]) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
};
