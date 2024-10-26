function translateToKhmer() {
  // Find the hidden Google Translate dropdown
  var selectField = document.querySelector('.goog-te-combo');
  
  // Select the Khmer and English buttons
  const btnTKM = document.querySelector('.t-km'),  // Assuming .t-km is for Khmer
        btnTEN = document.querySelector('.t-en');  // Assuming .t-en is for English
  
  // Check if the current language is not Khmer
  if (selectField && selectField.value !== 'km') {
    selectField.value = 'km';  // Set to Khmer
    selectField.dispatchEvent(new Event('change'));  // Trigger translation
    
    // Add background class to Khmer button, remove from English
    btnTKM.classList.add('bg-A96AE6');
    btnTEN.classList.remove('bg-A96AE6','text-white');
  } else {
    console.log('Already translated to Khmer.');
  }
}

function translateToEnglish() {
  // Find the hidden Google Translate dropdown
  var selectField = document.querySelector('.goog-te-combo');
  
  // Select the Khmer and English buttons
  const btnTKM = document.querySelector('.t-km'),  // Assuming .t-km is for Khmer
        btnTEN = document.querySelector('.t-en');  // Assuming .t-en is for English
  
  // Check if the current language is not English
  if (selectField && selectField.value !== 'en') {
    selectField.value = 'en';  // Set to English
    selectField.dispatchEvent(new Event('change'));  // Trigger translation
    
    // Add background class to English button, remove from Khmer
    btnTEN.classList.add('bg-A96AE6');
    btnTKM.classList.remove('bg-A96AE6','text-white');
  } else {
    console.log('Already translated to English.');
  }
}
