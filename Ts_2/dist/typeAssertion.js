"use strict";
// type asserttion hocce type script er thke beshi bujha /type neveling
Object.defineProperty(exports, "__esModule", { value: true });
let anthing;
anthing = "sinsn";
anthing.toLowerCase;
const kgToGMconverter = (input) => {
    if (typeof input === "number") {
        return input * 100;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `converted output is:${Number(value)}`;
    }
};
const result = kgToGMconverter(2);
console.log(result);
const result2 = kgToGMconverter("2 kg"); // type nawing 3ta type thke 1 ta type e ana
console.log(result2);
//# sourceMappingURL=typeAssertion.js.map