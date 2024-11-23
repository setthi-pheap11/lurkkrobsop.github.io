document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', event => {
      console.log(`${event.target.id} selected: ${event.target.value}`);
    });
  });
  
  document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', event => {
      console.log(`${event.target.id} updated: ${event.target.value}`);
    });
  });
  