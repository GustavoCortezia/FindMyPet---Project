

// const cardContainer = document.getElementById('cards');

// async function createcards() {
//   try {
//     const response = await api.get('/pets');
//     const pets = response.data.pets;

//     let divisorCount = 0;

//     const cards = document.createElement('div');
//     cards.classList.add('cards');

//     for (let i = 0; i < pets.length; i++) {
//       const card1 = document.createElement('div');
//       card1.classList.add('card1');

//       card1.innerHTML = `
//       <div class="card" style="width: 18rem;">
//       <div class="card-body">
//       <img class="card-img" src="${pets[i].img}" alt="...">
//             <h5 class="card-title">${pets[i].title}</h5>
//             <p class="card-text">${pets[i].description}</p>
//           </div>
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item"><strong>Where was found?</strong> ${pets[i].found}</li>
//             <li class="list-group-item"><strong>When was found?</strong> ${pets[i].when}</li>
//             <li class="list-group-item"><strong>Current location:</strong> ${pets[i].location}</li>
//           </ul>
//           <div class="buttons">
//             <button>Abrir Card</button>
//             <button>MY PET!</button>
//           </div>
//         </div>

//         <br><br>
//       `;

      
//       cards.appendChild(card1);

//       if (i < pets.length - 1 && divisorCount % 4 === 0) {
//         const divisor = document.createElement('div');
//         divisor.classList.add('divisor');
//         cards.appendChild(divisor);
//         divisorCount++;
//       }
//     }
      
//       if(cardContainer){
//           cardContainer.appendChild(cards);
//       }
          
//     } catch (error) {
//     console.log("erro ao encontrar pets.", error);
//   }
// }
// createcards();


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
      card.classList.add('card');

      card.innerHTML = `
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

      currentContainer.appendChild(card);
      cardsInGroup++;

      // Create new container for next group of 3 cards
      if (cardsInGroup % 3 === 0 && i < pets.length -1) {
        cardContainer.appendChild(currentContainer); // Append the filled container to the main container
        currentContainer = document.createElement('div'); // Create a new container for the next group
        currentContainer.classList.add('cards-group'); // Style as needed
        cardsInGroup = 1; // Reset counter for next group
      }
    }

    // Handle last cards (if not a group of 3)
    if (currentContainer.children.length > 0) {
      cardContainer.appendChild(currentContainer);
    }
  } catch (error) {
    console.log("erro ao encontrar pets.", error);
  }
}

createcards();
