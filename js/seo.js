// accordion start
const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )


// time line script start
$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "3%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "25%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "50%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "75%");
	$(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "100%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});
// Validation for Form 9
document.getElementById("quoteForm9").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("nameError9").textContent = "";
    document.getElementById("phoneError9").textContent = "";
    document.getElementById("emailError9").textContent = "";

    var name = document.getElementById("inputName9").value.trim();
    var phone = document.getElementById("inputPhone9").value.trim();
    var email = document.getElementById("inputEmail9").value.trim();

    var isValid = true;

    if (name === "") {
        document.getElementById("nameError9").textContent = "Please enter your name.";
        isValid = false;
    }

    if (phone === "" || !/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError9").textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError9").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("quoteForm9").submit();
    }
});
// Testimonial 
var swiper2 = new Swiper(".mySwiper11292", {
    slidesPerView: "auto",
    direction: "vertical",
    spaceBetween: 20,
    loop: true,
    autoplay: true
  });

// end