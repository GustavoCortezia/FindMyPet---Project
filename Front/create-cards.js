
const cardContainer = document.getElementById('cards'); // Get the existing container

async function createcards() {
  try {
    const response = await api.get('/pets');
    const pets = response.data.pets;

    let cardsInGroup = 0;
    let currentContainer = document.createElement('div'); // Create a new container for each group
    currentContainer.classList.add('cards-group'); // Style as needed

    for (let i = 0; i < pets.length; i++) {
      const card = document.createElement('div');
      card.classList.add('card1');

      card.innerHTML = `
      <img class="card-img" src="${pets[i].img}" alt="...">
      <div class="card-body">
            <h4 class="card-title">${pets[i].title}</h4>
            <p class="card-text">${pets[i].description}</p>
          </div>
        <div class="infos">
          <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>When?</strong> ${pets[i].when}</li>
          <li class="list-group-item"><strong>Where?</strong> ${pets[i].found}</li>
          <li class="list-group-item"><strong>Current location:</strong> ${pets[i].location}</li>
          </ul>
          <br>
          <div class="contatos">
              email: ${pets[i].when} <br>
              phone: ${pets[i].when}
          </div>
        </div>
        `;

    currentContainer.appendChild(card);
    cardsInGroup++;


    if (cardsInGroup % 2 === 0 && i < pets.length -1) {
      cardContainer.appendChild(currentContainer); 
      currentContainer = document.createElement('div'); 
      currentContainer.classList.add('cards-group'); 
      cardsInGroup += 2; 
    }
  }

  // Handle last cards (if not a group of 3)
  if (currentContainer.children.length > 0) {
    if(currentContainer){ 
    cardContainer.appendChild(currentContainer);
  }
}

  } catch (error) {
    console.log("erro ao encontrar pets.", error);
  }
}

createcards();
