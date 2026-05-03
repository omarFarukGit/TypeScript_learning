"use strict";
//generic functions
Object.defineProperty(exports, "__esModule", { value: true });
// const createWithStringArray = (value: string) => [value];
// const createWithNumberArray = (value: number) => [value];
// const createWithArrayObj = (value: { id: number; name: string }) => {
//   return [value];
// };
// const arrString = createWithStringArray("sinsn");
// const numberArr = createWithNumberArray(221);
// const creteObj = createWithArrayObj({ id: 101, name: "sinan" });
const createWithArrayGeneric = (velue) => {
    return [velue];
};
const arrString = createWithArrayGeneric("sinsn");
const numberArr = createWithArrayGeneric(221);
const creteObj = createWithArrayGeneric({ id: 101, name: "sinan" });
console.log(arrString, numberArr, creteObj);
const creaArrayWithTupple = (prams1, prams2) => [
    prams1,
    prams2,
];
const createWithArrayTuppleGeneric = (params1, params2) => [
    params1,
    params2,
];
const res1 = createWithArrayTuppleGeneric(10, 20);
const res2 = createWithArrayTuppleGeneric("sinan", "raju");
//
const AddStudentToCourse = (studetInfo) => {
    return {
        course: 'next',
        ...studetInfo
    };
};
const student1 = AddStudentToCourse({
    id: '101',
    name: 'sinan',
    isPen: true
});
console.log(student1);
//# sourceMappingURL=genericFuntions.js.map