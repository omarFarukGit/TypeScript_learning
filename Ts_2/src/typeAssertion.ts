// type asserttion hocce type script er thke beshi bujha /type neveling

let anthing: any;
anthing = "sinsn";

(anthing as string).toLowerCase;

const kgToGMconverter = (input: string | number):string|number|undefined => {
  if (typeof input === "number") {
    return input * 100;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `converted output is:${Number(value)}`;
  }
};

const result = kgToGMconverter(2)
console.log(result);

const result2 = kgToGMconverter("2 kg") as string; // type nawing 3ta type thke 1 ta type e ana
console.log(result2);
