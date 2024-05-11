const cardContainer = document.getElementById('cards');


async function createcards(){

    try {
        const response = await api.get(`/pets`);
        const pets = response.data.pets;
    
        console.log(pets);
        
        const cards = document.createElement('div');
        cards.classList.add('cards');

        cards.innerHTML += ''
     
        for (let i = 0; i < pets.length; i++) {
                const card1 = document.createElement('div');
                card1.classList.add('card1');
                card1.append(cardContainer);

                console.log(pets);
    
                cards.innerHTML += ""

                card1.innerHtml += `
                    <div class="card" style="width: 18rem;">
                        <img class="card-img" src="${pets[i].image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${pets[i].title}</h5>
                            <p class="card-text">${pets[i].description}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${pets[i].found}</li>
                            <li class="list-group-item">${pets[i].when}</li>
                            <li class="list-group-item">${pets[i].location}</li>
                        </ul>
                        <div class="buttons">
                            <button>Abrir Card</button>
                            <button>MY PET!</button>
                        </div>
                    </div>
                `
         }
            
            cards.append(cardContainer);

        
    } catch (error) {
        console.log("erro ao encontrar pets.", error);
    }
}


createcards();