function clickbuton() {
    var mybuton = document.querySelector('#button');
    mybuton.style.transition = "transform 0.1s ease";
  
    mybuton.addEventListener('mousedown', function() {
        mybuton.style.transform = 'scale(0.96)';
        

    });
  
    mybuton.addEventListener('mouseup', function() {
        mybuton.style.transform = 'scale(1)';
        
    });
  }
  
  