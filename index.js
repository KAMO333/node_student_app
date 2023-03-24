const studentUtils = require("./students");
const chalk = require("chalk");
const yargs = require("yargs");


yargs.command({
  command: "add",
  description: "Adding a student",
  builder: {
    name: {
      describe: "takes in students fullname",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "takes in a students age",
      demandOption: true,
      type: "number",
    },
    class: {
      describe: "which class does student attend",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    console.log("Adding Student...");
    studentUtils.addStudents(argv.name, argv.age, argv.class);
  },
});

yargs.command({
  command: "remove",
  description: "removing a student",
  builder: {
    name: {
      describe: "takes in students fullname",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    studentUtils.removeStudent(argv.name);
  },
});

yargs.command({
  command: "list",
  description: "listing a student",
  handler() {
    studentUtils.listStudent();
  },
});

yargs.command({
  command: "read",
  description: "reading a student",
  builder: {
    name: {
      describe: "takes in students fullname",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log("Read student");
    studentUtils.readStudent(argv.name);
  },
});

yargs.argv;


