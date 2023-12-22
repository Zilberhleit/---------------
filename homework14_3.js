
let slider = document.querySelector('.slider');
let go = slider.querySelector('.go');

go.onmousedown = function(event){
    event.preventDefault();
    
    let shiftX = event.clientX - go.getBoundingClientRect().left;

    document.addEventListener('mousemove', MouseMove);
    document.addEventListener('mouseup', MouseUp);

    function MouseMove(event){
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

        if (newLeft < 0){
            newLeft = 0;
        }
        if (newLeft > (slider.offsetWidth - go.offsetWidth)){
            newLeft = slider.offsetWidth - go.offsetWidth;
        }
        go.style.left = newLeft+'px';
    }
    function MouseUp() {
        document.removeEventListener('mouseup', MouseUp);
        document.removeEventListener('mousemove', MouseMove);
    }
};

go.ondragstart = function() {
    return false;
};