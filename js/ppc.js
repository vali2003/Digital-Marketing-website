// Validation for Form 6
document.getElementById("quoteForm6").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("nameError6").textContent = "";
    document.getElementById("phoneError6").textContent = "";
    document.getElementById("emailError6").textContent = "";

    var name = document.getElementById("inputName6").value.trim();
    var phone = document.getElementById("inputPhone6").value.trim();
    var email = document.getElementById("inputEmail6").value.trim();

    var isValid = true;

    if (name === "") {
        document.getElementById("nameError6").textContent = "Please enter your name.";
        isValid = false;
    }

    if (phone === "" || !/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError6").textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError6").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("quoteForm6").submit();
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