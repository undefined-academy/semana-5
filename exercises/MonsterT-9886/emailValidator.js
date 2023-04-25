function filtrarCorreosValidos(correos) {
    // Convertir la lista de correos en un array
    const correosArray = correos.split("\n");
  
    // Expresión regular para comprobar si el correo es válido
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    // Filtrar los correos que son válidos y remover la cadena de subaddresing
    const correosValidos = correosArray.filter((correo) => {
      if (regexCorreo.test(correo)) {
        const posMas = correo.indexOf("+");
        const posArroba = correo.indexOf("@");
        if (posMas >= 0 && posArroba >= 0 && posMas < posArroba) {
          return correo.substring(0, posMas) + correo.substring(posArroba);
        } else {
          return correo;
        }
      }
    });
  
    // Devolver un nuevo array con los correos válidos sin la cadena de subaddresing
    return correosValidos;
  }
  
  // Ejemplo de uso
  const correos = `john.doe@example.com
  jane_doe+shopping@example.org
  alice.smith+work@example.co.uk
  charlie.brown+newsletter@example.io
  emily.watson+notes@example.net`;
  
  const correosValidosSinSubaddresing = filtrarCorreosValidos(correos);
  console.log(correosValidosSinSubaddresing);
  