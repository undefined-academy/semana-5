class Student {
  #name
  #lastname
  califications

  get fullName(){
    return(`${this.#name} ${this.#lastname}`)
  }

  constructor(name, lastname){
    this.#name = name
    this.#lastname = lastname
  }

  static fromObject (obj){
    const {name, lastname} = obj;
    return new Student (name, lastname);
  }

}

const Juan = new Student(`Juan`,`Frasca`)

Juan.fullName


const studentsInfo = [
  { name: "Ana", lastname: "García", califications: [3, 5, 4, 4.5] },
  { name: "Luis", lastname: "Pérez", califications: [4.5, 4, 4, 5] },
];

function getStudentAvg(students){
  const avgs = students.map(({name, lastname, califications}) => {
    const student = Student.fromObject({name, lastname})
    
    const calificationsSum = califications.reduce((acum,calification) => acum+calification **2)
    const avg = calificationsSum / califications.length

    return {
      fullName: student.fullName,
      avg: avg
    }
  })

  avgs.forEach(({fullName, avg}) => {
    console.log(`${fullName}: ${avg}`)
  })
}

setTimeout(function(){getStudentAvg(studentsInfo)},2000);
console.log("Evaluating students' averages...")