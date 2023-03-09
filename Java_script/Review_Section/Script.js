const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

const image = document.getElementsByTagName('img')[0];
const review_name = document.getElementsByClassName('review-name')[0];
const review_designation = document.getElementsByClassName('review-designation')[0];
const review = document.getElementsByClassName('review')[0];

const left = document.getElementsByClassName('left')[0];
const right = document.getElementsByClassName('right')[0];
const Surprice = document.getElementsByClassName('Surprice')[0];


//iniatlize image 

var iniavalue = 0;
window.addEventListener('DOMContentLoaded', () => {
    showpersen()
})

function showpersen()
{
    data = reviews[iniavalue];
    image.src = data.img;
    review_name.innerHTML = data.name;
    review_designation.innerHTML = data.job;
    review.innerHTML = data.text;
}

right.addEventListener('click', () => {

    iniavalue++;
   if(iniavalue >= reviews.length)
   {
    iniavalue=0;
   }
    showpersen()
})


left.addEventListener('click',()=>{
    iniavalue--;
    if(iniavalue<0)
    {
     iniavalue=reviews.length-1;
    }
   
     showpersen()
})

Surprice.addEventListener('click',()=>{
      iniavalue=Math.round(Math.random()*reviews.length);
       
       showpersen();
})