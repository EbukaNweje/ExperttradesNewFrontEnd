
const email = document.getElementById('email')
const button = document.getElementById('forgetPwdBtn')
console.log(button);

// console.log(password);

button.onclick = async (event) => {
  event.preventDefault();

  button.innerHTML= "loading...";

  const data = {
    email: email.value,
  };

  console.log(data);

  fetch('https://experttradesnewbackend.onrender.com/api/forgotpassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response=> response.json())
    .then(response => {
      console.log(response)
      alert(response.message)
      window.location = "https://www.experttrades.org/"
    })
    .catch((error) => {
      console.log(error);
    button.innerHTML= "loading...";

    });
};