 //Select the button whose id is tab-link-section 
let button= document.querySelector("#tab-link-section");
let data= document.querySelectorAll('.btn');
console.log(data);
 button.addEventListener('click',(e)=>{
    
    data.forEach((ele)=>ele.classList.remove('active'));
  
    console.log(data.classList);

     //selecting all the teb 
    const tab=document.querySelectorAll('.tab-desc');

    //for hide all the tabe
    for (let index = 0; index < tab.length; index++) {
        tab[index].classList.add('hide');
      
    }
    //for only open selected teg
    let id=e.target.id; 
       

     document.querySelector("#t_"+id).classList.remove('hide');
    })

