
// Changing colors
function myFunction() {
  const div = document.getElementById("myDIV");
  const h1 = document.getElementById('h1');
  h1.classList.add('green');
  div.classList.add("div--green");
  showPressMeAgain();
}

function showPressMeAgain() {
  const pressMeAgain = document.getElementById('pressMeAgain');
  pressMeAgain.classList.remove('hide');
}

// API

for (let x = 1; x <= 3; x++) {
  fetch("https://randomuser.me/api/")
    .then(function (response) {
      // console.log(response);
      return response.json();
    })
    .then(function (user) {
      document.getElementById("randomUser").innerHTML = user.results[0].name.first;
        console.log("user", user.results[0].name.first, "is generated randomly by API.");      
    })
    .catch(function () {
      console.log("algo falló");
    });
}
