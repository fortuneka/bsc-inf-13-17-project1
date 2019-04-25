const orgName = document.getElementById("orgName");
const orgMail = document.getElementById("orgMail");
const orgAddress = document.getElementById("orgAddress");
const orgDetails = document.getElementById("orgDetails");
const myButton = document.getElementById("myButton");
myButton.onclick = function(){
	name = orgName.value;
	email = orgMail.value;
	address = orgAddress.value;
	details = orgDetails.value;
	if(name && email && address && details !== ""){
		localStorage.setItem('name',name);
		localStorage.setItem('email',email);
		localStorage.setItem('address',address);
		localStorage.setItem('details',details);
		window.alert("Your Company Has Successfully registered to verify see if your organisation name shown on the client page");
		window.open("UserAccount.html")
	}
	
}