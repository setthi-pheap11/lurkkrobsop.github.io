
function itemShow(menu) {
  const self = document.getElementById('fashion-container');
  let contain_grid = self.querySelector('.contain-grid');
  let contain_list = self.querySelector('.contain-list');
  let menus_grid = self.querySelector('.menu-grid');
  let menus_list = self.querySelector('.menu-list');
  // Hide all slides
  if(menu == 'grid'){
    contain_grid.classList.add('show');
    contain_list.classList.remove('show','default');
    menus_grid.classList.add('bg-grid');
    menus_list.classList.add('bg-list');
    menus_grid.classList.remove('bg-list');
    menus_list.classList.remove('bg-grid');
  }else if(menu == 'list'){
    contain_grid.classList.remove('show','default');
    contain_list.classList.add('show');
    menus_grid.classList.remove('bg-grid');
    menus_list.classList.remove('bg-list');
    menus_grid.classList.add('bg-list');
    menus_list.classList.add('bg-grid');
  }
}

const productOrderToggle = document.getElementById('product-order-toggle');
const productOrderList = document.getElementById('product-order-list');

productOrderToggle.addEventListener('click', () => {
  productOrderList.classList.toggle('show');
});

const perPageToggle = document.getElementById('per-page-toggle');
const perPageList = document.getElementById('per-page-list');

perPageToggle.addEventListener('click', () => {
  perPageList.classList.toggle('show');
});
