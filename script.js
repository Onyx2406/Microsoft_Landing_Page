// scroll-to-top selection
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
	window.scrollTo({
	  top: 0,
	  left: 0,
	  behavior: "smooth",
	});
  });

var winWidth = $(window).width();
	dropdownMenu(winWidth);
	
	$(window).on('resize', function(){
		winWidth = $(window).width();
		dropdownMenu(winWidth);
	});

    
