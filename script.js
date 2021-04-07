// Navbar background color
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 30) {
	    $(".navbar").css({"background-color":"#B982E8"});
      $(".header-right a").css({"color":"black"});
      $(".dropbtn").css({"color":"black"});
    } else{
		  $(".navbar").css({"background-color":"transparent"});
      $(".header-right a").css({"color":"white"});
      $(".dropbtn").css({"color":"white"});  	
	  }
  })
})

// Profile Modal
var ebModal = document.getElementById('myProfileModal');
var ebBtn = document.getElementById("profileBtn");
var ebSpan = document.getElementsByClassName("ebcf_close")[0]; 
ebBtn.onclick = function() {
  ebModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ebSpan.onclick = function() {
    ebModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == ebModal) {
        ebModal.style.display = "none";
    }
}