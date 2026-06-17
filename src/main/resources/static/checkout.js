function placeOrder(){

    const order = {

        customerName:
            document.getElementById(
                "customerName"
            ).value,

        totalAmount:
            document.getElementById(
                "totalAmount"
            ).value
    };

    fetch(
        "http://localhost:8080/api/orders/place",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(order)
        }
    )
    .then(response => response.json())
    .then(data => {

        alert("Order Placed");

        window.location.href =
            "payment.html";
    })
    .catch(error => console.log(error));
}

/*--------------*/

let total = 0;

fetch("http://localhost:8080/api/cart/get")
.then(response => response.json())
.then(items => {

    let html = "";

    items.forEach(item => {

        total += item.price * item.quantity;

        html += `
        <div>

            <img src="${item.img}"
                 width="100">

            <h3>${item.productName}</h3>

            <p>
                ₹${item.price}
            </p>

            <p>
                Qty : ${item.quantity}
            </p>

        </div>
        <hr>
        `;
    });

    document.getElementById(
        "checkoutItems"
    ).innerHTML = html;

    document.getElementById(
        "totalAmount"
    ).innerHTML =
        "Total Amount : ₹" + total;
});




/*-----------*/

function placeOrder(){

    const order = {

        customerName:
        document.getElementById(
            "customerName"
        ).value,

        totalAmount: total
    };

    fetch(
        "http://localhost:8080/api/orders/place",
        {
            method:"POST",
            headers:{
                "Content-Type":
                "application/json"
            },
            body:JSON.stringify(order)
        }
    )
    .then(response => response.json())
    .then(data => {

        alert(
            "Order Placed Successfully"
        );

        window.location.href =
            "payment.html";
    });
}













