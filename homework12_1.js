let notif = document.getElementById('notes');
let ul = document.getElementById('note-list');
let item = document.getElementById('item');

function addingNotif(line){
    let newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(line));
    newLi.className = 'note-item';
    newLi.id = 'item';
    ul.appendChild(newLi);
}

let line = prompt('write data');
while (line !== "" && line !== null){
    addingNotif(line);
    console.log(line);
    line = prompt('write data');
}