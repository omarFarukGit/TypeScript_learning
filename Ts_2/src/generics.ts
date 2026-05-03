// daynmic vabe grenealize

// const friends: string[] = ["sinsan", "noyon", "raju"];

type Generic<T>=Array<T>

const friends: Generic<string> = ["sinsan", "noyon", "raju"];
// const rollNumber: number[] = [2, 4, 3];
const rollNumber:Generic<number> = [2, 4, 3];
// const isEligibleList: boolean[] = [true, false, true];
const isEligibleList:Generic<boolean> = [true, false, true];


