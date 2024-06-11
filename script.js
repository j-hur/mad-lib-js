// Mad Lib
console.log("hi");

// Event Listener
document.getElementById("btn").addEventListener("click", madPhrase);

function madPhrase() {
  // Input
  let song = document.getElementById("songIn").value;
  let friend = document.getElementById("friendIn").value;
  let animal = document.getElementById("animalIn").value;

  // Process
  let msg = `I was listening to ${song} when ${friend} tripped on a(n) ${animal}.`;

  // Output
  document.getElementById("madLib").innerHTML = msg;
}
