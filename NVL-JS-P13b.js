
    var fraseUser = prompt("Frase");
    // Hay que comparar las frases
    function frasePalindromo(fraseUser){
      // A minúsculas y sin espacios
      fraseUser=fraseUser.toLowerCase().replace(/\s/g,"");
      // pasar a array otra frase y lo pasa a string
      fraseReverse=fraseUser.split("").reverse().toString();
      // Le quito las "," con un replace dentro del for
      // Lo igualo a -1 ya que tiene una coma menos que el número total de letras
      for (var i = 0; i < ((fraseReverse.length)-1); i++) {
        fraseReverse=fraseReverse.replace(",","");
      };
      // Comparo las dos frases.
      if(fraseUser==fraseReverse){
        // Si el resultado es positivo
        resultado="es un Palindromo";
      }
      else{
        // Si el resultado es negativo
        resultado="no es un Palindromo";
      }
      // Muestro el el resultado
      controle.log(resultado);
    }
    // Llamo a la función comparación con el parámetro del user
    frasePalindromo(fraseUser);