class Estudiante {
    constructor(nombre = null, apellido = null, calificaciones = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.calificaciones = calificaciones;
    }

    async calcularPromedio() {
        if (this.calificaciones.length === 0) {
            return 0; // return 0 if notas is empty to avoid dividing by 0
        }
        const promedio = this.calificaciones.reduce((a, b) => a + b, 0) /
            this.calificaciones.length;
        return {
            nombreCompleto: `${this.nombre} ${this.apellido}`,
            promedio: promedio
        };
    }
}

const estudiantesInfo = [
    new Estudiante(
        (nombre = "Ana"),
        (apellido = "García"),
        (calificaciones = [3, 5, 4, 4.5])
    ),
    new Estudiante(
        (nombre = "Luis"),
        (apellido = "Pérez"),
        (calificaciones = [4.5, 4, 4, 5])
    ),
];

estudiantesInfo.forEach((estudiante) => {
    estudiante
        .calcularPromedio(estudiante.calificaciones)
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.error(err);
        });
});
