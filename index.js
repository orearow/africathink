var anchor = document.querySelector(".open")
anchor.addEventListener("click", function openSlideMenu(){
  document.getElementById('side-menu').style.width = '250px';
  
 
})

var btn = document.querySelector(".btn-close")
btn.addEventListener("click", function closeSlideMenu(){
   document.getElementById('side-menu').style.width = '0';
 

})