function translateToKhmer() {
  // Trigger the Google Translate element to translate the page to Khmer
  var selectField = document.querySelector('.goog-te-combo');
  if (selectField) {
    selectField.value = 'km';  // 'km' is the language code for Khmer
    selectField.dispatchEvent(new Event('change')); // Trigger the change event
  }
}
function translateToKhmer() {
  // Trigger the Google Translate element to translate the page to Khmer
  let skiptranslate = document.querySelector('.skiptranslate');
  skiptranslate.style.display = 'none';
  var selectField = document.querySelector('.goog-te-combo');
  if (selectField) {
    selectField.value = 'km';  // 'km' is the language code for Khmer
    selectField.dispatchEvent(new Event('change')); // Trigger the change event
  }
}
