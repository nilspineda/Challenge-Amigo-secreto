
let nombres = [];

const lista = document.querySelector('.lista')
const input = document.querySelector('#nombre');
const btn = document.querySelector('#btnAgregar')



function mostrarLista() {
    lista.innerHTML = nombres.map(n => `<li>${n}</li>`).join('');

}


btn.addEventListener('click', ()=> {
const valor = input.value.trim();

    if(valor === ''){
        alert('Añador nombres') 
        
    } 
     else {
        nombres.push(valor)
        input.value=''
        mostrarLista();
    }
});


const btnSortear = document.querySelector('#sortearAmigos');

btnSortear.addEventListener('click', function() {  // ✅ Función 
  
    if (nombres.length === 0) {
        alert('Debe Añadir amigos a la lista');
        return;
    }

        const randomIndex = Math.floor(Math.random() * nombres.length)
        const elegido = nombres[randomIndex];
    
        console.log(elegido)

   

    lista.innerHTML = `<h3 class='text-green-800 text-2xl'>El amigo elegido es: <strong>${elegido} </strong></h3>`;

});
