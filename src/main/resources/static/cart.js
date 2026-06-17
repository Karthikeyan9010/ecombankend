loadCart();

function loadCart(){

    fetch("http://localhost:8080/api/cart/get")
    .then(response => response.json())
    .then(items => {

        let html = "";

        items.forEach(item => {

            html += `
            <div class="cart-item">
			
				<img src="${item.img}" width="150" height="150" alt="${item.productName}">

                <h3>${item.productName}</h3>

                <p class="price">
                    ₹${item.price}
                </p>

                <p>
                    Quantity: ${item.quantity}
                </p>

                <button onclick="removeItem(${item.id})">
                    Remove
                </button>

            </div>
            `;
        });

        document.getElementById("cartItems").innerHTML = html;
    })
    .catch(error => console.log(error));
}

function removeItem(id){

    fetch(
        `http://localhost:8080/api/cart/delete/${id}`,
        {
            method:"DELETE"
        }
    )
    .then(response => response.text())
    .then(message => {

        alert(message);

        loadCart();
    })
    .catch(error => console.log(error));
}