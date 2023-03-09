//what we want to make slider
// 1.image length
// 2.button control
// 3.left,right button
// 4.fucttion for next image
// 5.function for prev image
// 6.function for first image
// 7.gunction for last image
// 8.loop for tarversing image 



//left button
const left = document.querySelector('.left');
//Right button
const right = document.querySelector('.right')
//slider class
const slider = document.querySelector('.slider');
//All images
const images = document.querySelectorAll('.img');
//button
const bottom = document.querySelector('.bottom');
//for text
const playbutton = document.getElementById('btn-play')
const pousebutton = document.getElementById('btn-pous')

var cancel;
onload = defaultplay;
//slider nuber
let slideNumber = 1;
const length = images.length;   // for getting number of image

for (let i = 0; i < length; i++) {     //for making dots
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}



//for animation 
playbutton.addEventListener('click', () => {
  defaultplay()
})

//for changing upper button color
const buttons = document.querySelectorAll(".button")
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
  buttons.forEach((button) => {    //for changin  or reset color of the button
    button.style.backgroundColor = "transparent";
  });
};

///on button click change the image
buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg()
    slider.style.transform = `translateY(-${i * 500}px)`;
    slideNumber = i + 1;
    button.style.backgroundColor = "white";
  });
});

//for going next slide
const nextSlide = () => {
  slider.style.transform = `translateY(-${slideNumber * 500}px)`;
  slideNumber++;
};

//gor goint prev slide
const prevSlide = () => {
  slider.style.transform = `translateY(-${(slideNumber - 2) * 500}px)`;
  slideNumber--;
};

//got getting first slide
const getFirstSlide = () => {
  slider.style.transform = `translateY(0px)`;
  slideNumber = 1;
};

// for getting last slide
const getLastSlide = () => {
  slider.style.transform = `translateY(-${(length - 1) * 500}px)`;
  slideNumber = length;
};


const changeColor = () => {
  resetBg()
  buttons[slideNumber - 1].style.backgroundColor = "white";
}

//For Right Buttomm

right.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : getFirstSlide();
  changeColor()
});

//for LEft Button
left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
  changeColor()
});


const play = () => {
  return setInterval(() => {
    console.log("hi");
    slideNumber < length ? nextSlide() : getFirstSlide();
    changeColor()
  }, 3000);
}


///Play Button
function defaultplay() {

  console.log(cancel);
  if (cancel) {
    clearInterval(cancel);
    cancel = undefined;
    playbutton.innerHTML = "Play";

  }
  else {
    //animation slider
    cancel = play();
    playbutton.innerHTML = "Pause";
  }
}





