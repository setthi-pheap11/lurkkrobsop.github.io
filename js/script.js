let lastContain = '';
// var selectField = document.querySelector('.goog-te-combo');

function translateToKhmer() {
  // Find the hidden Google Translate dropdown
  var selectField = document.querySelector('.goog-te-combo');
  console.log(8877,selectField);
  // Select the Khmer and English buttons
  const btnTKM = document.querySelector('.t-km'),  // Assuming .t-km is for Khmer
        btnTEN = document.querySelector('.t-en'),
        langUsed = document.querySelector('#_lang_used');  // Assuming .t-en is for English
  
  // Check if the current language is not Khmer
  if (selectField && selectField.value !== 'km') {
    selectField.value = 'km';  // Set to Khmer
    selectField.dispatchEvent(new Event('change'));  // Trigger translation
    if(selectField.value !== 'km'){
      selectField.value = 'km';  // Set to Khmer
      selectField.dispatchEvent(new Event('change'));
    }
      
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
    if(selectField.value !== 'en'){
      selectField.value = 'en';  // Set to Khmer
      selectField.dispatchEvent(new Event('change'));
    }
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
  let menus = document.querySelectorAll('.menu-item');
  // AOS.init();
  // Hide all slides
  // console.log(123,container);
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  let c = container.replace("-container", "");
  link.href = `css/${c}.css`;  
  link.id = `${c}`;
  if(c=='myAcount'){
    showLoinForm();
  }
  
  containers.forEach(contain => {
    if(contain.id === container){
      
      contain.classList.add('show')
      // contain.classList.remove('defult')
      if (!document.head.contains(link)) {
        document.head.appendChild(link);
      }
      // console.log(23524565,container);
      // if(container=='sellerinstruction-container'){
      //   bootstrap_link(true);
      // }else{
      //   bootstrap_link(false);
      // }
    }
    else{
      contain.classList.remove('show')
      contain.classList.remove('default')
      const cid = contain.id.replace("-container", "");
      const elink = document.head.querySelector(`#${cid}`);
      if(cid != 'home' && cid != c){
        if (document.head.contains(elink)) {
          document.head.removeChild(elink);
          console.log(333,elink);
        }
      }
    }
  });

  menus.forEach(menu => {
    if(menu.id === container.split('-')[0])
      menu.classList.add('active');
    else
      menu.classList.remove('active');
  });


}

bootstrap_link = (remove = true)=>{
  if(remove){
    const bootstrapCSS = document.querySelector(
      'link[href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"]'
    );
    if (bootstrapCSS) {
      bootstrapCSS.remove();
    }
    const bootstrapJS = document.querySelector(
      'script[src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"]'
    );
    if (bootstrapJS) {
      bootstrapJS.remove();
    }
  }
  else{
    const bootstrapCSS = document.querySelector(
      'link[href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"]'
    );
    if (!bootstrapCSS) {
      const linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
      document.head.appendChild(linkElement);
      console.log("Bootstrap 5.3.3 CSS added.");
    }
    const bootstrapJS = document.querySelector(
      'script[src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"]'
    );

    if (!bootstrapJS) {
      const scriptElement = document.createElement("script");
      scriptElement.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
      document.head.appendChild(scriptElement);
      console.log("Bootstrap 5.3.3 JS added.");
    }
  }
  

}

