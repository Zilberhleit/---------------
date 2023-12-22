let example = document.getElementById('img');
example.style.position = 'absolute';
example.style.left = Math.round(document.documentElement.clientWidth / 2 - example.offsetWidth / 2)+'px';
example.style.top = Math.round(document.documentElement.clientHeight / 2 - example.offsetWidth / 2)+'px';

let elem = document.querySelector('body');
elem.addEventListener('mousemove', function(event){
    let x = event.clientX;
    let y = event.clientY;
    console.log(x, y);
});

