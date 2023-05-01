class Student{
    #firstName;
    #lastName;
    
    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get fullName(){
        return `${this.#firstName} ${this.#lastName}`
    } 

    static fromObject(obj) {
        const {firstName, lastName} = obj;
        
        return  new Student(firstName, lastName);
    }
}

function averageCompute(estudiantesInfo) {
    studentsList  = []

    for(student of estudiantesInfo) {
        let {nombre: firstName, apellido: lastName, calificaciones: calificaciones} = student;
        
        let newStudent = Student.fromObject({firstName, lastName})

        average=(
            calificaciones.reduce(
                (anterior , actual) => (anterior + actual)
            )
            
        )  /  calificaciones.length;
        
        studentsList.push(
            {
                fullName: newStudent.fullName,
                average: average ** 2
            }
        )
    }

    return studentsList
    
}

console.log("1: Creando un nuevo estudiante");
jose = new Student("Jose", "Arechiga");
console.log(`${jose.fullName}\n`);

console.log("2: Metodo estatico fromObject\n");
pedro =Student.fromObject({firstName: "Antonio", lastName: "Rojo"})
console.log(`Metodo fromObject  ${pedro.fullName} \n`);

const estudiantesInfo = [
    { nombre: "Kipchogue", apellido: "Rojo", calificaciones: [3, 5, 4, 4.5] },
    { nombre: "Kibut", apellido: "Pérez", calificaciones: [4.5, 4, 4, 5] },
];

console.log("3: Desplegar datos  y promedio al cuadrado de los estudiantes\n")
averages = averageCompute(estudiantesInfo);

console.log(averages)
