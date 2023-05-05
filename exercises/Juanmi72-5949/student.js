class Student {
    #name;
    #lastname;
    constructor(name, lastname){
        this.#name = name;
        this.#lastname = lastname;
    }
    get fullName(){
        return `Mi nombre es ${this.#name} y mi apellido es ${this.#lastname}`;
    }

    static fromObjet(obj){
        const {name, lastname} = obj;
        return new Student(name, lastname);
    }   
    

}


const studentsInfo = [
        { name: "Ana", lastname:"García", scores: [3, 5, 4, 4.5] }, 
        { name: "Luis", lastname:"Pérez", scores: [4.5, 4 ,4, 5] },
    ];

let obj = {name: "Ana", lastname:"García"};
let student = Student.fromObjet(obj);
console.log(student);
