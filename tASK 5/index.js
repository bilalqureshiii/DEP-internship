document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservation-form');
    const inputs = form.querySelectorAll('input');
    const modal = document.getElementById('submitModal');
    const openModalButton = document.getElementById('openbtn');
    const closeModalButton = document.getElementById('closeModal');

    // Real-time validation
    inputs.forEach(input => {
        input.addEventListener('input', validateField);
        input.addEventListener('blur', validateField);
    });

    function validateField(event) {
        const field = event.target;
        const errorElement = document.getElementById(`${field.id}-error`);

        if (field.validity.valid) {
            errorElement.textContent = ''; // Clear error message if valid
            field.style.borderColor = 'green'; // Optional: highlight valid fields
        } else {
            showError(field, errorElement);
        }
    }

    function showError(field, errorElement) {
        if (field.validity.valueMissing) {
            errorElement.textContent = `${field.name} is required.`;
        } else if (field.validity.typeMismatch) {
            errorElement.textContent = `Please enter a valid ${field.name}.`;
        } else if (field.validity.patternMismatch) {
            errorElement.textContent = `Please follow the format for ${field.name}.`;
        }
        field.style.borderColor = 'red'; // Optional: highlight invalid fields
    }

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Check for any errors in the form
        let isValid = true;
        inputs.forEach(input => {
            if (!input.validity.valid) {
                isValid = false; // Set isValid to false if any input is invalid
                showError(input, document.getElementById(`${input.id}-error`));
            }
        });

        // Show the modal only if all fields are valid
        if (isValid) {
            modal.style.display = 'flex'; // Show the modal
        }
    });

    // Close the modal when the close button is clicked
    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none'; // Hide the modal
        form.reset(); // Reset the form inputs
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none'; // Hide the modal
            form.reset(); // Reset the form inputs
        }
    });
});
