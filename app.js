
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





  // //getting name from user
  // function greeting(yourName) {
  //   var result = 'Hello ' + yourName;
  //   document.getElementById('someText').innerHTML = result;
  // };
  
  // var name = prompt('What is your name?');
  // greeting(name);


  //while

  // var num = 0;

  // while (num < 100) {
  //   num += 1;
  //   console.log(num);
  // }


  // //for 

  // for (let num = 0; num <= 100; num++) {
  //   console.log(num);
    
  // }

  let someNumbers = [12, 458, 2, 4, 7, 89, 50, 10, 12, 18, 15];
  console.log(someNumbers.sort(function(a,b) {return a-b})); // ascensing order
  console.log(someNumbers.sort(function(a,b) {return b-a})); // descending order
  

  let emptyArray = new Array();
  for (let num = 0; num <= 5; num++) {
    emptyArray.push(num)
  }
  console.log(emptyArray);
  