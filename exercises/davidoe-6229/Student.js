class Student {
    // es un atributo privado cuando se le pone un # al principio
    
        #name;
        #lastname;
    
        constructor(name, lastname) {
            this.#name = name;
            this.#lastname = lastname;
        }
        get fullname() {
            return `${this.#name} ${this.#lastname}`;
        }
    
        static fromObject(obj) {
            const {name, lastname} = obj;
            return new Student(name, lastname);
        }
    }
    
    
    const studentsInfo = [
    
        {name: "Ana", lastname: "Garcia", scores: [3,5,4,4.5]},
        {name: "Luis", lastname: "Perez", scores: [3.,8,6,2]},
    
    ];
    
       
    
    function calculateAverage(students) {
        const average = students.map(({name, lastname, scores}) => {
    
            const student = Student.fromObject({
                name, lastname
            })
    
            const scoresSum = scores.reduce((acum, score) => acum + score)
    
            const average = scoresSum / scores.length;
    
            return {
                fullname: student.fullname,
                average: average?.toFixed(2) ?? "N/A"
            }
        })
    
        average.forEach(({fullname, average}) => {
            console.log(`${fullname}: ${average}`);
        })
    
    
    }
    
    
    calculateAverage(studentsInfo)