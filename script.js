var button = document.getElementById('like'); 

button.onclick = function click() {
    if (button.style.backgroundColor == 'gray'){
        button.style.backgroundColor = 'pink';
    }
    else{
        button.style.backgroundColor = 'gray';
    }
}

