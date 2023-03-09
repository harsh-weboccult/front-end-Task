const btn = document.querySelectorAll('.btn');
const btn_container = document.querySelector(".btn-container");
const content = document.querySelectorAll('.content');
const save_btn = document.getElementsByClassName('btn-save');
const step_2 = document.getElementById('step-2');
const step_1 = document.getElementById('step-1');
const step_3 = document.getElementById('step-3');
var table_counter=0;





// btn_container.addEventListener('click', (e) => {
//     id = e.target.dataset.id;
//     console.log(id);
//     if (id) {
//         //remover animation button
//         // btn.forEach((btn) => {
//         //     btn.classList.remove('btn-active')
//         //     e.target.classList.add('btn-active')

//         // })

//         // //shoing data
//         // content.forEach((ele) => {
//         //     ele.classList.remove('active');

//         // })

//         // const element = document.getElementById(id);
//         // element.classList.add('active');


//     }
// })

function nextform() {
    id = 'form-2';
    if (id) {
        //shoing data
        btn.forEach((btn) => {
            btn.classList.remove('btn-active')
        })
        step_2.classList.add('btn-active')

        content.forEach((ele) => {
            ele.classList.remove('active');

        })

        const element = document.getElementById(id);
        element.classList.add('active');
    }
}


function finalform() {
    id = 'form-3';
    if (id) {

        btn.forEach((btn) => {
            btn.classList.remove('btn-active')
        })
        //shoing data
        content.forEach((ele) => {
            ele.classList.remove('active');

        })
        step_3.classList.add('btn-active')

        const element = document.getElementById(id);
        element.classList.add('active');
    }
}

function prev_form() {
    nextform();
}

function firstform() {
    id = 'form-1';
    if (id) {
        //shoing data
        btn.forEach((btn) => {
            btn.classList.remove('btn-active')
        })
        step_1.classList.add('btn-active')

        content.forEach((ele) => {
            ele.classList.remove('active');

        })

        const element = document.getElementById(id);
        element.classList.add('active');
    }
}


/* submitig data on table*/

function submitform()
{    table_counter++;
    console.log(document.getElementsByName('firstname').value);
    const table=document.getElementById('mytable');
    var row=table.insertRow();
    var cell1=row.insertCell();
    var cell2=row.insertCell();
    var cell3=row.insertCell();
    var cell4=row.insertCell();
    var cell5=row.insertCell();
    var cell6=row.insertCell();
    var cell7=row.insertCell();
    var cell8=row.insertCell();
    var cell9=row.insertCell();
    var cell10=row.insertCell();
    var cell11=row.insertCell();
    var cell12=row.insertCell();
    
    cell1.innerHTML=table_counter;
    cell2.innerHTML=document.getElementById('f_name').value;
    cell3.innerHTML=document.getElementById('l_name').value;
    cell4.innerHTML=document.getElementsByName('Gender')[0].value;
    cell5.innerHTML=document.getElementById('email').value;
    cell6.innerHTML=document.getElementById('p_number').value;
    cell7.innerHTML=document.getElementById('date').value;
    cell8.innerHTML=document.getElementById('selection').value;
    cell9.innerHTML=document.getElementById('self').value;
    cell10.innerHTML=document.getElementById('chek').value;
    cell11.innerHTML=`<button onClick="undateui(this);">edit</button>`
    cell12.innerHTML=`<button>edit</button>`
   
    
}
function undateui(tr){

   
  var selectedRow=tr.parentElement.parentElement;
   console.log(selectedRow);
}
