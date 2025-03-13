const listElement = document.getElementById('email-list');

// let items = '';

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

createEmailList(10);






function createEmailList(itemsNumber) {

  createListItems(itemsNumber);

  const listItemElements = listElement.querySelectorAll('.l-item');

  listItemElements.forEach((element) => {
    axios.get(endpoint)
      .then((response) => {

        console.log(response);

        element.innerHTML = response.data.response;

        // console.log(email);

        // items += createListItem(email);

      })
      .catch(error => {
        console.log(error);
        console.log('errore!');
      })
  })
}


function createListItems(num) {
  let items = '';
  for (let i = 0; i < num; i++) {
    items += '<li class="l-item"></li>'
  }
  listElement.innerHTML = items;
}





// console.log(listItemElements);

// for (let i = 0; i < 10; i++) {
//   axios.get(endpoint)
//     .then((response) => {

//       console.log(response);

//       const email = response.data.response;

//       console.log(email);

//       // items += createListItem(email);

//     })
//     .catch(error => {
//       console.log(error);
//       console.log('errore!');
//     })
// }




// setTimeout(() => {
//   listElement.innerHTML = items;
// }, 1000);







// function createListItems(string) {
//   const item = `<li>${string}</li>`;
//   return item;
// }