//generic functions

// const createWithStringArray = (value: string) => [value];
// const createWithNumberArray = (value: number) => [value];
// const createWithArrayObj = (value: { id: number; name: string }) => {
//   return [value];
// };

// const arrString = createWithStringArray("sinsn");
// const numberArr = createWithNumberArray(221);
// const creteObj = createWithArrayObj({ id: 101, name: "sinan" });

const createWithArrayGeneric = <T>(velue: T) => {
  return [velue];
};

const arrString = createWithArrayGeneric("sinsn");
const numberArr = createWithArrayGeneric(221);
const creteObj = createWithArrayGeneric({ id: 101, name: "sinan" });

console.log(arrString, numberArr, creteObj);

const creaArrayWithTupple = (prams1: string, prams2: string) => [
  prams1,
  prams2,
];

const createWithArrayTuppleGeneric = <T, X>(params1: T, params2: X) => [
  params1,
  params2,
];

const res1 = createWithArrayTuppleGeneric(10, 20);
const res2 = createWithArrayTuppleGeneric("sinan", "raju");


//
const AddStudentToCourse=<T>(studetInfo:T)=>{
    return {
        course:'next',
        ...studetInfo
    }
}

const student1=AddStudentToCourse({
    id:'101',
    name:'sinan',
    isPen:true
})

console.log(student1)