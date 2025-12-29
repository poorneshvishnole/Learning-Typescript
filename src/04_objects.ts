//email? -> means it will be absent or if its there so it will be string

type User = {
  id: string;
  userName: string;
  email?: string;
  readonly createdAt: Date;
};

// I've created another user that is of type User
let user1: User = { id: "1", userName: "jhon", createdAt: new Date() };

//keys type
type Count = { [k: string]: number };
let c1: Count = { whatever: 1 };

//record type
type Count1 = Record<"likes" | "views" | "shares", number>;
let c2: Count1 = { likes: 1, views: 2, shares: 5 };
