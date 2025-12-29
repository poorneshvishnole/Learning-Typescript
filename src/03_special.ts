//UNION TYPE (|)
let subtitle: string | undefined = "sangam";

// void: function doesn't return a useful value
function log(name: string): void {
  console.log(`Hello ${name}`);
}

//never returns (not need to write the type in this case)
function fail(msg: string): never {
  throw new Error(msg);
}

//Do not use type ANY -> try to ignore it as much as possible
