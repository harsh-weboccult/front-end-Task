//const cards=document.querySelector('.cards');
container = document.querySelectorAll("#gamecontainer");
var cardData;
const resetBtn = document.getElementById("btn-reset");
const rendomBtn = document.getElementById("btn-rendom");
const score = document.getElementById("Score");
const total = document.getElementById("Total");
const sbtn = document.getElementById("small_btn");
const mbtn = document.getElementById("midium_btn");
const bbtn = document.getElementById("big_btn");
const colorGamebtn = document.getElementById("btn-color");
const iconGamebtn = document.getElementById("btn-icon");
var cardone, cardtwo;
var disabledask = false;
var Match = 0;
let hour = 00;
let minute = 00;
let second = 00;
let count = 00;
var c;
let Score = 0;
let click = 0;
var smallgame = false;
var medioumcolorgame = false;
var largecolorgame = false;
var smallColorgame = false;
var smallGameScore = 0;
var smallColorGameScore = 0;
var mediumColorGameScore = 0;
var largeColorGameScore = 0;
var ismedioumGame = false;
var medioumGameScore = 0;
var iscolorGame = false;
var isIconGame = false;
var SizeGame;
var theam;

/* function of small game*/
function showSmGame() {
  smallgame = true;

  container.forEach((item) => {
    item.innerHTML =
      '<ul class="cards">' +
      '<li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-1.png" alt="">'
        : '<img src="./Asset/img-1.jpeg" alt="">') +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      '<li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-1.png" alt="">'
        : '<img src="./Asset/img-1.jpeg" alt="">') +
      "</div>" +
      '<div class="back-end">' +
      (isIconGame ? "Icon" : "?") +
      "</div>" +
      "</li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-2.png" alt="">'
        : '<img src="./Asset/img-2.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-2.png" alt="">'
        : '<img src="./Asset/img-2.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      "" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-3.png" alt="">'
        : '<img src="./Asset/img-3.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-3.png" alt="">'
        : '<img src="./Asset/img-3.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      "" +
      "</ul>";
  });
  const card = document.querySelectorAll(".card");
  console.log(card);
  cardData = card;
  // rendomFunctionsmall();
  card.forEach((car) => {
    car.addEventListener("click", flipcard);
  });
}
/* Function for medioum Game*/
function showmedioumGame() {
  ismedioumGame = true;
  container.forEach((item) => {
    item.innerHTML =
      '<ul class="cards">' +
      '<li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-1.png" alt="">'
        : '<img src="./Asset/img-1.jpeg" alt="">') +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      '<li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-1.png" alt="">'
        : '<img src="./Asset/img-1.jpeg" alt="">') +
      "</div>" +
      '<div class="back-end">?</div>' +
      "</li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-2.png" alt="">'
        : '<img src="./Asset/img-2.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-2.png" alt="">'
        : '<img src="./Asset/img-2.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      "" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-3.png" alt="">'
        : '<img src="./Asset/img-3.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-3.png" alt="">'
        : '<img src="./Asset/img-3.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-4.png" alt="">'
        : '<img src="./Asset/img-4.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-4.png" alt="">'
        : '<img src="./Asset/img-4.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-5.png" alt="">'
        : '<img src="./Asset/img-5.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-5.png" alt="">'
        : '<img src="./Asset/img-5.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-6.png" alt="">'
        : '<img src="./Asset/img-6.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-6.png" alt="">'
        : '<img src="./Asset/img-6.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      "</ul>";
  });
  const card = document.querySelectorAll(".card");
  console.log(card);
  cardData = card;
  //  rendomFunctionmidium();

  card.forEach((car) => {
    car.addEventListener("click", flipcard);
  });
}
showGame();
/* Funvction for larger game*/
function showGame() {
  container.forEach((item) => {
    item.innerHTML =
      '<ul class="cards">' +
      '<li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-1.png" alt="">'
        : '<img src="./Asset/img-1.jpeg" alt="">') +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      '<li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-1.png" alt="">'
        : '<img src="./Asset/img-1.jpeg" alt="">') +
      "</div>" +
      '<div class="back-end">?</div>' +
      "</li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-2.png" alt="">'
        : '<img src="./Asset/img-2.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-2.png" alt="">'
        : '<img src="./Asset/img-2.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      "" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-3.png" alt="">'
        : '<img src="./Asset/img-3.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-3.png" alt="">'
        : '<img src="./Asset/img-3.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-4.png" alt="">'
        : '<img src="./Asset/img-4.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-4.png" alt="">'
        : '<img src="./Asset/img-4.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-5.png" alt="">'
        : '<img src="./Asset/img-5.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-5.png" alt="">'
        : '<img src="./Asset/img-5.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-6.png" alt="">'
        : '<img src="./Asset/img-6.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-6.png" alt="">'
        : '<img src="./Asset/img-6.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-7.png" alt="">'
        : '<img src="./Asset/img-7.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-7.png" alt="">'
        : '<img src="./Asset/img-7.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-8.png" alt="">'
        : '<img src="./Asset/img-8.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-8.png" alt="">'
        : '<img src="./Asset/img-8.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-9.png" alt="">'
        : '<img src="./Asset/img-9.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-9.png" alt="">'
        : '<img src="./Asset/img-9.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-10.png" alt="">'
        : '<img src="./Asset/img-10.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      ' <li class="card">' +
      '<div class="front-end hide">' +
      (isIconGame
        ? '<img src="./Asset/Icons/img-10.png" alt="">'
        : '<img src="./Asset/img-10.jpeg" alt="">') +
      "</div>" +
      '   <div class="back-end">?</div>' +
      " </li>" +
      "</ul>";
  });
  const card = document.querySelectorAll(".card");
  console.log(card);
  cardData = card;
  // rendomFunction();
  card.forEach((car) => {
    car.addEventListener("click", flipcard);
  });
}

