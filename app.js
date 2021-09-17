
var options = {
  key: "rzp_test_2tK3fVumpgxIps", // Enter the Key ID generated from the Dashboard
  amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  currency: "INR",
  name: "Kritika Bansal",
  description: "Please lend us Helping hand",
  handler: function (response) {
    if (
      typeof response.razorpay_payment_id == "undefined" ||
      response.razorpay_payment_id < 1
    ) {
      swal({
        title: "Please try again later!",
        icon: "error",
        button: "Close",
      });
    } else {
      swal({
        title: "Thank You!",
        icon: "success",
        button: "Close",
      });
    }
  },
  theme: {
    color: "#3399cc",
  },
};
var rzp1 = new Razorpay(options);
document.getElementById("rzp-button1").onclick = function (
  e
) {
  rzp1.open();
  e.preventDefault();
};
