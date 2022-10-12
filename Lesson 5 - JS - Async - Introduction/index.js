let clickBtn = document.querySelector(".btn-start");
let clickBtnStop = document.querySelector(".btn-stop");

clickBtn.addEventListener("click", () => {
  console.log(1);
  console.log(2);
  let Tick = setTimeout(() => {
    console.error(3);
  }, 5000);

  console.log(4);
  console.log(5);
  console.log(6);
  clickBtnStop.addEventListener("click", () => {
    clearTimeout(Tick);
  });
});

// clickBtn.addEventListener("click", () => {
//   console.log(1);
//   console.log(2);
//   let Tick = setInterval(() => {
//     console.error(3);
//   }, 500);

//   console.log(4);
//   console.log(5);
//   console.log(6);
//   clickBtnStop.addEventListener("click", () => {
//     clearInterval(Tick);
//   });
// });
