## Ejercicio 1 📚
### Consigna:
1. Crea una clase Estudiante con campos privados para el nombre y apellido, un getter para el nombre completo y un método estático fromObject. -
2. Crea una función asíncrona calcularPromedios que acepte un array de estudiantes.
3. Dentro de calcularPromedios, calcula el promedio de las calificaciones al cuadrado de cada estudiante.
4. Imprime el nombre completo y el promedio de calificaciones de cada estudiante utilizando Template literals.

# Conceptos a tener en cuenta para la resolución de este ejercicio:
- Template literals
– Async functions
- Class 
- Get
- Set

---------------------------------------------------------------------------------------------------
## Ejercicio 2 📚
### Consigna:
1. Crea una función que imprima los números del 1 al 10, un número cada segundo.

# Conceptos a tener en cuenta para la resolución de este ejercicio:
- **Asincronismos** => La programación Asincrona es una técnica que permite a tu programa iniciar una tarea de larga duracion y seguir respondiendo a otros eventos mientras esa tarea se ejecuta, en lugar de tener que esperar hasta que esa tarea haya terminado. Una vez que dicha tarea ha finalizado, tu programa presenta el resultado.
Muchas de las funciones proporcionadas por los navegadores, especialmente las más interesantes, pueden tardar mucho tiempo en ejecutarse. Es precisamente por eso por lo que esas funciones son asíncronas. Por ejemplo:
    El llamado a una API:
    - Realizar peticiones HTTP utilizando fetch()
    - Acceder a la cámara o micrófono de un usuario mediante getUserMedia()
    - Pedir a un usuario que seleccione archivos usando showOpenFilePicker() 

Por lo tanto, aunque no tenga que implementar sus propias funciones asíncronas muy a menudo, necesitará utilizarlas correctamente.

- **Callbacks** 📱 => (Devolveme la llamada) Un CALLBACK es una funcion que se va a ejecutar en el futuro.
    - La función callback es el primer concepto del ASINCRONISMO, en el ejercicio además utilizamos la función *setTimeout()* que esta recibe una función *callback*

- Sintaxis de **setTimeout**
```
setTimeout(functionRef, delay)

```
El método global **setTimeout()** establece un temporizador que ejecuta una función o una pieza de código específica una vez que expira el temporizador.

----------------------------------------------------------------------------------------------------

## Ejercicio 3  📚
### Consigna:
1. Hacer una función que imprima los números del 1 al 10, un número cada segundo, pero usando un ciclo *for* con un *var*. 

# Conceptos a tener en cuenta para la resolución de este ejercicio:

Primer resolución que devuelve 11 ![img](https://user-images.githubusercontent.com/6051056/242687369-7e8a9bb8-1010-4de9-8112-c93b66049fdf.png)

#### Este resultado se debe a los siguientes conceptos: 

- *VAR* = Tiene un **Scope Global**.
- *LET* = Tiene un **Scope Local** que permite declarar variables limitando su **alcance (scope)** al **bloque, declaración, o expresión** donde se está usando. A diferencia de la palabra clave *var* la cual define una variable **global** o **local** en una *función* sin importar el ámbito del bloque. 
    - Otra diferencia entre *var* y *let* es que este último se **inicializa** a un valor sólo cuando un analizador lo evalúa.

### Explicación de como se ejecuta el código que devuelve 11:
````
const ONE_SEC_IN_MS = 1000;

function main() {
    for (var i = 1; i <= 10; i++) {
        function imprimir() {console.log(i)}
        setTimeout(imprimir, ONE_SEC_IN_MS * i)
    }
}

main();
````
Cuando se declara una variable con *var* adentro de un bucle, en realidad se está declarando esa variable para TODA la función.

Por lo tanto, al momento que la función **imprimir** es invocada dentro del **setTimeout**, el bucle ya ha terminado de ejecutarse y el valor de **i** ya es **11** (porque eso es lo que causa la finalización del bucle for), independientemente de cuándo se llame a *imprimir*.

- **Clousures 🌈** => permite acceder al ámbito (Scope) de una función exterior desde una función interior.
## Ejemplo de Clousure de la clase:
```
function createGreetingFunction(greeting) {

    function withName(name) {
        console.log(`${greeting}, ${name}`)
    }
    return withName; // En este caso el clousure sera capaz de recordar que 'greeting' se guarda en la funcion envolvente.

}
const sayHello = createGreetingFunction("Hello");
const decirHola = createGreetingFunction("Hola");
sayHello('Guillermo');
decirHola('Guillermo');


```
### Entonces, aplicando esto a la siguiente solución: 
```
const ONE_SEC_IN_MS = 1000;

function main() {
    
    for (var i = 1; i <= 10; i++) {
        function imprimir(i) {
         return function() { //closure va a recordar el valor, incluso si se ejecuto después.
            console.log(i); // La variable 'i' se guarda en la funcion envolvente.
         }    
        }
        setTimeout(imprimir(i), ONE_SEC_IN_MS * i)
    }
}

main();


```
El clousure en este caso recordara la referencia que guarda la variable *i* en ese momento del ciclo for.

----------------------------------------------------------------------------------------------------
## Ejercicio 4 📚
### Consigna:
1. Crear una funcionalidad que lea una lista de correos y filtre los correos validos y remueva la cadena de texto de *subaddresing*.
```
const emails = [
    "john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net",
    "emily*watsonnotes@examplenet"
];
```

# Conceptos a tener en cuenta para la resolución de este ejercicio: