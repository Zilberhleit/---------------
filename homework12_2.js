function ShowNotification(options){
    let notif = document.createElement('div');
    
    notif.className = 'notification';
    notif.id = 'notif';
    notif.style.display = 'block';
    notif.style.backgroundColor = "red";
    notif.style.width = "400px";
    notif.style.height = "200px";
    notif.style.color = 'white';
    notif.style.position = 'relative';
    notif.style.right = '-50%';
    notif.style.bottom = '-330px';
    notif.innerHTML = options;
    document.body.appendChild(notif);
}

let foo = ShowNotification("rvgehudijdhrghedwhvfwihfsbvhfbaueifjvsbfr");

function eraseDiv(){
    let div = document.getElementById('notif');
    div.style.display = 'none';
}

setTimeout(eraseDiv, 1500);

