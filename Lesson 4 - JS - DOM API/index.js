let boxEle = document.querySelector(".box.box-green");

boxEle.addEventListener("mouseenter", () => {
  boxEle.classList.add("box-red");
});
boxEle.addEventListener("mouseleave", () => {
  boxEle.classList.remove("box-red");
});

let con = document.querySelector(".container");

let newDiv = document.createElement("div");

newDiv.innerText = " Jestem tutaj nowy ! :D";
newDiv.style.setProperty("fontSize", "28px");
newDiv.setAttribute("contenteditable", "true");

con.appendChild(newDiv);

// con.innerHTML = "<div> Jestem jakimś divem</div>";
