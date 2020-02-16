

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
