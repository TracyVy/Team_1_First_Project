// Use of "browser payment APIs". Get doc ready for jQuery
var stripeAPI = Stripe("pk_test_P7Plzb4azqJyY0AykXyzua5G00pV8ZeRVp");
var yesOC = document.getElementById("select_oC");
var yesBS = document.getElementById("select_BS");
var yesPPS = document.getElementById("select_PPS");
var prodOC = "prod_HGG980qHRkY4Du";
var prodBS = "prod_HGGB6Gp8mn4dyg";
var prodPPS = "prod_HGbXaI4fE4JYfa";

var paymentRequest = stripe.paymentRequest({
  country: "US",
  currency: "usd",
  total: {
    label: "Demo total",
    amount: 1000,
  },
  requestPayerName: true,
  requestPayerEmail: true,
  // requestPayerPhone: true,
});

$(document).on("click", "#select_oC", function () {
  $.ajax({
    type: "GET",
    url: "https://api.stripe.com/v1/products/${prodOnCall}",
    datatype: "JSON",
  }).then(function (response) {
    console.log(response);
  });
});
// $(document).ready(function () {

//   $.ajax({
//     type: "GET",
//     url: "https://api.stripe.com/v1/products/${prod_id}",
//     datatype: "JSON",
//   }).then(function (response) {
//     console.log(response);

// })
