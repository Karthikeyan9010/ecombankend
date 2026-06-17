fetch(
    "http://localhost:8080/api/orders/get"
)
.then(response => response.json())
.then(data => {

    let html = "";

    data.forEach(order => {

        html += `
        <div style="
            border:1px solid gray;
            padding:10px;
            margin:10px;
        ">

            <h3>
                ${order.customerName}
            </h3>

            <p>
                Amount:
                ₹${order.totalAmount}
            </p>

            <p>
                Status:
                ${order.status}
            </p>

        </div>
        `;
    });

    document.getElementById(
        "orders"
    ).innerHTML = html;
});