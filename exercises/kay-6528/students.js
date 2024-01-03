const estudiantesInfo = [
  {name: "Ana", lastName: "Garcia", grades: [3, 5, 4, 4.5]},
  {name: "Luis", lastName: "Perez", grades: [4.5, 4, 4, 5]},
  {name: "Suru", lastName: "D.", grades:[0]},
]

class Student {
  #name;
  #lastName;

  constructor(name, lastName){
    this.#name = name;
    this.#lastName = lastName;
  }

  get studentFullName() {
    return `${this.#name} ${this.#lastName}`;

  }

  static fromObj(obj) {
    const {name, lastName} = obj

    return new Student(name, lastName);
  }

}

function getAverage(array){
  studentsAverageArray = array.forEach(({name, lastName, grades}) => {
    const student = Student.fromObj({name, lastName, grades})
    const studenGrades = grades;
    
    let average = studenGrades.reduce((acum, nota) => acum + nota, 0)
    average = (average / studenGrades.length) ** 2;

    console.log(`El promedio de ${student.studentFullName} es: ${average?.toFixed(2) ?? 'N/A'}`)
  })
}

getAverage(estudiantesInfo);


