document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sbmit").onclick = function() {
        let year = document.getElementById("form").textContent.trim();
        let yearInput = parseInt(year);

        if (isNaN(yearInput) || year === "") {
            alert("Please enter your birth year");
        } else {
            let currentYear = 2024;
            let age = currentYear - yearInput;
            window.alert(`Your age is ${age}`);
        }
    }
});





 
