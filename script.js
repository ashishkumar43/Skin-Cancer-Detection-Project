document.getElementById('image').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
          const preview = document.getElementById('imagePreview');
          preview.src = e.target.result;
          preview.style.display = 'block'; // Show the image preview
      };
      reader.readAsDataURL(file);
  }
});

document.getElementById('predictionForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '<p>Processing prediction...</p>';

  // Simulate API call for prediction
  setTimeout(() => {
      resultDiv.innerHTML = '<p>Prediction: Skin cancer detected. Please consult a doctor.</p>';
  }, 2000);
});
