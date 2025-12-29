let username: string = "poornesh";
let age: number = 10;
let big: bigint = 2n ** 63n - 1n;

// Operator '+' cannot be applied to types 'bigint' and 'number'.
// let k = big + age;

const TOKEN: unique symbol = Symbol("TOKEN");

function yearsToDays(year: number): number {
  return year * 365;
}

console.log(username.toUpperCase());
console.log(yearsToDays(2));
