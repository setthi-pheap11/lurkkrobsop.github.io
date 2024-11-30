// script.js

const products = {
  1: {
    name: "Clash Of Clan",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$19.99",
    imageUrl: "Product/image/game/clashofclan.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/game/clashofclan.png",
    smallimage2: "Product/image/game/clashofclan.png",
  },
  2: {
    name: "Rule Of Survival",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$5.99",
    imageUrl: "Product/image/game/ruleofsurvival.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/game/ruleofsurvival.png",
    smallimage2: "Product/image/game/ruleofsurvival.png",
  },
  3: {
    name: "Pubg Mobile",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$10.99",
    imageUrl: "Product/image/game/pubg.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/game/pubg.png",
    smallimage2: "Product/image/game/pubg.png",
  },
  4: {
    name: "Minecraft",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$9.99",
    imageUrl: "Product/image/game/minecraff.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/game/minecraff.png",
    smallimage2: "Product/image/game/minecraff.png",
  },
  5: {
    name: "GTA V",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$12.99",
    imageUrl: "Product/image/game/gtav.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/game/gtav.png",
    smallimage2: "Product/image/game/gtav.png",
  },
  6: {
    name: "Subway Surfer",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$2.99",
    imageUrl: "Product/image/game/subway.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/game/subway.png",
    smallimage2: "Product/image/game/subway.png",
  },
  7: {
    name: "Dreamleauge",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$2.99",
    imageUrl: "Product/image/game/dreamleauge.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/game/dreamleauge.png",
    smallimage2: "Product/image/game/dreamleauge.png",
  },
  8: {
    name: "EA Sport FC",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$5.99",
    imageUrl: "Product/image/game/fifa.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/game/fifa.png",
    smallimage2: "Product/image/game/fifa.png",
  },
  9: {
    name: "E Football",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$2.99",
    imageUrl: "Product/image/game/pes.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/game/pes.png",
    smallimage2: "Product/image/game/pes.png",
  },
  10: {
    name: "Temple Run 2",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$2.99",
    imageUrl: "Product/image/game/templerun.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/game/templerun.png",
    smallimage2: "Product/image/game/templerun.png",
  },
  11: {
    name: "Illustator",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$2.99",
    imageUrl: "Product/image/software/ai.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/software/ai.png",
    smallimage2: "Product/image/software/ai.png",
  },
  12: {
    name: "Photoshop",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$2.99",
    imageUrl: "Product/image/software/photoshop.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/software/photoshop.png",
    smallimage2: "Product/image/software/photoshop.png",
  },
  13: {
    name: "ligthroom",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$2.99",
    imageUrl: "Product/image/software/lightroom.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/software/lightroom.png",
    smallimage2: "Product/image/software/lightroom.png",
  },
  14: {
    name: "Coredraw",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$2.99",
    imageUrl: "Product/image/software/coreldraw.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/software/coreldraw.png",
    smallimage2: "Product/image/software/coreldraw.png",
  },
  15: {
    name: "Primierer",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$2.99",
    imageUrl: "Product/image/software/premer.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/software/premer.png",
    smallimage2: "Product/image/software/premer.png",
  },
  16: {
    name: "After Effect",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$2.99",
    imageUrl: "Product/image/software/aftereffect.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/software/aftereffect.png",
    smallimage2: "Product/image/software/aftereffect.png",
  },
  17: {
    name: "Acrobat",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$2.99",
    imageUrl: "Product/image/software/acrobat.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/software/acrobat.png",
    smallimage2: "Product/image/software/acrobat.png",
  },
  18: {
    name: "IDESIGN",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$2.99",
    imageUrl: "Product/image/software/idesign.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/software/idesign.png",
    smallimage2: "Product/image/software/idesign.png",
  },
  19: {
    name: "Word",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$2.99",
    imageUrl: "Product/image/software/newword.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/software/newword.png",
    smallimage2: "Product/image/software/newword.png",
  },
  20: {
    name: "Excel",
    description:"All hand-made with natural soy wax, Candleaf is made for your pleasure moments All hand-made with natural soy wax, Candleaf is made for your pleasure moments with natural soy wax, Candleaf is made for your pleasure moment ...",
    price: "$2.99",
    imageUrl: "Product/image/software/excel.png",
    shopname: "kaka",
    open: "7:00 am - 9:00 pm",
    discount: "discount off",
    promotion: "11/12/2024 - 11/13/2024",
    smallimage1: "Product/image/software/excel.png",
    smallimage2: "Product/image/software/excel.png",
  },
};
// document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const productDetail = document.getElementById("product-detail");
  const backButton = document.getElementById("back-button");

  const productName = document.getElementById("product-name");
  const productDescription = document.getElementById("product-description");
  const productPrice = document.getElementById("product-price");
  const productImage = document.querySelector("img#product-image");
  const productImage1 = document.getElementById("product-image1");
  const productImage2 = document.getElementById("product-image2");

  const shopname = document.getElementById("shop-name");
  const open = document.getElementById("open");
  const disccount = document.getElementById("discount");
  const promotion = document.getElementById("promotion");

  productList.addEventListener("click", (e) => {
    const productCard = e.target.closest(".product-card");
    if (!productCard) return;

    const productId = productCard.getAttribute("data-product-id");
    const product = products[productId];

    if (product) {
      // productList.classList.add("hidden");
      // productDetail.classList.remove("hidden");
      
      setData(product);
      showContainer('detail-container',false);
    }
  });

  // backButton.addEventListener("click", () => {
  //   productDetail.classList.add("hidden");
  //   productList.classList.remove("hidden");
  // });
// });
setData = (product)=>{
  productName.textContent = product.name;
  productDescription.textContent = product.description;
  productPrice.textContent = product.price;
  productImage.src = product.imageUrl;
  productImage.alt = product.name;
  shopname.textContent = product.shopname;
  open.textContent = product.open;
  disccount.textContent = product.discount;
  promotion.textContent = product.promotion;
  productImage1.src = product.smallimage1;
  productImage2.src = product.smallimage2;
}

let body = document.querySelector('body');
const backBtn = document.getElementById("back-btn");
body.addEventListener("click", (e) => {
  e.preventDefault();
  const limitParent = document.querySelector(".product-thumb7"); // Define the limit parent
    let productCard = closestLimited(e.target, ".item-product", limitParent);
    if (productCard) {
      const product = products[5];
      setData(product);
    }
    productCard = e.target.closest(".product-thumb-link");
    if (productCard){
      // const productId = productCard.getAttribute("data-product-id");
      const product = products[6];
      setData(product);
      console.log(1233,module);

    }else return;
  showContainer('detail-container',false);
});

goBack = () => {
  let module = document.getElementById("qty").value;
  console.log(1233,module);
  showContainer(module+'-container');
};

function closestLimited(element, selector, limitParent) {
  let current = element;
  while (current && current !== limitParent && !current.matches(selector)) {
    current = current.parentElement;
  }
  return current && current !== limitParent ? current : null;
}
