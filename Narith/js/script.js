function translateToKhmer() {
  // Find the hidden Google Translate dropdown
  var selectField = document.querySelector('.goog-te-combo');
  
  // Select the Khmer and English buttons
  const btnTKM = document.querySelector('.t-km'),  // Assuming .t-km is for Khmer
        btnTEN = document.querySelector('.t-en'),
        langUsed = document.querySelector('#_lang_used');  // Assuming .t-en is for English
  
  // Check if the current language is not Khmer
  if (selectField && selectField.value !== 'km') {
    selectField.value = 'km';  // Set to Khmer
    selectField.dispatchEvent(new Event('change'));  // Trigger translation
    
    // Add background class to Khmer button, remove from English
    btnTKM.classList.add('bg-A96AE6');
    btnTEN.classList.remove('bg-A96AE6','text-white');
    langUsed.textContent = 'Khmer';
  } else {
    console.log('Already translated to Khmer.');
  }
}

function translateToEnglish() {
  // Find the hidden Google Translate dropdown
  var selectField = document.querySelector('.goog-te-combo');
  
  // Select the Khmer and English buttons
  const btnTKM = document.querySelector('.t-km'),  // Assuming .t-km is for Khmer
        btnTEN = document.querySelector('.t-en'),  // Assuming .t-en is for English
        langUsed = document.querySelector('#_lang_used');
  // Check if the current language is not English
  if (selectField && selectField.value !== 'en') {
    selectField.value = 'en';  // Set to English
    selectField.dispatchEvent(new Event('change'));  // Trigger translation
    
    // Add background class to English button, remove from Khmer
    btnTEN.classList.add('bg-A96AE6');
    btnTKM.classList.remove('bg-A96AE6','text-white');
    langUsed.textContent = 'English';
  } else {
    console.log('Already translated to English.');
  }
}

function toggleSlide() {
  const searchInput = document.getElementById('_el_search'),
        btnSearch = document.getElementById('_btn_search');
  
  if (searchInput.classList.contains('show')) {
      searchInput.classList.remove('show');
      searchInput.classList.add('hidden');
      btnSearch.classList.remove('c-A96AE6');
  } else {
      searchInput.classList.remove('hidden');
      searchInput.classList.add('show');
      btnSearch.classList.add('c-A96AE6');
  }
}

function showContainer(container) {
  let containers = document.querySelectorAll('.contain');
  // Hide all slides
  console.log(123,container);
  containers.forEach(contain => {
  console.log(222,contain.id);

    if(contain.id === container)
    contain.style.display = 'block';
    else
    contain.style.display = 'none';
  });
}