/*
window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos()
    
});
*/
let cargarDatos = () =>{

    const nums = Array(100)
        .fill()
        .map((el,i) => i)
    
    const select = document.querySelector("#games");
    
    const ul = document.createElement("ul");
    nums.forEach(element => {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + (element+1)+"/";
        fetch(url)
        .then(res => res.json())
        .then((pokemons) => {
            
            let nombre = pokemons.name
            let fotos = pokemons.sprites.front_default
            /*console.log(pokemons.sprites.front_default)*/
            document.getElementById("exampleSelect1").innerHTML += 
            `
            <option>
                <div>
                    <h3>${nombre}</h3>
                </div>
                <img src"${fotos}">
            </option>
            `
            
            })
        .catch(function(error) {
            console.error("¡Error!", error);
        })
    });
   

}

let mostrarImagen = () =>{
    let select = document.getElementById("exampleSelect1")
    select.addEventListener("change", (event) =>{
        let valor = event.target.value  
        let url = 'https://pokeapi.co/api/v2/pokemon/' + valor+"/";
        fetch(url)
        .then(res => res.json())
        .then((pokemons) => {
            
            let nombre = pokemons.name
            let fotos = pokemons.sprites.front_default
            let frasesfiltradas = pokemons.forms.filter(pokefoto => pokefoto.name == valor);

            document.getElementById("imagen").innerHTML = ''

            for( let pokem of frasesfiltradas) {
            let urlft = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ (pokem.url).split("/")[6] + ".png"
            let a = pokem.url.split("/")
            let plantilla = `
                <div class="col-lg-3">
                    <h3>${pokem.name}</h3>
                    
                    <img src = "${urlft}">
                </div>
            `
            document.getElementById("imagen").innerHTML += plantilla
            }
        
            })
        .catch(function(error) {
            console.error("¡Error!", error);
        })
    });
    

}
cargarDatos()
mostrarImagen()