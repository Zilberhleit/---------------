let uli = document.querySelector('#ul');

uli.onclick = function(event){
    if (event.ctrlKey){
        selectMore(event.target);
    }
    else{
        select(event.target);
    }
}

uli.onmousedown = function(){
    return false;
}

let arr = []

function select(li){
    arr.forEach(elem => {
        elem.style.backgroundColor = 'white';
    })
    li.style.backgroundColor = 'red';
    arr.push(li);
}

function selectMore(li){
    li.style.backgroundColor = 'red';
    arr.push(li);
}