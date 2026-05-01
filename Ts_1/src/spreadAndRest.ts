// spred mane coray deya/ bichay deya
//rest hocce eksathe kora /ekottrito kora

//spread operator array

const friends: string[] = ["sinan", "noyon"];
const schoolfriends: string[] = ["rohim", "karim"];
const collefeFriends: string[] = ["moin", "rana"];

// const friends:string[]=['sinan','noyon',['rohim','karim']]; //worng

// friends.push(schoolfriends)
friends.push(...schoolfriends);

// spred operator object

const user = { name: "mezmba", phone: "0178501254" };
const otherInfo = { hoby: "jihad", color: "black" };

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);

// rest operation

const sendInvite = (friend1: string, friend2: string, friend3: string) => {
  console.log(`sent invitation to ${friend1}`);
  console.log(`sent invitation to ${friend2}`);
  console.log(`sent invitation to ${friend3}`);
};

sendInvite("sinan", "noyon", "raju",'sfss');

const sendInvited = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`send invitation ${friend}`);
  });
};

sendInvited("sinan", "noyon", "raju");
