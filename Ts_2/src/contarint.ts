// er modhe strict rules deya; jay functions and object

const AddStudentToCourses = <T extends { id: number; name: string }>(
  studetInfo: T,
) => {
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
  id:121,
  name:'rakib',
  wathc:'ss'
});

console.log(student2);
