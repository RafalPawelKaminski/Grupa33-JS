// Operatory Artmetyczne - START

// Dodawanie
let a = 5;
let b = a + 6;
let c = a + b;
console.log(c + a);
c += a;
console.log(c);
// Mnożenie
let d = 2;
let e = d * 3;
console.log(e);
// Dzielenie
let f = a / d;
console.log(f);
// Modulo
let g = a % d;
console.log(g);
// Potęgowanie
console.log(a ** d);
// Inkrementacja
let h = a++;
console.log(h);
// Dekrementacja
console.log(h--);
// Operatory Artmetyczne - END

// Operatory porównania - START
let nbr = 6;
let nbr1 = "5";
let nbr2 = 2;

console.log(nbr == nbr1);
console.log(nbr === nbr2);

console.log(nbr != nbr1);
console.log(nbr !== nbr2);

console.log(nbr >= nbr1);
// Operatory porównania - END

// Operatory Logiczne - START

let nbr3 = 6;
let nbr4 = 6;

console.log(nbr3 >= nbr4 && nbr == nbr2);
console.log(nbr3 >= nbr4 || nbr == nbr2);
console.log(nbr3 == !nbr4);
console.log((nbr3 >= nbr4) ^ (nbr == nbr2));
// Operatory Logiczne - END

// Instrukcje warunkowe - START

// IF
if (5 > 2) {
  console.log("Warunek spełniony");
}
// IF ELSE
if (5 < 2) {
  console.log("Warunek spełniony");
} else {
  console.log("Warunek nie został spełniony");
}
// ELSE IF
if (5 < 2) {
  console.log("Warunek spełniony");
} else if (5 < 4) {
  console.log("Warunek 1  został spełniony");
} else if (5 < 1) {
  console.log("Warunek 2  został spełniony");
} else if (5 < 3) {
  console.log("Warunek 3  został spełniony");
} else {
  console.log("Żadny warunek nie został spełniony");
}
// SWITCH

switch (5) {
  case 1:
    console.log("wartośc to 1");
    break;
  case 2:
    console.log("wartośc to 2");
    break;
  case 3:
    console.log("wartośc to 3");
    break;
  case 4:
    console.log("wartośc to 4");
    break;
  case 5:
    console.log("wartośc to 5");
    break;
  default:
    console.log("żadna wartość nie jest dobra");
}
// Instrukcje warunkowe - END

// Funkcje - START

function sum() {
  let cos = 12;
  let cos2 = 11;
  console.log("cześć jestem funkcją :)", cos + cos2);
}
sum();

const fn = () => {
  console.log("cześć jestem funkcją strzałkową:)");
};
fn();

function retfn(nr1, nr2) {
  console.log("przed retunr");
  return nr1 + nr2;
  console.log("po retunr");
}
console.log(retfn(6, 2));
// Funkcje - END

// Zasięg zmiennych - START

function rangeFn() {
  let y = 3;
  const z = 4;
  {
    var x = 2;
    // let y = 3;
    // const z = 4;
  }
  if (true) {
    console.log(x);
    console.log(y);
    console.log(z);
  }
  console.log(x);
  console.log(y);
  console.log(z);
}
console.log(x);
rangeFn();

// Zasięg zmiennych - END
