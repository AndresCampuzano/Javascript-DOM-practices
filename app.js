

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


fetch("https://randomuser.me/api/")
  .then(function (response) {
    // console.log(response);
    return response.json();
  })
  .then(function (user) {
    console.log("user", user.results[0].name.first, "is generated randomly by API.");
    document.getElementById("randomUser").innerHTML = user.results[0].name.first;
    
  })
  .catch(function () {
    console.log("algo falló");
  });