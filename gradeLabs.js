function gradeLabs(labs) {
  try {
    for (let i = 0; i < labs.length; i++) {
      let grade = labs[i];
      let result = grade.runLab(3);
      console.log(`${grade.student} code worked: ${result === 9}`);
    }
  } catch (error) {
    console.log(error.message);
  }
}

let studentLabs = [
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];

gradeLabs(studentLabs);
