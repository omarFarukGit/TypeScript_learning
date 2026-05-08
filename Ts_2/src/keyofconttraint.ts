

type RichPeplesVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type MyVicle1 = "bike" | "car" | "cng";
type MyVicle2 = keyof RichPeplesVehicle;

const myVicle: MyVicle2 = "car";

// key of constant

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user = {
  id: 222,
  name: "Mezba",
  address: {
    city: "ctg",
  },
};

const myId = user.id;
const myName = user.name;
const myAddress = user.address.city;

// console.log(myId,myName,myAddress);

const getPropertyFromObj = <T>(obj: T, key:keyof T) => {
  return obj[key];
};

const result = getPropertyFromObj(user, "name");
console.log(result);

const product={
  brand:"hp"
}

const result2=getPropertyFromObj(product,'not')
