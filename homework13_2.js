let content = document.getElementById('p-g');

window.addEventListener('scroll', function(){
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        content.innerHTML += '<p>Added content</p>';
    }      
});