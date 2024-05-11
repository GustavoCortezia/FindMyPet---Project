const titleInput = document.getElementById('title');
const animalInput = document.getElementById('animal');
const descriptionInput = document.getElementById('description');
const foundInput = document.getElementById('found');
const locationInput = document.getElementById('location');
const imageInput = document.getElementById('image');
const whenInput = document.getElementById('when');

const submit = document.getElementById('submit-btn');

if (submit) { 
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        
        const newPet = {
            title: titleInput.value,
            animal: animalInput.value,
            description: descriptionInput.value,
            found: foundInput.value,
            location: locationInput.value,
            image: imageInput.value,
            when: whenInput.value,
        }  
        
        addNewPet(newPet);
        
    })
}
    
  async function addNewPet(newPet) {
    try {
      const response = await api.post('/pets', newPet)
  
      if (response.status === 201) {
        location.href = "register.html"
        console.log("Cadastrado com sucesso")
      }
    } catch (error) {
      console.log('Erro ao cadastrar pet', error)
    }
  }
