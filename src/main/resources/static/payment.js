function payNow(){

    const method =
        document.getElementById(
            "paymentMethod"
        ).value;

    alert(
        "Payment Successful via "
        + method
    );

    window.location.href =
        "orders.html";
}