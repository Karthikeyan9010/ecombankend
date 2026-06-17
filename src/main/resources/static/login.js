function loginUser(){
	
	
	
	const loginData = {
		
		email: document.getElementById("email").value,
		password: document.getElementById("password").value
	};
	
	fetch("http://localhost:8080/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(loginData)
	})
	.then(response => response.text())
	.then(data => {
		
		
		
		document.getElementById("message").innerText = data;
		
		if(data === "Login Successful"){
			
			localStorage.setItem("userEmail", loginData.email);
			
			alert("welcome!");
			
			window.location.href = "products.html";
		}
	})
	.catch(error => {
		console.error(error);
	});
}

/*console.log("login.js loaded");

window.loginUser = function() {

    alert("Login works");

    const loginData = {

        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.text())
    .then(data => {

        document.getElementById("message").innerText = data;

        if(data.trim() === "Login Successful") {

            localStorage.setItem(
                "userEmail",
                loginData.email
            );

            alert("Welcome!");

            window.location.href = "products.html";
        }
    })
    .catch(error => {
        console.error(error);
    });
};*/