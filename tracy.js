// Use of "browser payment APIs". Get doc ready for jQuery
var stripeAPI = Stripe("pk_test_P7Plzb4azqJyY0AykXyzua5G00pV8ZeRVp");
var yesOnCall = document.getElementById("select_oC");
var yesBasic = document.getElementById("select_dB");
var yesExpert = document.getElementById("select_dX");
var prodOnCall = "prod_HGIp8SvMNtQeca";
var prodBasic = "prod_HGCJfczaUxxEbY";
var prodExpert = "prod_HGCNajIFmRf5Mm"

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

$(document).on("click", "#select_oC", function (){
  $.ajax({
    type: "GET",
    url: "https://api.stripe.com/v1/products/${prodOnCall}",
    datatype: "JSON",
  }).then(function (response) {
    console.log(response);
})
$(document).ready(function () {
 
  $.ajax({
    type: "GET",
    url: "https://api.stripe.com/v1/products/${prod_id}",
    datatype: "JSON",
  }).then(function (response) {
    console.log(response);
    
