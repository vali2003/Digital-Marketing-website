
    
    
    
    

    // Testimonial 
    var swiper2 = new Swiper(".mySwiper11292", {
        slidesPerView: "auto",
        direction: "vertical",
        spaceBetween: 20,
        loop: true,
        autoplay: true
      });
    
    // end
   // Validation for Form 10
document.getElementById("quoteForm10").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("nameError10").textContent = "";
    document.getElementById("phoneError10").textContent = "";
    document.getElementById("emailError10").textContent = "";

    var name = document.getElementById("inputName10").value.trim();
    var phone = document.getElementById("inputPhone10").value.trim();
    var email = document.getElementById("inputEmail10").value.trim();

    var isValid = true;

    if (name === "") {
        document.getElementById("nameError10").textContent = "Please enter your name.";
        isValid = false;
    }

    if (phone === "" || !/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError10").textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError10").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("quoteForm10").submit();
    }
});