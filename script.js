
// let darkToggle = document.querySelector('#darkToggle');

// darkToggle.addEventListener('change', ()=> {
//   document.body.classList.toggle('dark');
// });



const bar = document.getElementById('arrow');
const nav=document.getElementById('navbar');
const close = document.getElementById('close');
const darky = document.getElementById('darkToggle');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
if(darky){
    darky.addEventListener('click',()=>{
        console.log("hey");
        document.body.classList.toggle('dark');
    })
}