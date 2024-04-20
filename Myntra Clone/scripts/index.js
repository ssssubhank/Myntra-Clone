const bagItems = new Set();

onLoad();
function onLoad() {
  displayOnHomePage();
  displayBagitemCount();
}

function addtoBag(itemId) {
  bagItems.add(itemId);
  localStorage.setItem("bagItems", JSON.stringify(Array.from(bagItems)));
  displayBagitemCount();
}

function displayBagitemCount() {
  let bag_Element = document.querySelector(".bag-item-count");
  if (!bag_Element) {
    // Element not found, handle this case
    console.error("Element with class 'bag-item-count' not found.");
    return;
  }

  let bag_items_count = localStorage.getItem("bagItems");
  if (bag_items_count) {
    const bagItemsArray = JSON.parse(bag_items_count);
    if (bagItemsArray.length > 0) {
      bag_Element.style.visibility = "visible";
      bag_Element.innerText = bagItemsArray.length;
    } else {
      bag_Element.style.visibility = "hidden";
    }
  } else {
    bag_Element.style.visibility = "hidden";
  }
}

function displayOnHomePage() {
  let itemsContainerElement = document.querySelector(".items-container");
  if (!itemsContainerElement) {
    return;
  }

  let innerHtml = "";
  items.forEach((item) => {
    innerHtml += `

  <div class="item-container">

      <div class="items-image-container">
        <img class="item-image" src="${item.image}" />
      </div>

      <div class="descriptive-container">
        <div class="rating">Rating ${item.rating.stars} ⭐ | ${item.rating.count}</div>
        <div class="company-name">${item.company}</div>
        <div class="product-name">${item.item_name}</div>
        <div class="price">
          <span class="current-price">Rs. ${item.current_price}</span>
          <span class="original-price">Rs. ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% Off)</span>
        </div>

      </div>
                     <button class="wishlist-button">
        <i class="fa-regular fa-heart fa-lg"></i>
        WISHLIST
      </button>
      <button class="add-to-bag" onclick="addtoBag(${item.id})"> 
      Add to Bag
      </button>
  </div>`;
  });
  itemsContainerElement.innerHTML = innerHtml;
}
// items_test = document.querySelector("items-container");
