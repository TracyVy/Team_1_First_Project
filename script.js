// Use of "browser payment APIs". Get doc ready for jQuery
var stripe_pk_API = Stripe("pk_test_P7Plzb4azqJyY0AykXyzua5G00pV8ZeRVp");
// var secretKey = Stripe("sk_test_ouWhRvyXxMFfgerkgNAERERC00SEIgzWxm");

$(document).ready(function () {
  var invoiceID = "";

  $.ajax({
    type: "GET",
    url: "https://api.stripe.com/v1/",
    datatype: "JSON",
  }).then(function (response) {
    console.log(response);
    invoiceID = response.invoice.id;
  });
  $("#receipt_id").append(
    `<p>Confirmation #: ${invoiceID} . Please keep for your records.</p>`
  );
});
