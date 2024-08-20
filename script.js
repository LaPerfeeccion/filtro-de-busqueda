 // Obtén el cuadro de búsqueda y la lista
 var input = document.getElementById('filtroInput');
 var lista = document.getElementById('listaNombres');
 
 // Agrega un evento de escucha al cuadro de búsqueda
 input.addEventListener('input', function() {
     var filtro = input.value.toLowerCase();
     var elementos = lista.getElementsByTagName('li');
     var elementos2 = lista.getElementsByTagName('img');
     
     // Itera a través de los elementos de la lista y muestra u oculta según el filtro
     for (var i = 0; i < elementos.length; i++) {
         var elemento = elementos[i];
         var elemento2 = elementos2[i];
         var texto = elemento.textContent.toLowerCase();
         
         if (texto.includes(filtro)) {
             elemento.style.display = 'block';
             elemento2.style.display = 'block';
         } else {
             elemento.style.display = 'none';
             elemento2.style.display = 'none';
         }
     }
 });