class Estudiante {
  constructor(nombre, apellido) {
    this.name = nombre;
    this.lastName = apellido;
  }
  getName() {
    return `${this.name} ${this.lastName}`;
  }
  static spicies() {
    return `Es un humano`;
  }
}
const estudiantesInfo = [
  { nombre: "Ana", apellido: "García", calificaciones: [3, 5, 4, 4.5] },
  { nombre: "Luis", apellido: "Pérez", calificaciones: [4.5, 4, 4, 5] },
];

async function calcularPromedios(estudiantes) {
  let promedios = {};
  for (let estudiante of estudiantes) {
    let promedio;
    let acumulado = 0;
    let name = `${estudiante.nombre} ${estudiante.apellido}`;

    for (let nota of estudiante.calificaciones) {
      acumulado += nota;
    }

    promedio = acumulado / estudiante.calificaciones.length;

    let promedioCuadrado = promedio ** 2;
    promedios[name] = promedioCuadrado;
  }
  return promedios;
}

calcularPromedios(estudiantesInfo)
  .then((response) => {
    students = Object.entries(response);
    for (let d of students) {
      console.log(`El promedio de ${d[0]} es ${d[1].toFixed(2)}`);
    }
    return students;
  })
  .catch((err) => console.log(err));
