function logout(){
	
	localStorage.removeItem("userEmail");
	
	window.location.href = "login.html";
}




/*----------------------------------------------------------*/
const userEmail =  localStorage.getItem("userEmail");

if(!userEmail){
	alert("Please Login First");
	
	window.location.href = "login.html";
}

/*--------------------------------------------------------*/

fetch("http://localhost:8080/api/products/get")
.then(response => response.json())
.then(products => {

    let html = "";

    products.forEach(product => {

        html += `
        <div class="card">

            <img src="${product.img}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <p class="price">₹${product.price}</p>

            <p class="stock">
                Stock: ${product.stock}
            </p>

            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>

        </div>
        `;
    });

    document.getElementById("products").innerHTML = html;
})
.catch(error => console.log(error));

/*------------------------------------------------------------------------------------*/

	function addToCart(id){

	    fetch("http://localhost:8080/api/products/get")
	    .then(response => response.json())
	    .then(products => {

	        const product =
	            products.find(p => p.id === id);

	        const cartItem = {

	            productName: product.name,
				img: product.img,
	            price: product.price,
	            quantity: 1
	        };
			
			console.log(product.img);
			
			console.log(cartItem);

	        return fetch(
	            "http://localhost:8080/api/cart/add",
	            {
	                method: "POST",
	                headers: {
	                    "Content-Type":"application/json"
	                },
	                body: JSON.stringify(cartItem)
	            }
	        );
	    })
	    .then(response => response.json())
	    .then(data => {
	        alert("Added to Cart");
	    })
	    .catch(error => console.log(error));
	}
