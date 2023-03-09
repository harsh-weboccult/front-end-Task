//Select the button whose id is tab-link-section 
let button = document.querySelectorAll(".btn");
console.log(button);

button.forEach((element) => {

  element.addEventListener('click', (e) => {
    //for changing button color  
    button.forEach((ele) => ele.classList.remove('active'));
    element.classList.add('active');
   
    //selecting all the teb 
    const tab = document.querySelectorAll('.tab-desc');

    //for hide all the tabe
    for (let index = 0; index < tab.length; index++) {
      tab[index].classList.add('hide');

    }
    //for only open selected teg
    let id = e.target.id;
    document.querySelector("#t_" + id).classList.remove('hide');

  })

})


