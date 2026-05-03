"use strict";
//js normal funtions ,arrow function
Object.defineProperty(exports, "__esModule", { value: true });
// funcotion object use hole seti method
// fuctions loop e user callback functions bole
function addNormal(num1, num2) {
    return num1 + num2;
}
addNormal(2, 2);
const addArrow = (num1, num2) => {
    return num1 + num2;
};
addArrow(4, 4);
// object => functions=>method
const poorUser = {
    name: "mezba",
    balance: 0,
    addBalance(value) {
        const toatalBalnce = this.balance + value;
        return toatalBalnce;
    },
};
poorUser.addBalance(1000);
// callback function
const arr = [1, 4, 6];
const SqrArray = arr.map((elem) => elem * elem);
//# sourceMappingURL=functionType.js.map