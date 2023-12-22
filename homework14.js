let content = document.getElementById('content');

content.onclick =  function(event){
    let choice = confirm('Вы точно хотите перейти?');
    if (choice){
        return true;
    }
    else{
        return false;
    }
};