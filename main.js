

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('form_img').addEventListener('submit', function(event) {
      event.preventDefault(); 

      // Get the form data
      const fileInput = document.getElementById('img-file');
      const dateInput = document.getElementById('date');
      const commentsInput = document.getElementById('comments');
      const sessionIdentifierInput = document.getElementById('SessionIdentifier');

      // Create a FormData object
      const formData = new FormData();
      formData.append('img-file', fileInput.files[0]);
      formData.append('date', dateInput.value);
      formData.append('comments', commentsInput.value);
      formData.append('SessionIdentifier', sessionIdentifierInput.value);

      // Send the form data using fetch
      fetch('https://students.open.ac.uk/mct/tt284/reflect/reflect.php', {
          method: 'POST',
          body: formData
      })
      .then(response => response.text())
      .then(result => {
          console.log('Success:', result);
          alert('Image uploaded successfully!');
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Error uploading image.');
      });
  });
});


//form for accounments
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('form_announcement');
    const announcementInput = document.getElementById('announcement');
    const mainDiv = document.querySelector('main'); 

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const announcementText = announcementInput.value; 

     
            const displayDiv = document.createElement('div');
            displayDiv.classList.add('announcement-text');
            displayDiv.textContent = `${announcementText}`;
            mainDiv.appendChild(displayDiv);
        }
    );
    
    announcementInput.addEventListener('input', function() {
        const announcementText = announcementInput.value;
        const invalidChars = /[^a-zA-Z0-9\s]/g; 
        if (invalidChars.test(announcementText)) {
            announcementInput.value = announcementText.replace(invalidChars, '');
        }
    });
});
