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
      const { nombre, apellido, ...calificaciones } = obj;
      return new Estudiante(nombre, apellido, calificaciones);
    }
  }
  
  async function calcularPromedios(estudiantes) {
    for (const estudiante of estudiantes) {
      const calificacionesAlCuadrado = estudiante.calificaciones.map((c) => c ** 2);
      const promedio = await calcularPromedio(calificacionesAlCuadrado);
      console.log(`${estudiante.nombreCompleto}: ${promedio}`);
    }
  }
  
  function calcularPromedio(calificaciones) {
    const suma = calificaciones.reduce((acc, c) => acc + c, 0);
    return suma / calificaciones.length;
  }
  
  const estudiantesInfo = [
    { nombre: 'Ana', apellido: 'García', calificaciones: [3, 5, 4, 4.5] },
    { nombre: 'Luis', apellido: 'Pérez', calificaciones: [4.5, 4, 4, 5] }
  ];
  
  const estudiantes = estudiantesInfo.map((info) => Estudiante.fromObject(info));
  
  calcularPromedios(estudiantes);
  