/* for Fliping card and Saving Data*/
function flipcard(e) {
  let clickflip = e.target;
  startWatch();
  click = click + 1;
  total.innerHTML = click;

  rendomBtn.disabled = true;

  //targeting the clicking li finction
  if (clickflip !== cardone && !disabledask) {
    clickflip.classList.add("flip");

    if (!cardone) {
      cardone = clickflip;
      cardone.removeEventListener("click", flipcard);
      return;
    }

    cardtwo = clickflip;
    console.log("log" + cardtwo);
    disabledask = true;

    let cardoneimg = cardone.querySelector("img").src;
    let cardtwoimg = cardtwo.querySelector("img").src;
    chackpair(cardoneimg, cardtwoimg);
  }
}

/* For Checking pair*/
function chackpair(img1, img2) {
  if (img1 === img2) {
    Match++;
    Score = Score + 10;
    score.innerHTML = Score;

    if (smallColorgame == true) {
      smallColorGameScore = smallColorGameScore + 1;
      if (smallColorGameScore == 3) {
        alert("Congretualation");
        clearInterval(c);
        setTimeout(() => {
          return Allclose();
        }, [1000]);
      }
    }

    //checking for small game\
    if (smallgame == true) {
      smallGameScore = smallGameScore + 1;
      if (smallGameScore == 3) {
        alert("Congretualation");
        clearInterval(c);
        setTimeout(() => {
          return Allclose();
        }, [1000]);
      }
    }

    if (ismedioumGame == true) {
      medioumGameScore = medioumGameScore + 1;
      if (medioumGameScore == 6) {
        alert("Congretualation");
        clearInterval(c);
        setTimeout(() => {
          return Allclose();
        }, [1000]);
      }
    }

    if (medioumcolorgame == true) {
      mediumColorGameScore = mediumColorGameScore + 1;
      if (mediumColorGameScore == 6) {
        alert("Congretualation");
        clearInterval(c);
        setTimeout(() => {
          return Allclose();
        }, [1000]);
      }
    }
    if (largecolorgame == true) {
      largeColorGameScore = largeColorGameScore + 1;
      if (largeColorGameScore == 10) {
        alert("Congretualation");
        clearInterval(c);
        setTimeout(() => {
          return Allclose();
        }, [1000]);
      }
    }

    if (Match == 10) {
      alert("Congretualation");
      clearInterval(c);
      setTimeout(() => {
        return Allclose();
      }, [1000]);
    }
    console.log("in check");
    cardone.removeEventListener("click", flipcard);
    cardtwo.removeEventListener("click", flipcard);
    //    console.log(cardone);
    cardone = cardtwo = "";
    return (disabledask = false);
  }

  /* if pair not match close the boc*/
  setTimeout(() => {
    cardone.addEventListener("click", flipcard);
    cardone.classList.remove("flip");
    cardtwo.classList.remove("flip");
    cardone = cardtwo = "";
    disabledask = false;
  }, 1000);
}

/* Reset game */
/* Closing All Box */
function Allclose() {
  console.log("call");
  cardone = cardtwo = "";
  clearInterval(c);
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  score.innerHTML = "00";
  total.innerHTML = "00";
  smallgame = false;
  largecolorgame = false;
  smallColorgame = false;
  ismedioumGame = false;
  medioumcolorgame = false;
  location.reload();
  // rendomFunction();
  cardData.forEach((car) => {
    // console.log(car);
    car.classList.remove("flip");
    car.addEventListener("click", flipcard);
  });
}

/*For genarate picture in rendome order*/
function rendomFunction() {
  /* Genarate array in  diffrent manner*/
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  array.sort(() => (Math.random() > 0.5 ? 1 : -1));
  cardData.forEach((car, index) => {
    let image = car.querySelector("img");
    image.src = `Asset/img-${array[index]}.jpeg`;
    car.classList.remove("flip");
    car.addEventListener("click", flipcard);
  });
}

