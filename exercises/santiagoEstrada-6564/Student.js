/*
1. Crea una clase Estudiante con campos privados para el nombre y apellido, un getter
para el nombre completo y un método estático fromObject.
2. Crea una función asíncrona calcularPromedios que acepte un array de estudiantes.
Dentro de calcularPromedios, calcula el promedio de las calificaciones al cuadrado de
cada estudiante.
3. Imprime el nombre completo y el promedio de calificaciones de cada estudiante
utilizando Template literals
*/

class Estudiante {
    #nombre;
    #apellido;

    constructor(nombre, apellido, calificaciones) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.calificaciones = calificaciones;
    }

    get nombreCompleto() {
        return `${this.#nombre} ${this.#apellido}`;
    }

    static fromObject(obj) {
        const { nombre, apellido, calificaciones } = obj;
        return new Estudiante(nombre, apellido, calificaciones);
    }
}



function square(numbers) {
    return numbers.map(number => number ** 2)
}

function calculateAverage(values) {
    return values.reduce((accumulator, score) => accumulator + score) / (values.length || 1);
}


function showResults(estudiantes) {
    const results = estudiantes.map((obj) => {
        const student = Estudiante.fromObject(obj);

        return {
            fullName: student.nombreCompleto,
            average: calculateAverage(student.calificaciones)
        }

    })

    results.forEach(({ fullName, average }) => {
        console.log(`${fullName}: ${average}`);
    })
}



const estudiantesInfo = [
    { nombre: "Ana", apellido: "García", calificaciones: [3, 5, 4, 4.5] },
    { nombre: "Luis", apellido: "Pérez", calificaciones: [4.5, 4, 4, 5] },
];

showResults(estudiantesInfo);