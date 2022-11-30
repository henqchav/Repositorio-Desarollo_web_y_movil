
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

            console.log(pokemons)
            let nombre = pokemons.name
            let fotos = pokemons.sprites.front_default
            let experiencia = pokemons.base_experience
            let abilidad1 = pokemons.abilities[0].ability.name
            let abilidad2 = pokemons.abilities[1] ? pokemons.abilities[1].ability.name : "no tiene abilidad 2 "
            let id = pokemons.id    
            let hpnum = pokemons.stats[0].base_stat
            let atknum = pokemons.stats[1].base_stat
            let defnum = pokemons.stats[2].base_stat
            let satknum = pokemons.stats[3].base_stat
            let sdefnum = pokemons.stats[4].base_stat
            let spdnum = pokemons.stats[5].base_stat

            document.getElementById("imagen").innerHTML = ''
            let plantilla = `
                    
                    <div class="">
                        <h4>${nombre}</h4>
                        <img src = "${fotos}" class="img-fluid">
                        <h3>#${id}</h3>
                        <p>Experiencia base: ${experiencia}</p>
                        <p>Abilidad 1: ${abilidad1}</p>
                        <p>Abilidad 2: ${abilidad2}</p>
                    </div>
                `
            document.getElementById("imagen").innerHTML += plantilla

            let grafica_ns = document.getElementById("statsNormales").getContext("2d")
            
            var statsNormalesqa = new Chart(grafica_ns,{
                type:"bar",
                data:{
                    labels:["vida","ataque","defensa"],
                    datasets:[
                        {
                            label:"Grafica de stats normales",
                            backgroundColor:"236, 240, 241",
                            data:[parseInt(`${hpnum}`),parseInt(`${atknum}`),parseInt(`${defnum}`)],
                            backgroundColor : ["rgb(17, 122, 101)","rgb(17, 122, 101)","rgb(17, 122, 101)"]
                        }
                    ]
                }

            })
            let grafica_ss = document.getElementById("statsEspeciales").getContext("2d")
            
            var statsNormalesss = new Chart(grafica_ss,{
                type:"polarArea",
                data:{
                    labels:["atake especial","defensa especial","velocidad"],
                    datasets:[
                        {
                            label:"Grafica de stats especiales",
                            backgroundColor:"236, 240, 241",
                            data:[parseInt(`${satknum}`),parseInt(`${sdefnum}`),parseInt(`${spdnum}`)],
                            backgroundColor : ["rgb(31, 97, 141)","rgb(52, 152, 219 )","rgb(27, 79, 114)"]
                        }
                    ]
                }

            })


            })
        .catch(function(error) {
            console.error("¡Error!", error);
        })
    });
    

}
