//js normal funtions ,arrow function

// funcotion object use hole seti method
// fuctions loop e user callback functions bole

function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}
addNormal(2, 2);

const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};
addArrow(4, 4);

// object => functions=>method

const poorUser = {
  name: "mezba",
  balance: 0,
  addBalance(value: number): number {
    const toatalBalnce = this.balance + value;
    return toatalBalnce;
  },
};

poorUser.addBalance(1000);


// callback function
const arr:number[]=[1,4,6];

const SqrArray=arr.map((elem:number):number=>elem*elem)
