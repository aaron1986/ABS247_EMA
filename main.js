

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