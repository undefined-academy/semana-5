class Student {
  #name;
  #lastName;

  constructor(name, lastName) {
    this.#name = name;
    this.#lastName = lastName;
  }

  get fullName() {
    return `${this.#name} ${this.#lastName}`;
  }

  static fromObject({ name, lastName }) {
    return new Student(name, lastName);
  }
}

async function getAverages(students) {
  return students.map(({ name, lastName, marks }) => {
    const fullName = Student.fromObject({ name, lastName }).fullName;
    const average = marks.reduce((total, mark) => total + mark ** 2) / marks.length;

    return {
      fullName,
      average: average.toFixed(2),
    };
  });
}

const studentsInfo = [
  { name: "Ana", lastName: "García", marks: [3, 5, 4, 4.5] },
  { name: "Luis", lastName: "Pérez", marks: [4.5, 4, 4, 5] },
];

getAverages(studentsInfo).then((averages) => {
  for (let { fullName, average } of averages) {
    console.log(`${fullName}: ${average}`);
  }
});
