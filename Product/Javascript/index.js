let slideIndex = 0;
const slides = document.querySelector(".slides");

function moveSlide(direction) {
  slideIndex += direction;
  if (slideIndex < 0) {
    slideIndex = slides.children.length - 1;
  } else if (slideIndex >= slides.children.length) {
    slideIndex = 0;
  }
  slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// product printcing

const products = [
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item1.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item2.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
];

// drink

const drink = [
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item1.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item2.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
];

// cloth

const Accesory = [
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item1.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item2.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
];

const shoe = [
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item1.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item2.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
];

const skincare = [
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item1.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item2.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
];

const electronic = [
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item1.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item2.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
];

//cloth
const cloth = [
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item1.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item2.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
  {
    name: "Manfinity RSRT Men Drawstring Waist Paisley Print Shorts",
    price: "$2499",
    shop: "Poki Poki",
    openTime: "09:00 AM - 10:00 PM",
    image: "/Product/image/item3.png",
  },
];

const productGrid = document.querySelector(".food");

products.forEach((product) => {
  productGrid.innerHTML += `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>Shop: ${product.shop}</p>
        <p>Open: ${product.openTime}</p>
        <p class="price">${product.price}</p>
        <button class="add-to-cart">Add To Cart</button>
      </div>
    </div>
  `;
});

const drinks = document.querySelector(".drink");
drink.forEach((product) => {
  drinks.innerHTML += `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>Shop: ${product.shop}</p>
        <p>Open: ${product.openTime}</p>
        <p class="price">${product.price}</p>
        <button class="add-to-cart">Add To Cart</button>
      </div>
    </div>
  `;
});

const cloths = document.querySelector(".cloth");
cloth.forEach((product) => {
  cloths.innerHTML += `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>Shop: ${product.shop}</p>
        <p>Open: ${product.openTime}</p>
        <p class="price">${product.price}</p>
        <button class="add-to-cart">Add To Cart</button>
      </div>
    </div>
  `;
});

//accesory
const accesory = document.querySelector(".acceserry");
Accesory.forEach((product) => {
  accesory.innerHTML += `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>Shop: ${product.shop}</p>
        <p>Open: ${product.openTime}</p>
        <p class="price">${product.price}</p>
        <button class="add-to-cart">Add To Cart</button>
      </div>
    </div>
  `;
});

//shoe
const shoes = document.querySelector(".shoe");
shoe.forEach((product) => {
  shoes.innerHTML += `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>Shop: ${product.shop}</p>
        <p>Open: ${product.openTime}</p>
        <p class="price">${product.price}</p>
        <button class="add-to-cart">Add To Cart</button>
      </div>
    </div>
  `;
});

//skin care
const skincares = document.querySelector(".skincare");
skincare.forEach((product) => {
  skincares.innerHTML += `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>Shop: ${product.shop}</p>
        <p>Open: ${product.openTime}</p>
        <p class="price">${product.price}</p>
        <button class="add-to-cart">Add To Cart</button>
      </div>
    </div>
  `;
});

//electronic
const electronics = document.querySelector(".electronic");
electronic.forEach((product) => {
  electronics.innerHTML += `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>Shop: ${product.shop}</p>
        <p>Open: ${product.openTime}</p>
        <p class="price">${product.price}</p>
        <button class="add-to-cart">Add To Cart</button>
      </div>
    </div>
  `;
});
electronics.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("click", () => {
    const productId = card.getAttribute("data-id");
    // Redirect to product detail page with the product ID
    window.location.href = `product-detail.html?id=${productId}`;
  });
});
