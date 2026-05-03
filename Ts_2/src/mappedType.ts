const arrayOfNum: number[] = [1, 2, 4, 5];
const arrayOfString: string[] = ["1", "2", "3"];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStringUsingMap);

// mapped type

type Area = {
  height: number;
  width: number;
};

// type AreaOfString = {
//   height: string;
//   width: string;
// };

// type AreaOfString = {
//   [key in "height" | "width"]: string;
// };
type AreaOfString = {
  [key in keyof Area]: string;
};
