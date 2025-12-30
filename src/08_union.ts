// value -> this or that

function printId(id: number | string) {
  if (typeof id === "string") {
    return id.toLowerCase();
  } else {
    return id.toFixed(2);
  }
}

//object union
type Admin = { role: "Admin"; permissions: string[] };
type Customer = { role: "Customer"; loyaltyPoints: number };

function describeUser(u: Admin | Customer) {
  if (u.role === "Admin") {
    console.log(u.permissions);
  } else {
    console.log(u.loyaltyPoints);
  }
}

function describeUserWithInOperator(u: Admin | Customer) {
  if ("permissions" in u) {
    console.log(u.role, " Admin user");
  } else {
    console.log(u.loyaltyPoints);
  }
}

//array of unions and unions of arrays
const arrOfUnion: (number | string)[] = ["a", 2, "e", "r"]; //can be both string , number

const unionOfArrays: string[] | number[] =
  Math.random() > 0.5 ? ["2", "3"] : [1, 2, 3]; //either string or array
