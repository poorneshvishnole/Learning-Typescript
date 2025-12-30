const raw = '{"id":1,"name:"A"}';

const riskyUser = JSON.parse(raw) as { id: number; name: string }; //not a write way of doing instead of you can do
type User22 = { id: number; name: string };

function isUser(v: unknown): v is User22 {
  return (
    typeof v === "object" &&
    v != null &&
    "id" in v &&
    "name" in v &&
    typeof (v as any).id === "number" &&
    typeof (v as any).name === "string"
  );
}

const maybe = JSON.parse(raw) as unknown;
if (isUser(maybe)) {
  console.log(maybe.name); //safe
}
