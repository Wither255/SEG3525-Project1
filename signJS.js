document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("signup-link")?.addEventListener("click", function () {
        window.location.href = "signUp.html";
    });
		
	document.getElementById("signin-link")?.addEventListener("click", function () {
        window.location.href = "signIn.html"; 
    });
	
	document.getElementById("close-btn")?.addEventListener("click", function () {
        window.location.href = "main.html"; 
	});
	
	document.getElementById("homeClick")?.addEventListener("click", function () {
        window.location.href = "main.html"; 
    });
	
	document.getElementById("customLures")?.addEventListener("click", function() {
		window.location.href = "CustomLures.html";
	});
	
	document.getElementById("contact-link")?.addEventListener("click", function() {
		window.location.href = "Contact.html";
	});
	
	document.getElementById("locate-link")?.addEventListener("click", function() {
		window.location.href = "Locate.html";
	});
	
	document.getElementById("cart-link")?.addEventListener("click", function() {
		window.location.href = "Cart.html";
	});
	
	document.getElementById("catalog1-link")?.addEventListener("click", function() {
		window.location.href = "catalog.html";
	});
	
	document.getElementById("catalog2-link")?.addEventListener("click", function() {
		window.location.href = "catalog.html";
	});
	
	document.getElementById("catalog3-link")?.addEventListener("click", function() {
		window.location.href = "catalog.html";
	});
	
	document.getElementById("catalog4-link")?.addEventListener("click", function() {
		window.location.href = "catalog.html";
	});
	
	document.getElementById("catalog5-link")?.addEventListener("click", function() {
		window.location.href = "catalog.html";
	});
	
	document.getElementById("catalog6-link")?.addEventListener("click", function() {
		window.location.href = "catalog.html";
	});
	
	document.getElementById("catalog7-link")?.addEventListener("click", function() {
		window.location.href = "catalog.html";
	});
	
	document.getElementById("catalog8-link")?.addEventListener("click", function() {
		window.location.href = "catalog.html";
	});
	
	document.getElementById("catalog9-link")?.addEventListener("click", function() {
		window.location.href = "catalog.html";
	});
	
	document.getElementById("dummyBack")?.addEventListener("click", function () {
        window.location.href = "main.html"; 
    });
	
});

document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            document.getElementById('dropdownMenuButton').textContent = this.textContent;
        });
    });
	
document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            document.getElementById('dropdownMenuButton').textContent = this.textContent;
        });
    });

 document.getElementById('submitButton').addEventListener('click', function() {

        document.getElementById('successAlert').style.display = "block";

        document.getElementById('dropdownMenuButton').textContent = "Options";

        document.getElementById('nameInput').value = "";
		document.getElementById('emailInput').value = "";

        document.getElementById('slider1').value = document.getElementById('slider1').defaultValue;
        document.getElementById('slider2').value = document.getElementById('slider2').defaultValue;

        document.getElementById('optionCheckbox1').checked = false;
        document.getElementById('optionCheckbox2').checked = false;
 });