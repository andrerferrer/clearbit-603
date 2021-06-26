// FUNCTIONS
const updateTheDOMWithData = (data) => {
  console.log(data);
  // the api will give us some response
  // with that response, we will
  const location = data.location;
  const bio = data.bio;
  const email = data.email;
  const name = data.name.fullName;
  
  // console.log(location)
  // console.log(bio)
  // console.log(email)
  // console.log(name)

  //  display that person's information on the dom
  document.getElementById('location').innerText = location;
  document.getElementById('bio').innerText = bio;
  document.getElementById('email').innerText = email;
  document.getElementById('name').innerText = name;
}

const fetchTheAPI = (personEmail) => {
  
  const url = `https://person.clearbit.com/v2/people/find?email=${personEmail}`;
  fetch(url, {
    headers: {
      'Authorization': bearerKey
    }
  })
    .then(res => res.json())
    .then(updateTheDOMWithData);
};

// VARIABLES and EVENT LISTENERS //
const bearerKey = "Bearer sk_something";
// get your api key on
// https://clearbit.com/docs?shell#authentication
// https://dashboard.clearbit.com/api
const form = document.getElementById('clearbitForm');
form.addEventListener('submit', (event) => {
  // preventing the form from reloading the page
  event.preventDefault();
  
  // get the person's email
  const input = document.getElementById('clearbitEmail');
  // console.log(input.value);

  // we will fetch the api with the person's email
  fetchTheAPI(input.value);
})

