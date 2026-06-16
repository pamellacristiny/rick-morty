export function renderizarPersonagens(personagem){
    const container = document.querySelector('#characters-container');
    container.innerHTML = '';

    personagem.forEach(personagem =>{
        container.innerHTML +=`
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card h-100">
        
        <img 
            src="${personagem.image}" 
        class="card-img-top"
         alt="${personagem.name}"
         >

        <div class="card-body">
    <h5 class="card-title">${personagem.name}</h5>
    <p class="card-title">Espécie: ${personagem.species}</p>
    </div>
    </div>
     </div>
        `
    })
};

export  function mostrarMensagem(texto){
    const container =
    document.querySelector('#characters-container');

    container.innerHTML = `
    <div class="col-12">
    <div class="alert alert-info text-center">
        ${texto}
        </div>
     </div>
   `;
}