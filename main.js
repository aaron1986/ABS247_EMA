document.getElementById('form_img').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let formData = new FormData();

    let fileInput = document.getElementById('img-file');
    let file = fileInput.files[0];
    formData.append('img-file', file);

    let name_of_ride = document.getElementById('name_of_ride').value;
    formData.append('name_of_ride', name_of_ride);

    let date = document.getElementById('date').value;
    formData.append('date', date);

    let appt = document.getElementById('appt').value;
    formData.append('appt', appt);

    let duration = document.getElementById('duration').value;
    formData.append('duration', duration);

    let meetingPoint = document.getElementById('meetingPoint').value;
    formData.append('meetingPoint', meetingPoint);

    let distance = document.getElementById('distance').value;
    formData.append('distance', distance);

    let elevation = document.getElementById('elevation').value;
    formData.append('elevation', elevation);

    let maximum_group_size = document.getElementById('maximum_group_size').value;
    formData.append('maximum_group_size', maximum_group_size);

    let name_of_leader = document.getElementById('name_of_leader').value;
    formData.append('name_of_leader', name_of_leader);

    let contact_number = document.getElementById('contact_number').value;
    formData.append('contact_number', contact_number);

    let alternative_contact_number = document.getElementById('alternative_contact_number').value;
    formData.append('alternative_contact_number', alternative_contact_number);

    let comments = document.getElementById('comments').value;
    formData.append('comments', comments);

    let status = document.getElementById('status').value;
    formData.append('status', status);

    let sessionIdentifier = document.getElementById('SessionIdentifier').value;
    formData.append('SessionIdentifier', sessionIdentifier);

    fetch('https://students.open.ac.uk/mct/tt284/reflect/reflect.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert('Image uploaded successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while uploading the image.');
    });
});


//validation form 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form_img").addEventListener("submit", function(event) {
        event.preventDefault();
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());

        let isValid = true;
        function displayError(input, message) {
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.style.color = 'red';
            errorMessage.innerText = message;
            input.parentNode.insertBefore(errorMessage, input.nextSibling);
            isValid = false;
        }

        // Validation for words only fields
        const wordFields = ["name_of_ride", "type_of_ride", "name_of_leader"];
        wordFields.forEach(function(fieldId) {
            const input = document.getElementById(fieldId);
            const regex = /^[a-zA-Z\s]+$/;
            if (!regex.test(input.value)) {
                displayError(input, "This field must contain only letters and spaces.");
            }
        });

        // Validation for numbers only fields
        const numberFields = ["maximum_group_size", "contact_number", "alternative_contact_number"];
        numberFields.forEach(function(fieldId) {
            const input = document.getElementById(fieldId);
            const regex = /^[0-9]+$/;
            if (!regex.test(input.value)) {
                displayError(input, "This field must contain only numbers.");
            }
        });

        if (isValid) {
            event.target.submit();
        }
    });
});
