const chalk = require("chalk");
const fs = require("fs");

const getStudents = () => {
  console.log("Getting student");
};

const addStudents = (name, age, Class) => {
  const students = loadStudents();
  const duplicateData = students.filter((student) => student.name === name);

  if (duplicateData.length === 0) {
    students.push({
      name: name,
      age: age,
      class: Class,
    });
    saveStudents(students);
    console.log(chalk.green("Added a student"));
  } else {
    console.log(chalk.red("Record already in system!"));
  }
};

const removeStudent = (name) => {
  const students = loadStudents();
  const newStudents = students.filter((student) => student.name !== name);
  saveStudents(newStudents);

  if (students.length > newStudents.length) {
    console.log(chalk.green("Removed " + name));
  } else {
    console.log(chalk.red("No such student found"));
  }
};

const listStudent = () => {
  const students = loadStudents();

  students.forEach((student) => {
    console.log(
      "Name : " +
        student.name +
        ", Age : " +
        student.age +
        ", Class : " +
        student.class
    );
  });
};

const readStudent = (name) => {
  const students = loadStudents();
  const foundStudent = students.find((student) => student.name === name);

  if (foundStudent) {
    console.log(chalk.green("Student Found"));
    console.log(
      "Name : " +
        foundStudent.name +
        ", Age : " +
        foundStudent.age +
        ", Class : " +
        foundStudent.class
    );
  } else {
    console.log(chalk.red("No student found!"));
  }
};
const loadStudents = () => {
  try {
    const dataBuffer = fs.readFileSync("students.json");
    const JSONdata = JSON.parse(dataBuffer.toString());
    return JSONdata;
  } catch (e) {
    return [];
  }
};

const saveStudents = (students) => {
  const StringData = JSON.stringify(students);
  fs.writeFileSync("students.json", StringData);
};

module.exports = {
  addStudents: addStudents,
  getStudents: getStudents,
  removeStudent: removeStudent,
  listStudent: listStudent,
  readStudent: readStudent,
};
