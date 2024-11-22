// Access the camera
accessCamera = ()=>{
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        var video = document.getElementById('video');
        video.srcObject = stream;
        video.play();
    })
    .catch(function(err) {
        console.log("An error occurred: " + err);
    });
    
    // Capture button functionality
    document.getElementById('captureButton').addEventListener('click', function() {
    var video = document.getElementById('video');
    var canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    var dataURL = canvas.toDataURL('image/png');
    console.log(dataURL); // You can use this data URL to display the captured image or send it to a server
    });
}

let cropper;
let currentFile;
document.getElementById('product-image').addEventListener('change', function(event) {
  const files = event.target.files;
  if (files.length > 0) {
    currentFile = files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const cropperImage = document.getElementById('cropper-image');
      cropperImage.src = e.target.result;
      document.getElementById('cropper-modal').style.display = 'block';
      cropper = new Cropper(cropperImage, {
        aspectRatio: 1,
        viewMode: 1,
      });
    };
    reader.readAsDataURL(currentFile);
  }
});

document.getElementById('close-modal').addEventListener('click', function() {
  document.getElementById('cropper-modal').style.display = 'none';
  cropper.destroy();
});

document.getElementById('crop-button').addEventListener('click', function() {
  const canvas = cropper.getCroppedCanvas();
  const previewContainer = document.getElementById('image-preview-container');
  const img = document.createElement('img');
  img.src = canvas.toDataURL();
  img.style.maxWidth = '100%';
  img.style.height = 'auto';
  previewContainer.appendChild(img);
  document.getElementById('cropper-modal').style.display = 'none';
  cropper.destroy();

  // Process next file if available
  const files = document.getElementById('product-image').files;
  const currentIndex = Array.from(files).indexOf(currentFile);
  if (currentIndex + 1 < files.length) {
    currentFile = files[currentIndex + 1];
    const reader = new FileReader();
    reader.onload = function(e) {
      const cropperImage = document.getElementById('cropper-image');
      cropperImage.src = e.target.result;
      document.getElementById('cropper-modal').style.display = 'block';
      cropper = new Cropper(cropperImage, {
        aspectRatio: 1,
        viewMode: 1,
      });
    };
    reader.readAsDataURL(currentFile);
  }
});