function rendomFunctionsmall() {
  let array = [1, 2, 3, 1, 2, 3];
  array.sort(() => (Math.random() > 0.5 ? 1 : -1));
  cardData.forEach((car, index) => {
    let image = car.querySelector("img");
    image.src = `Asset/img-${array[index]}.jpeg`;
    car.classList.remove("flip");
    car.addEventListener("click", flipcard);
  });
}
function rendomFunctionmidium() {
  let array = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
  array.sort(() => (Math.random() > 0.5 ? 1 : -1));
  cardData.forEach((car, index) => {
    let image = car.querySelector("img");
    image.src = `Asset/img-${array[index]}.jpeg`;
    car.classList.remove("flip");
    car.addEventListener("click", flipcard);
  });
}
//for adding all the btn an event Click

/*Timer code */

function startWatch() {
  if (c) {
    return;
  } else {
    c = setInterval(stopWatch, 10);
  }
}

/* Timer Start */
function stopWatch() {
  count++;
  if (count == 100) {
    second++;
    count = 0;
  }

  if (second == 60) {
    minute++;
    second = 0;
  }

  if (minute == 60) {
    hour++;
    minute = 0;
    second = 0;
  }

  let hrString = hour;
  let minString = minute;
  let secString = second;
  let countString = count;

  if (hour < 10) {
    hrString = "0" + hrString;
  }

  if (minute < 10) {
    minString = "0" + minString;
  }

  if (second < 10) {
    secString = "0" + secString;
  }

  if (count < 10) {
    countString = "0" + countString;
  }

  //document.getElementById("hr").innerHTML = hrString;
  document.getElementById("min").innerHTML = minString;
  document.getElementById("sec").innerHTML = secString;
  //document.getElementById("count").innerHTML = countString;
}

/* Allocating Fubction to button */
resetBtn.addEventListener("click", Allclose);
rendomBtn.addEventListener("click", rendomFunction);

function handleRadioSelection() {
  const radio1 = document.getElementById("radio1");
  const radio2 = document.getElementById("radio2");

  if (radio1.checked && radio2.checked) {
    const selectedData1 = radio1.value;
    const selectedData2 = radio2.value;

    // perform some action with the selected data
    console.log(selectedData1, selectedData2);
  } else {
    // handle case where not both radio buttons have been selected
    console.log("Please select both radio buttons");
  }
}

function TheamData(data) {
  SizeGame = data.value;
  // console.log(src.value);
}

function SizeData(data) {
  theam = data.value;
  //console.log(data.value);
}

function showColorGame() {
  smallColorgame = true;
  container.forEach((item) => {
    item.innerHTML =
      '<ul class="cards">' +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/image-1.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/image-1.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/red-2.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/red-2.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/green-3.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/green-3.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      "</ul>";
  });
  const card = document.querySelectorAll(".card");
  console.log(card);
  cardData = card;
  // rendomFunctionsmall();
  card.forEach((car) => {
    car.addEventListener("click", flipcard);
  });
}

function showmedioumColorGame() {
  medioumcolorgame = true;
  container.forEach((item) => {
    item.innerHTML =
      '<ul class="cards">' +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/image-1.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/image-1.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/red-2.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/red-2.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/green-3.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/green-3.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/image-4.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/image-4.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/orange-4.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/orange-4.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/green-3.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/green-3.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      "</ul>";
  });
  const card = document.querySelectorAll(".card");
  console.log(card);
  cardData = card;
  // rendomFunctionsmall();
  card.forEach((car) => {
    car.addEventListener("click", flipcard);
  });
}

function largeColorGame() {
  largecolorgame = true;

  container.forEach((item) => {
    item.innerHTML =
      '<ul class="cards">' +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/image-1.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/image-1.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/red-2.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/red-2.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/green-3.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/green-3.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/image-1.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/image-1.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/red-2.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/red-2.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/green-3.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/green-3.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/image-1.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/image-1.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/red-2.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/red-2.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/green-3.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/green-3.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/image-1.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      '<li class="card">' +
      '<div class="front-end hide">' +
      '<img src="./Asset/Color/image-1.png" alt="">' +
      "</div>" +
      '<div class="back-end ">' +
      "?" +
      "</div>  " +
      "</li>" +
      "</ul>";
  });
  const card = document.querySelectorAll(".card");
  console.log(card);
  cardData = card;
  // rendomFunctionsmall();
  card.forEach((car) => {
    car.addEventListener("click", flipcard);
  });
}

function SelectGame() {
  console.log(theam, SizeGame);
  if (theam == "small" && SizeGame == "image") {
    showSmGame();
  }
  if (theam == "midime" && SizeGame == "image") {
    showmedioumGame();
  }
  if (theam == "larger" && SizeGame == "image") {
    showGame();
  }

  if (theam == "small" && SizeGame == "icon") {
    isIconGame = true;
    showSmGame();
  }
  if (theam == "midime" && SizeGame == "icon") {
    isIconGame = true;
    showmedioumGame();
  }
  if (theam == "larger" && SizeGame == "icon") {
    isIconGame = true;
    showGame();
  }

  if (theam == "small" && SizeGame == "color") {
    isIconGame = true;
    showColorGame();
  }
  if (theam == "midime" && SizeGame == "color") {
    isIconGame = true;
    showmedioumColorGame();
  }
  if (theam == "larger" && SizeGame == "color") {
    isIconGame = true;
    largeColorGame();
  }
}
