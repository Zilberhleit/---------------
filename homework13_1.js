window.addEventListener('scroll', function(){
    let offset = window.pageYOffset;
    document.querySelector('.parallax-bg').style.backgroundPositionY = offset * 0.7 + 'px';
    document.querySelector('.parallax-bg1').style.backgroundPositionY = offset * 0.7 + 'px';
  });