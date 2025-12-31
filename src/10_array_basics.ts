const a11: number[] = [1, 2, 3]; //T[]
const a22: Array<number> = [1, 2, 3]; //Array<T>

const scores = [1, 2, 3];
// scores.push('1') can't beacuse we're trying to push string on number array

const mix: (string | number)[] = [1, "2", 3];
