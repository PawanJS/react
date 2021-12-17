const cartBtn = document.querySelector('.product-form__submit');

const getProduct = function (ID) {
  const addData = {
    id: ID,
    quantity: 1,
  };

  fetch('/cart/add.js', {
    body: JSON.stringify(addData),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'xmlhttprequest',
    },
    method: 'POST',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      //   console.log(json);
      getCart();
    })
    .catch(function (err) {
      console.error(err);
    });
};

const updateMiniCart = function (data) {
  data.items.forEach((item) => console.log(item.title));

  const productDetails = document.createElement('div');
  productDetails.innerHTML = `      
  <img class="cart-notification-product__image" src="" alt="Product image" width="70" height="37" loading="lazy">
  <div>
  <h3 class="cart-notification-product__name h4">tool</h3></div>
  </div>
`;

  const miniCart = document.querySelector('#cart-notification');
  miniCart.insertBefore(productDetails, miniCart.childNodes[2]);
};

const getCart = function (ID) {
  const addData = {
    id: ID,
    quantity: 1,
  };

  fetch('/cart/update.js', {
    body: JSON.stringify(addData),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'xmlhttprequest',
    },
    method: 'POST',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      //   console.log(json);
      updateMiniCart(json);
    })
    .catch(function (err) {
      console.error(err);
    });
};

cartBtn &&
  cartBtn.addEventListener('click', () => {
    const ID = document.querySelector('.product-id').value;
    getProduct(ID);
  });
