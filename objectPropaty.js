const student = [
    { name: "razu", id: 71, class: "10" },
    { name: "rakib", id: 60, class: "12" },
    { name: "juwel", id: 20, class: "10" },
    { name: "rashed", id: 22, class: "6" },
];
// const output = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const namePropaty = element.name;
//     output.push(namePropaty);
// }
// console.log(output);

const studentName = student.map(student => student.name);
const studentId = student.map(student => student.id)
const condition = student.filter(student => student.id > 30);
const findOut = student.find(student => student.id > 30);
console.log(findOut);