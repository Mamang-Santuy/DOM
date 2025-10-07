const randomColor = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll('button');

for(let button of buttons){
    button.addEventListener('click',ColorRandom);
}

const headings = document.querySelectorAll('h1');

for(let heading of headings){
    heading.addEventListener('click',ColorRandom);
}

function ColorRandom(){
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}