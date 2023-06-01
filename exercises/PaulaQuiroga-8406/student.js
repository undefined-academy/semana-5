// 1. Crea una clase Estudiante con campos privados para el nombre y apellido, un getter para el nombre completo y un método estático fromObject. -
// 2. Crea una función asíncrona calcularPromedios que acepte un array de estudiantes.
// 3. Dentro de calcularPromedios, calcula el promedio de las calificaciones al cuadrado de cada estudiante.
// 4. Imprime el nombre completo y el promedio de calificaciones de cada estudiante utilizando Template literals.

const estudentInfo = [
    { name: 'Ana', lastname: 'García', scores: [3, 5, 4, 4.5] },
    { name: 'Luis', lastname: 'Pérez', scores: [4.5, 4, 4, 5] }
  ];

  class Student {
    #name;
    #lastname;
    constructor(name, lastname) {
      this.#name = name;
      this.#lastname = lastname;
    }
      get fullName () {
        return `${this.#name} ${this.#lastname}`;
      }
    static fromObject(obj) {
      return new Student(obj.name, obj.lastname);
    }  

  }

  async function calculateAverage(students) {

      const averages = students.map(({ name, lastname, scores }) => {
        const student = Student.fromObject({
          name, lastname
        })
        
        // [3, 5, 4, 4.5]
        const scoresSum = scores.reduce((acum, score) => 
        acum + score **2 )

        const average = scoresSum / scores.length;

        return {
          fullName: student.fullName,
          average: average?.toFixed(2) ?? "N/A"
        }

      })

      averages.forEach(({ fullName, average}) => {
        console.log(`${fullName}: ${average}`)
      })
  }

  calculateAverage(estudentInfo);
  const ana = new Student("Ana", "Garcia");
  // console.log(ana.fullName);


  const luis = new Student("Luis", "Pérez");
  // console.log(luis.fullName);