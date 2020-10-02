const API = `https://pokeapi.co/api/v2/pokemon/mew`;

const getData = (id) => {
    return fetch(id)
        .then((Response) => Response.json())
        .then((json) => {
            llenarDatos(json);
        })
        .catch((error) => {
            console.log("error", error)
        })
}

const llenarDatos = (data) => {
    console.log(data)
    console.log(data.abilities)
    console.log(data.abilities[0].ability.name)
    console.log(data.types[0].type.name)
    let html = `
         <div class="col-8">
         <div class="card bgc" style = "width:40rem"">
         <div class="row no-gutters justify-content-between">
         <div class="col-md-5">
         <img src="${data.sprites.front_default}" class="card-img" alt="..."> 
         </div>
         <div class="col-md-7">
         <div class="card-body m-auto">
          <h1 class="display-2">${data.name}</h1>
          <p class="card-text">Abilities: ${data.abilities[0].ability.name} </p>
          <p class="card-text">Type: ${data.types[0].type.name} </p>
         </div>
         </div>
         </div>
         </div>
         </div>
         `
    document.getElementById("pokeDatos").innerHTML = html;
}

getData(API)