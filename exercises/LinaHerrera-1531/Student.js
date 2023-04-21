class Estudiante {
    #nombre;
    #apellido;

    constructor(nombre, apellido) {
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

    get nombreCompleto() {
        return `${this.#nombre} ${this.#apellido}`;
    }

    static fromObject(obj) {
        return new Estudiante(obj.nombre, obj.apellido);
    }

//     static fromObject(obj) {
//         const {nombre, apellido}=obj
// }
//  return new Estudiante(nombre,apellido)
}

const estudiantesInfo = [
    { nombre: "Ana", apellido: "Garcia", calificaciones: [3, 5, 4, 4.5] },
    { nombre: "Luis", apellido: "Perez", calificaciones: [4.5, 4, 4, 5] }
]

async function calcularPromedios(estudiantesInfo) {
    const promedios = await Promise.all(
        estudiantesInfo.map(async (estudiante) => {
            const calificaciones = estudiante.calificaciones;
            const promedio = calificaciones.reduce((acc, calif) => acc + calif, 0) / calificaciones.length;
            const promedioAlCuadrado = Math.pow(promedio, 2);
            return { nombreCompleto: Estudiante.fromObject(estudiante).nombreCompleto, promedioAlCuadrado };
        })
    );

    promedios.forEach(({ nombreCompleto, promedioAlCuadrado }) => {
        console.log(`${nombreCompleto} tiene un promedio al cuadrado de ${promedioAlCuadrado}`);
    });
}

//otra forma
function calcAverage(estudiantes){
    const average= estudiantes.map(({nombre,apellido,calificaciones})=>{
        const estudiante=Estudiante.fromObject({
            nombre,apellido
        })
        const sumNotas=calificaciones.reduce((acum, calificacion)=>
    acum+calificacion**2,0)
    const averg=sumNotas/calificaciones.length;
    return{
        nombreCompleto: estudiante.nombreCompleto,
        promed: averg?.toFixed(2)?? "N/A"
    }
    })
    average.forEach(({nombreCompleto, promed})=>{
        console.log(`${nombreCompleto}: ${promed}`)
    })
    }


calcAverage(estudiantesInfo)
calcularPromedios(estudiantesInfo);