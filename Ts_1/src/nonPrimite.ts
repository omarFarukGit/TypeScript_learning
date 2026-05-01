// array object =
// ts-tuple

let bazarlist: string[] = ["eggs", "milk"];

let mixdeaArr: (string | number)[] = ["egss", 12, "milk", 1];

//tupple fixed jinis store korar jonne

let coordinate: [number, number] = [20, 10];
// let coordinated: [number, number] = [20, 10, 20];

// refaence type :object

const user: {
  organigations: " programing hero"; // amar value ta fiexd tai type hisebe value tai dibo=> litarel type
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
} = {
  organigations: " programing hero",
  firstName: "mezbaul",
  middleName: "adedin",
  lastName: "forhan",
};
const user1: {
  readonly organigations:string // access modifire
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
} = {
  organigations: " programing hero",
  firstName: "mezbaul",
  middleName: "adedin",
  lastName: "forhan",
};
