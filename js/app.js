const listElement = document.getElementById('email-list');

// let items = '';

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';


createListItems(10);

const listItemElements = listElement.querySelectorAll('.l-item');

console.log(listItemElements);

for (let i = 0; i < 10; i++) {
  axios.get(endpoint)
    .then((response) => {

      console.log(response);

      const email = response.data.response;

      console.log(email);

      // items += createListItem(email);

    })
    .catch(error => {
      console.log(error);
      console.log('errore!');
    })
}




// setTimeout(() => {
//   listElement.innerHTML = items;
// }, 1000);



function createListItems(num) {
  let items = '';
  for (let i = 0; i < num; i++) {
    items += '<li class="l-item"></li>'
  }
  listElement.innerHTML = items;
}



// function createListItems(string) {
//   const item = `<li>${string}</li>`;
//   return item;
// }