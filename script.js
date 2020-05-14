// Use of "browser payment APIs". Get doc ready for jQuery
var stripe_pk_API = Stripe("pk_test_P7Plzb4azqJyY0AykXyzua5G00pV8ZeRVp");
let secretKey = "sk_test_ouWhRvyXxMFfgerkgNAERERC00SEIgzWxm";

$(document).ready(function () {
  // var invoiceID = "";

  $.get({
    url: "https://api.stripe.com/v1/charges",
    datatype: "JSON",
    headers: {
      Authorization: "Bearer " + secretKey,
    },
    contentType: "application/json; charset=utf-8",
    success: function (result) {
      console.log(JSON.stringify(result.expand));
      const receiptID = document.getElementById("receipt_id");
      $("#receipt_id").innerHTML = JSON.stringify(result);
    },
    error: function (error) {},
  });
});
