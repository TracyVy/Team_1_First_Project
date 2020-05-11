// Use of "browser payment APIs"
var stripe = Stripe("pk_test_P7Plzb4azqJyY0AykXyzua5G00pV8ZeRVp");
var elements = stripe.elements();
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
