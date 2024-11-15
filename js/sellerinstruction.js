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

