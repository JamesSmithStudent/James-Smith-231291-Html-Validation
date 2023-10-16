
// Run code when the document loads
$(document).ready(function() {

    // ---------------------------------------------------------------------------------------------------
    // Sign up form
    // ---------------------------------------------------------------------------------------------------

    // ---------------------------------------------------------------------------------------------------
    // On Submit, prevent the default form submission

    $('#signupForm').submit(function(event) {

        event.preventDefault();
        
        if (this.checkValidity() === false) {
            event.stopPropagation();
        } else {
            // Add any submission code here, like saving the data to localStorage
            window.location.href = 'pages/browse.html';
        }
        $(this).addClass('was-validated');
    });
});


const password = document.getElementById('password');
const password2 = document.getElementById('password2');

if (password2 !== password) {
      event.preventDefault();
}
else{
    $(this).addClass('was-validated');
};