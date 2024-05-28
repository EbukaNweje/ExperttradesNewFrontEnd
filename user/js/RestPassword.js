
const password = document.getElementById('password')
const cpassword = document.getElementById('cpassword')
const button = document.getElementById('forgetPwdBtn')
console.log(button);

// console.log(password);

button.onclick = async () => {
  event.preventDefault();
  button.innerHTML = "Loading...";

  const data = {
    password: password.value,
    Confirmpassword: cpassword.value,
  };

  console.log(data);

  const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id)

  fetch('https://experttradesnewbackend.onrender.com/api/restLink/', {
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
    //   window.location = "index.html"
    })
    .catch((error) => {
      console.log(error.message);
      button.innerHTML = "Reset";
    });
};