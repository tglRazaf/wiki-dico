const souris = document.querySelector('.mouse')         
document.addEventListener('mousemove', function(e){
   console.log(e)
   souris.style.left = e.clientX + 'px'
   souris.style.top = e.clientY + 'px'
})