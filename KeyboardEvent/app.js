document.querySelector('button').addEventListener('click',(e)=>{
    console.log(e);
});

const input = document.querySelector('input');
input.addEventListener('keydown',(e)=>{
    switch (e.code){
        case 'ArrowUp':
            console.log('Tombol Atas');
            break;
        case 'ArrowDown':
            console.log('Tombol bawah');
            break;
        case 'ArrowLeft':
            console.log('Tombol kiri');
            break;
        case 'ArrowRight':
            console.log('Tombol kanan');
            break;
        default:
            console.log('abaikan')
    }
});

// input.addEventListener('keyup',(e)=>{
//     console.log(e);
// });
