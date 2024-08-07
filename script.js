// document.getElementById('registrationForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Display the success message
//     document.getElementById('message').classList.remove('hidden');

//     // Redirect to the home page after 2 seconds
//     setTimeout(function() {
//         window.location.href = 'index.html'; // Replace 'index.html' with your home page URL
//     }, 2000);
// });
// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Validate the form (add your own validation logic here)
//     var emailField = document.getElementById('email');
//     var emailError = document.getElementById('email_error');

//     if (!validateEmail(emailField.value)) {
//         emailError.textContent = 'Please enter a valid email address.';
//         return;
//     } else {
//         emailError.textContent = ''; // Clear the error message
//     }

//     // Display the modal
//     showModal('Successfully Registered');

//     // Redirect to the home page after 2 seconds
//     setTimeout(function() {
//         window.location.href = 'index.html'; // Replace 'index.html' with your home page URL
//     }, 2000);
// });

// function validateEmail(email) {
//     // Simple email validation (you can improve this as needed)
//     var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
// }

// function showModal(message) {
//     // Create modal elements
//     var modal = document.createElement('div');
//     modal.id = 'modal';
//     modal.className = 'modal';

//     var modalContent = document.createElement('div');
//     modalContent.className = 'modal-content';

//     var closeButton = document.createElement('span');
//     closeButton.className = 'close-button';
//     closeButton.innerHTML = '&times;';
//     closeButton.onclick = function() {
//         modal.style.display = 'none';
//     };

//     var messageParagraph = document.createElement('p');
//     messageParagraph.textContent = message;

//     // Append modal elements
//     modalContent.appendChild(closeButton);
//     modalContent.appendChild(messageParagraph);
//     modal.appendChild(modalContent);
//     document.body.appendChild(modal);

//     // Display the modal
//     modal.style.display = 'block';

//     // Close the modal when the user clicks anywhere outside of the modal
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = 'none';
//         }
//     }
// }
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate the form
    var isValid = validateForm();

    if (isValid) {
        alert('Successfully Registered');
        window.location.href = 'index.html'; // Replace 'index.html' with your home page URL
    }
});

function validateForm() {
    var emailField = document.getElementById('email');
    var emailError = document.getElementById('email_error');
    var contactNoField = document.getElementById('contact-no');
    var contactNoError = document.getElementById('contact_no_error');

    var isValid = true;

    // Email validation
    if (!validateEmail(emailField.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailError.textContent = ''; // Clear the error message
    }

    // Contact number validation (simple check for digits only)
    if (!validateContactNo(contactNoField.value)) {
        contactNoField.nextElementSibling.textContent = 'Please enter a valid contact number.';
        isValid = false;
    } else {
        contactNoField.nextElementSibling.textContent = ''; // Clear the error message
    }

    return isValid;
}

function validateEmail(email) {
    // Simple email validation
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateContactNo(contactNo) {
    // Simple contact number validation (digits only, length check)
    var re = /^\d{10}$/;
    return re.test(contactNo);
}
