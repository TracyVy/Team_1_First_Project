var stripe = Stripe("pk_test_P7Plzb4azqJyY0AykXyzua5G00pV8ZeRVp");
var selectOC = document.getElementById("checkout-button-sku_HHOoZIjDmfQWmi");
var selectBS = document.getElementById("checkout-button-sku_HHPHHtsPhSg3q5");
var selectPPS = document.getElementById("checkout-button-sku_HHPViFaglEMZsD");

(function () {
  selectOC.addEventListener("click", function () {
    stripe
      .redirectToCheckout({
        lineItems: [{ price: "sku_HHOoZIjDmfQWmi", quantity: 1 }],
        mode: "payment",
        successUrl:
          "https://tracyvy.github.io/Team_1_First_Project/thanks/html",
        cancelUrl: "https://tracyvy.github.io/Team_1_First_Project/canceled",
      })
      .then(function (result) {
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer.
          var displayError = document.getElementById("error-message");
          displayError.textContent = result.error.message;
        }
      });
  });

  selectBS.addEventListener("click", function () {
    stripe
      .redirectToCheckout({
        lineItems: [{ price: "sku_HHPHHtsPhSg3q5", quantity: 1 }],
        mode: "payment",
        successUrl:
          "https://tracyvy.github.io/Team_1_First_Project/thanks.html?session_id={CHECKOUT_SESSION_ID}",
        cancelUrl: "https://tracyvy.github.io/Team_1_First_Project/canceled",
      })
      .then(function (result) {
        if (result.error) {
          var displayError = document.getElementById("error-message");
          displayError.textContent = result.error.message;
        }
      });
  });

  selectPPS.addEventListener("click", function () {
    stripe
      .redirectToCheckout({
        lineItems: [{ price: "sku_HHPViFaglEMZsD", quantity: 1 }],
        mode: "payment",
        successUrl:
          "https://tracyvy.github.io/Team_1_First_Project/thanks.html",
        cancelUrl: "https://tracyvy.github.io/Team_1_First_Project/canceled",
      })
      .then(function (result) {
        if (result.error) {
          var displayError = document.getElementById("error-message");
          displayError.textContent = result.error.message;
        }
      });
  });

  $.ajax({
    type: "GET",
    url: "https://api.stripe.com/v1/checkout/sessions/ ",
    datatype: "JSON",
  }).then(function (response) {
    console.log(response);
  });
})();
