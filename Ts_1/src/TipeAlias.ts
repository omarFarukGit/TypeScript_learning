// type alis hocce  ekta type define kore reuse kora

const user1: {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female"; // type litarel
  contact: string;
  address: {
    division: string;
    city: string;
  };
} = {
  id: 120,
  name: {
    firstName: "sinan",
    lastName: "mia",
  },
  gender: "male",
  contact: "014",
  address: {
    division: "rangpur",
    city: "rangpur",
  },
};

type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female"; // type litarel
  contact: string;
  address: {
    division: string;
    city: string;
  };
};

const user2: User = {
  id: 120,
  name: {
    firstName: "Y",
    lastName: "mia",
  },
  gender: "male",
  contact: "014",
  address: {
    division: "dhaka",
    city: "dhaka",
  },
};

//fuctions type alis

type AddFunc=(num1:number,nam2:number)=>number

const add:AddFunc =(num1,num2)=>num1+num2
