//value must be everything from A and from B

type Inter1 = { id: string };
type Inter2 = { createdAt: Date };

type Entity = Inter1 & Inter2;

const e: Entity = { id: "1", createdAt: new Date() };

type Username = { name: string };
type Useremail = { email: string };

type User1 = Username & Useremail;

const u: User1 = { name: "Poornesh", email: "purneshvishnole@gmail.com" };
