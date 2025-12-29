type Direction = "left" | "right" | "up";

function move(d: Direction): void {
  console.log(d);
}

const d1 = "left"; //Ts keeps literal type because const will not change later
move(d1);

// gives error - Argument of type 'string' is not assignable to parameter of type 'Direction'.
let d2 = "left"; //because let will be changed laterw
// move(d2);

let d3: Direction = "up";
move(d3);
