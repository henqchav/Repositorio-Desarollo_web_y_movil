window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos()
    
});

let cargarDatos = () =>{
    const select = document.querySelector("#games");
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=50';
    const ul = document.createElement("ul");
    fetch(url)
    .then(res => res.json())
    .then((pokemons) => {
        let coso = pokemons["results"]
        Object.values(coso).forEach(poke => {
            let elem = document.createElement("li");
            elem.appendChild(document.createTextNode(`${poke["name"]}`));
            ul.appendChild(elem);

        });
        select.appendChild(ul);

        })
    .catch(function(error) {
        console.error("¡Error!", error);
    })

}