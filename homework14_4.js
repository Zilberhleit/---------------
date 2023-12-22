let cake1 = document.querySelector('.cake1');
let cake2 = document.querySelector('.cake2');
let trash = document.querySelector('.trash');

cake1.onmousedown = function(event){
    event.preventDefault();

    document.addEventListener('mousemove', MouseDown);
    document.addEventListener('mouseup', MouseUp);

    function MouseDown(event){
        let newTop = event.clientX - document.body.getBoundingClientRect().top;
        let newLeft = event.clientY - document.body.getBoundingClientRect().left;

        cake1.style.left = newLeft+'px';
        cake1.style.top = newTop+'px';
    }

    function MouseUp(event){
        document.removeEventListener('mouseup', MouseUp);
        document.removeEventListener('mousemove', MouseDown);
    }
};

go.ondragstart = function(){
    return false;
};