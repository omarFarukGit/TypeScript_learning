"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// nullable types
const getUser = (input) => {
    if (input) {
        console.log(`from DB:${input}`);
    }
    else {
        console.log("from all user DB");
    }
};
getUser("mezba");
const getUsers = (input) => {
    if (input) {
        console.log(`from DB:${input}`);
    }
    else {
        console.log("from all user DB");
    }
};
getUsers(null);
//unknown
const discountCaculator = (input) => {
    if (typeof input === "number") {
        const disPrice = input * 0.1;
        console.log(disPrice);
    }
    else if (typeof input === "string") {
        // const splitedInput = input.split(" ")
        const [disPrice] = input.split(" ");
        console.log(Number(disPrice) * 0.1);
    }
    else {
        console.log("wrong input");
    }
};
discountCaculator(100);
discountCaculator("100 tk");
discountCaculator(null);
//void
const throwError = (msg) => {
    throw new Error(msg);
};
throwError('erreo');
//# sourceMappingURL=nullableUnkonwnNever.js.map