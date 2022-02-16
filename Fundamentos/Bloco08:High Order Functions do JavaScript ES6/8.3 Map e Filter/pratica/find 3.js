const arrayMyStudents =['Maria','Manuela','Jorge','Ricardo','Wilson'];
const removeStudentByName=(name,listStudents) => listStudents.filter((student)=>student != name);

const newListStudents= removeStudentByName('Ricardo',arrayMyStudents);
console.log(newListStudents);