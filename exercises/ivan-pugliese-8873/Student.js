class Student {
    #name;
    #lastname;
 
    constructor(name,lastname) {
         this.#name = name;
         this.#lastname = lastname;
    }
 
    get fullName() {
     return `${this.#name} ${this.#lastname}`
    }
 
    static fromObject(obj) {
     const {name,lastname} = obj;
     return new Student(name,lastname);
    }
 
 }
 
 const ivan = new Student("Ivan", "Pugliese");
 ivan.fullName;
 
 const studentsInfo = [
     { name: "Ana", lastname: "García", scores: [3, 5, 4, 4.5] },
     { name: "Luis", lastname: "Pérez", scores: [4.5, 4, 4, 5] },
 ];
 
 function calculateAverage(students) {
   const averages = students.map(({name, lastname, scores}) => {
     const student = Student.fromObject({name, lastname})  
     const scoresSum = scores.reduce((acum, score) => acum + score);
     const average = scoresSum / scores.length;
     
     return {
       fullname: student.fullName,
       average: average?.toFixed(2) ?? "N/A"
     }
   })
   
   averages.forEach(({fullname, average}) => {
     console.log(`${fullname}: ${average}`)
   })
 }   
          
 
 const FIVE_SECONDS_IN_MS = 5000;

 function sayHej() {
  console.log("Halla Varlden");
 }


 calculateAverage(studentsInfo);    
 console.log("Hello World");
 setTimeout(sayHej,FIVE_SECONDS_IN_MS);
 console.log("Hello World");


