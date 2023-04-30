const estudiantesinfo = [
    {   nombre: 'Ana', apellido: 'García', caliicaciones: [3, 5, 4, 4.5] },
    {   nombre: 'Luis', apellido: 'Pérez', caliicaciones: [4.5, 4, 4, 5] }
];

class Estudiante{

    #nombre;
    #apellido;
    constructor(nombre,apellido){
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

    get nombreCompleto(){
        return `${this.#nombre} ${this.#apellido}`;
    }

    static fromObject(obj){
        const {nombre,apellido} = obj;
        return new Estudiante(nombre,apellido);
     }
}

async function calcularPromedios(estudiantes) {

    const promedios = estudiantes.map(({nombre, apellido, calificaciones}) =>{

        const estudiante = Estudiante.fromObject({nombre, apellido});

        const scoresSum = calificaciones.reduce( (acum, calificacion) =>
            acum + calificacion ** 2
        );

        const average = scoresSum / calificaciones.length;

        return {
            fullName: estudiante.nombreCompleto,
            average,
        }

    });

    promedios.forEach(({nombreCompleto, average}) => {
        console.log(`${nombreCompleto} ${average}`)
    })

}

calcularPromedios(estudiantesinfo);