const btn = document.querySelector("#btn");
let joke;
function text(txt) {
  console.log(txt);
}
const prom = new Promise((resolve, reject) => {
  if (true) {
    resolve("jest ok");
  } else {
    reject("nope");
  }
});
prom
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

const request = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const finalResponse = await response.json();
  console.log(finalResponse);
};
console.log(1);
console.log(2);
console.log(3);
request();
console.log(4);
console.log(5);

btn.addEventListener("click", () => {
  fetch("https://meowfacts.herokuapp.com/")
    .then((response) => response.json())
    .then((data) => (joke = data["data"][0]))
    .then(() => text(joke))
    .catch((err) => console.error("Error -> ", err));
});
