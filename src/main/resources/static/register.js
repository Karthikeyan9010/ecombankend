function registerUser(){
	
	const user = {
		
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
	password: document.getElementById("password").value
	
	};
	
	
	fetch("http://localhost:8080/api/auth/register" , {
		method : "POST",
		headers :{
			"Content-Type": "application/json"
		},
		body: JSON.stringify(user)
	})
	.then(response => response.text())
	.then(data => {
		
		document.getElementById("message").innerText = data;
		
		
		if(data === "Registration Successful"){
			alert("Registration Successful");
			
			window.location.href = "login.html";
		}
		
		
		
	})
	.catch(error => {
		console.error(error);
	});
}

