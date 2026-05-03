"use strict";
// er modhe strict rules deya; jay functions and object
Object.defineProperty(exports, "__esModule", { value: true });
const AddStudentToCourses = (studetInfo) => {
    return {
        course: "next",
        ...studetInfo,
    };
};
const student2 = AddStudentToCourses({
    id: 201,
    name: "sinan",
    isPen: true,
});
const student3 = AddStudentToCourses({
    id: 121,
    name: 'rakib',
    wathc: 'ss'
});
console.log(student2);
//# sourceMappingURL=contarint.js.map