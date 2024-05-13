
const cardContainer = document.getElementById('cards');

async function createcards() {
  try {
    const response = await api.get('/pets');
    const pets = response.data.pets;

    const cards = document.createElement('div');
    cards.classList.add('cards');

    for (let i = 0; i < pets.length; i++) {
      const card1 = document.createElement('div');
      card1.classList.add('card1');

      card1.innerHTML = `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
      <img class="card-img" src="${pets[i].img}" alt="...">
            <h5 class="card-title">${pets[i].title}</h5>
            <p class="card-text">${pets[i].description}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Where was found?</strong> ${pets[i].found}</li>
            <li class="list-group-item"><strong>When was found?</strong> ${pets[i].when}</li>
            <li class="list-group-item"><strong>Current location:</strong> ${pets[i].location}</li>
          </ul>
          <div class="buttons">
            <button>Abrir Card</button>
            <button>MY PET!</button>
          </div>
        </div>
      `;

      cards.appendChild(card1);
    }

    if(cardContainer){
        cardContainer.appendChild(cards);
    }
  } catch (error) {
    console.log("erro ao encontrar pets.", error);
  }
}

createcards();
