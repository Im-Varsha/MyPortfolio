// Get references to the button and image elements
function openCertificate(image) {
  console.log(image.value);
  window.open(image.value);
}

function closeCertificate(image) {
  console.log(image.value);
  window.close(image.value);
}

