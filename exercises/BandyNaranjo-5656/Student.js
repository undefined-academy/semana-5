class Estudiante {
    #nombre;
    #apellido;

    constructor(nombre, apellido) {
      this.#nombre = nombre;
      this.#apellido = apellido;
    }
    get nombreCompleto(){
        return `${this.#nombre} ${this.#apellido}`;
    }
    static fromObject(estudiante){
        const {nombre, apellido} = estudiante;
        return new Estudiante(nombre, apellido);
        
    }
    
  }
async function calcularPromedios(estudiantes){
    for (const estudiante of estudiantes) {
        let acum = 0;
        let indice = 0;
        for (const calificacion of estudiante.calificaciones){
            indice +=  1;
            acum = acum + calificacion**2;
        }
        console.log(`${estudiante.nombre} ${estudiante.apellido} obtuvo ${acum / indice} como promedio`);
    }
}

  const estudiantesInfo = [
    { nombre: "Ana", apellido: "García", calificaciones: [3, 5, 4, 4.5] },
    { nombre: "Luis", apellido: "Pérez", calificaciones: [4.5, 4, 4, 5] },
   ];

const estudiante1 = Estudiante.fromObject({ nombre: "Ana", apellido: "García"});
calcularPromedios(estudiantesInfo);
console.log(estudiante1.nombreCompleto);