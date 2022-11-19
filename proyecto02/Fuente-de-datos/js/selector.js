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
            console.log(fotos)
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
cargarDatos()