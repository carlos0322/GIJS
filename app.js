let counter = 0;

window.onload = function () {
  let name = prompt("what is your name?");
  let title = document.getElementById("title"); // if you refresh the code and put a different name it changes the players name

  title.innerHTML = name + "'s Bakery"; //this is always displayed in the game after the players name
};

function buttonupgrade() {
  counter = 0;
  document.getElementById("count").innerHTML = counter;
}
let cookie = document.getElementById("cookie");
function cookieclicker() {
  counter += 1;
  var count = document.getElementById("count");
  //  after 15 cookies the upgrade will work it self
  let upgradelevel = document.getElementById("upgradelevel");
  count.innerHTML = counter;
  if (counter >= 15) {
    counter += 5;
    upgradelevel.innerHTML = "Grandma status";
  }
}
