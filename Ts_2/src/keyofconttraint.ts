// keof: type operator

type RichpPeoples = {
  car: string;
  bike: string;
  cng: string;
};

type myVehicle = "bike" | "car" | "cng";
type myVehicle2 = keyof RichpPeoples;

const myVehicle: myVehicle2 = "bike";

// keof constrant

const user = {
  id: 22,
  name: "mejba",
  address: {
    city: "ctg",
  },
};

const myId = user["id"];
const myName = user["name"];
const myAddress = user["address"];

console.log(myId,myName,myAddress)
