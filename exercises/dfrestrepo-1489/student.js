// Clase 1 [EJERCICIO]
// Crea una clase Estudiante con campos privados para el nombre y apellido, un getter para el nombre completo y un método estático fromObject.
// Crea una función asíncrona calcularPromedios que acepte un array de estudiantes.
// Dentro de calcularPromedios, calcula el promedio de las calificaciones al cuadrado de cada estudiante.
// Imprime el nombre completo y el promedio de calificaciones de cada estudiante utilizando Template literals.
// Usa el siguiente array de estudiantes como entrada:**

const estudiantesInfo = [
    { name: 'Ana', lastName: 'García', scores: [3, 5, 4, 4.5] },
    { name: 'Luis', lastName: 'Pérez', scores: [4.5, 4, 4, 5] }
  ];
  
  class Student{
  
      // Existen pero no puedo accesder literalmente al atributo
      #name;
      #lastName;
  
      constructor(name, lastName, ratings){
          this.#name = name;
          this.#lastName = lastName;
          this.ratings = ratings;
      }
  
      fullName(){
          return `${this.#name} ${this.#lastName}`;
      }
  
      static fromObject(obj) {
          const {name, lastName} = obj
          return new Student(name, lastName);
      }
  }
  
  const student1 = new Student("Dani", "Restrepo", [3,4,2,1,5])
  
  student1.fullName();
  // RESP: Daniel Restrepo
  
  student1.name;
  // RESP: undefined
  
  
  
  // PARTE2 la función que hace el promedio
  
  function averageCalculator(students){
      const average = students.map(({name, lastName, scores}) => {
  
          const student = Student.fromObject({name, lastName});
  
          const scoreSum = scores.reduce((acum,score) => acum + score)
  
          const average = scoreSum / scores.length;
  
          return {
              fullName: student.fullName(),
              average: average?.toFixed(2) ?? 'N/A'
          }
      })
  
      average.forEach(({ fullName, average }) => {
          console.log(`${fullName}: ${average}`)
      })
  
  }
  
  averageCalculator(estudiantesInfo);