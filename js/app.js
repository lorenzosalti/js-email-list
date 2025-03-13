const listElement = document.getElementById('email-list');

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

createEmailList(10);





// funzione per creare e riempire un dato numero di list item con una email randomica
function createEmailList(itemsNumber) {

  createListItems(itemsNumber);

  const listItemElements = listElement.querySelectorAll('.l-item');

  listItemElements.forEach((element) => {
    axios.get(endpoint)
      .then((response) => {

        console.log(response);

        element.innerHTML = response.data.response;

      })
      .catch(error => {
        console.log(error);
        console.log('errore!');
      })
  })
};

// funzione per creare un dato numero di list item vuoti
function createListItems(num) {
  let items = '';
  for (let i = 0; i < num; i++) {
    items += '<li class="l-item"></li>'
  }
  listElement.innerHTML = items;
};