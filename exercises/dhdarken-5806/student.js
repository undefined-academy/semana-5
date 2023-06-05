class student {
  #name;
  #lastname;
  construsctor(name, lastname) {
    this.#name = name;
    this.#lastname = lastname;
  }
  get FullName() {
    return `${this.#name}${this.#lastname} `;
  }
  static fromObject(obj) {
    const { name, lastname } = obj;
    return new student(name, lastname);
  }
}
const studentsInfo = [
  { name: "ana", lastname: "garcia", scores: "3.5,4,4.5" },
  { name: "luis", lastname: "perez", scores: "4.5,4,4.5" },
];
function calculateAverage(students) {
  const averages = students.map(({ name, lastname, scores }) => {
    const student = student.fromObject({ name, lastname });
    const scoresSum = scores.reduce((acum, score) => acum + score);
    const average = scoresSum / scores.length;
    return {
      fullname: student.fullname,
      average: average?.toFixed(2) ?? "N/A",
    };
  });
  averages.forEach(({ fullname, average }) => {
    console.log(`${fullname}:${average} `);
  });
}
calculateAverage(studentsInfo);
