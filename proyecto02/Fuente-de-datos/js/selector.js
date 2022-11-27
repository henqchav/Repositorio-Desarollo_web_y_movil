
window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos()
    mostrarImagen()
    
});

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
            let experiencia = pokemons.base_experience
            console.log(pokemons)

            document.getElementById("imagen").innerHTML = ''
            let plantilla = `
                    <div class="col-lg-3">
                        <h3>${nombre}</h3>
                        <img src = "${fotos}">
                        <p>Experiencia base: ${experiencia}</p>
                    </div>
                `
                document.getElementById("imagen").innerHTML += plantilla
            })
        .catch(function(error) {
            console.error("¡Error!", error);
        })
    });
    

}
