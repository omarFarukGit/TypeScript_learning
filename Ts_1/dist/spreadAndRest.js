"use strict";
// spred mane coray deya/ bichay deya
//rest hocce eksathe kora /ekottrito kora
Object.defineProperty(exports, "__esModule", { value: true });
//spread operator array
const friends = ["sinan", "noyon"];
const schoolfriends = ["rohim", "karim"];
const collefeFriends = ["moin", "rana"];
// const friends:string[]=['sinan','noyon',['rohim','karim']]; //worng
// friends.push(schoolfriends)
friends.push(...schoolfriends);
// spred operator object
const user = { name: "mezmba", phone: "0178501254" };
const otherInfo = { hoby: "jihad", color: "black" };
const userInfo = { ...user, ...otherInfo };
console.log(userInfo);
// rest operation
const sendInvite = (friend1, friend2, friend3) => {
    console.log(`sent invitation to ${friend1}`);
    console.log(`sent invitation to ${friend2}`);
    console.log(`sent invitation to ${friend3}`);
};
sendInvite("sinan", "noyon", "raju", 'sfss');
const sendInvited = (...friends) => {
    friends.forEach((friend) => {
        console.log(`send invitation ${friend}`);
    });
};
sendInvited("sinan", "noyon", "raju");
//# sourceMappingURL=spreadAndRest.js.map