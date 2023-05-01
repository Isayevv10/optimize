// isPrime
export {};
function isPrime(num: number): string | boolean {
  if (num == 1) {
    return "1 is neither prime nor composity number";
  }
  if (num < 1) {
    return "negative numbers can not be prime";
  }
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
  }
  return true;
}
console.log(isPrime(13));

// isPositive
function isPositive(num: number, cb: (x: number) => number): number {
  if (num > 0) {
    return cb(num);
  } else {
    return 0;
  }
}
function square(num: number) {
  return num ** 2;
}
console.log(isPositive(8, square));

// notRepeated
function notRepeated(str: string): string {
  let str2: string[] = str.split("");
  let char: string = "";
  let count: number = 0;
  for (let i = 0; i < str.length; i++) {
    count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str2[i] == str2[j]) {
        count += 1;
      }
    }
    if (count < 2) {
      char = str2[i];
      break;
    }
  }
  return char;
}
console.log(notRepeated("memmedaga"));

// palindrome
function palindrome(str: string): boolean {
  let str2: string[] = str.split("");
  let left: number = 0;
  let right: number = str2.length - 1;

  while (left < right) {
    if (str2[left] != str2[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(palindrome("mada"));

// intersection
function intersection(arr1: number[], arr2: number[]): number[] {
  let newArr: number[] = arr1.concat(arr2);
  let arrs: number[] | null = [];

  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[i] == newArr[j]) {
        arrs.push(newArr[i]);
      }
    }
  }
  return arrs;
}
console.log(intersection([1, 2, 3], [2, 3, 4]));
