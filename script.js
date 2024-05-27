window.onload = function() {
    let formInput = document.getElementById("form");
    let sbmitButton = document.getElementById("submit");

        sbmitButton.onclick = function() {
            let yearInput = parseInt(formInput.value.trim());

            if (isNaN(yearInput) || yearInput === "") {
                alert("Please enter your birth year");
            } else {
                let currentYear = 2024;
                let age = currentYear - yearInput;
                window.alert(`Your age is ${age}`);
            }
        };
   
};





 
