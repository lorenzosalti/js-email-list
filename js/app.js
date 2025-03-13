const listElement = document.getElementById('email-list');

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

axios.get(endpoint)
  .then((response) => {

    console.log(response);

    const email = response.data.response;

    console.log(email);

  })
  .catch(error => {
    console.log(error);
    console.log('errore!');
  })