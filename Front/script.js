const titleInput = document.getElementById('title');
const animalInput = document.getElementById('animal');
const descriptionInput = document.getElementById('description');
const foundInput = document.getElementById('found');
const locationInput = document.getElementById('location');
const imageInput = document.getElementById('image');
const whenInput = document.getElementById('when');


async function addNewPet(newPet) {
  console.log(newPet.img); 
  try {
    const response = await api.post('/pets', newPet);
  } catch (error) {
    console.log('Erro ao cadastrar pet', error);
  }
}

async function imgValidation() {
  return new Promise((resolve, reject) => {
      const file = imageInput.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file); 
      reader.onloadend = () => {
          const imgPET = reader.result;
          console.log(imgPET);
          resolve(imgPET);
      }
      reader.onerror = reject;
  });
}

const submit = document.getElementById('submit-btn');

if (submit) { 
submit.addEventListener('click', async (e) => {
  e.preventDefault();
  
  const newPet = {
    title: titleInput.value,
    animal: animalInput.value,
    description: descriptionInput.value,
    found: foundInput.value,
    location: locationInput.value,
    when: whenInput.value,
    img: await imgValidation(),
  }  

  console.log(newPet.img);

  addNewPet(newPet);
})
}
