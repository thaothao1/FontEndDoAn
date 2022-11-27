const BASE_URL = 'http://localhost:8000/api/api/randomProducts';
const getTodoItems = async () => {
  var content = "";
  try {
    const response = await axios.get(`${BASE_URL}`);

    const todoItems = response.data.data;
    console.log(todoItems);
    for (let i = 0; i < todoItems.length; i++) {
      console.log(todoItems[i]);
      document.getElementById("product").innerHTML +=
      `<div>
      <div class="product-item">
      <div class="pi-img-wrapper">
        <img class="img-responsive" id="myImg" src="${todoItems[i].image}">
        <div>
          <a href="assets/pages/img/products/model1.jpg" class="btn btn-default fancybox-button">Zoom</a>
          <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
        </div>
        </div>
      <h3><a id="link-name"  href="shop-item.html"></a>${todoItems[i].name}</h3>
      <div class="link-price" id="link-price">${todoItems[i].price}</div>
      <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
      <div class="sticker sticker-sale"></div></div></div>`
    }
    return todoItems;
  } catch (errors) {
    console.error(errors);
  }
};

getTodoIt