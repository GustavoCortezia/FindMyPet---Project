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

    if (response.status === 201) {
      alert('Pet cadastrado com sucesso!')

      titleInput.value = ""
      animalInput.value = ""
      descriptionInput.value = ""
      foundInput.value = ""
      locationInput.value = ""
      whenInput.value = ""
      imageInput.value = ""

      location.href = "register.html"
    }


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

  //TITLE ERROR
  if(titleInput.value == ""){
    alert("Title is missing");
    titleInput.classList.add('input-error');
  }
  else{
    titleInput.classList.remove('input-error');
  }

  //DESCRIPTION ERROR
  if(descriptionInput.value == ""){
    alert("Description is missing");
    descriptionInput.classList.add('input-error');
  }
  else{
    descriptionInput.classList.remove('input-error');
  }

  //FOUND ERROR
  if(foundInput.value == ""){
    alert("Found is missing");
    foundInput.classList.add('input-error');
  }
  else{
    foundInput.classList.remove('input-error');
  }

    //LOCATION ERROR
  if(locationInput.value == ""){
    alert("Location is missing");
    locationInput.classList.add('input-error');
  }
  else{
    locationInput.classList.remove('input-error');
  }

    //WHEN ERROR
  if(whenInput.value == ""){
    alert("When is missing");
    whenInput.classList.add('input-error');
  }
  else{
    whenInput.classList.remove('input-error');
  }

    //WHEN ERROR
    if(imageInput.value == ''){
      alert("Image is missing");
      imageInput.classList.add('input-error');
    }
    else{
      imageInput.classList.remove('input-error');
    }

  
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
