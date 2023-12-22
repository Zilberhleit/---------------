let node = document.getElementById('note');
let note_block = document.getElementById('notes');
let note_text = document.getElementById('note-text');
let closeButton = document.getElementById('close');
let annoucements = ["Annoucemet 1","Annoucemet 2","Annoucemet 3","Annoucemet 4"];
let count = 0;

function createNew() {
    let newDoc = document.createElement('div');
    newDoc.className = 'notes';
    newDoc.style.display = 'flex';
    newDoc.style.justifyContent = 'space-between';
    newDoc.innerHTML = annoucements[count];
    let button = document.createElement('button');
    button.innerHTML = "X";
    button.style.height = '20px';
    newDoc.appendChild(button);
    
    button.onclick = function(){newDoc.style.display = 'none';};

    count++;
    if (count == 4){
        count = 0;
    }
    document.body.appendChild(newDoc);
}

function waitingDecorator(func){
    if (closeButton.onclick == true){
        setTimeout(func, 10000);
    }
}

let timer = setInterval(createNew, 3000);