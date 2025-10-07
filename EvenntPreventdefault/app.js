const form = document.querySelector('#form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('sunmited form');
});

document.querySelector('a').addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('harusnya ke google');
});