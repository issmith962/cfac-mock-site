document.getElementById("submitBox").addEventListener("click", function(event) {
	let allAreFilled = true;
	document.getElementById("auditionForm").querySelectorAll("[required]").forEach(function(i) {
		if (!allAreFilled) return;
		if (!i.value) allAreFilled = false;
		if (i.type === "radio") {
			let radioValueCheck = false;
			document.getElementById("auditionForm").querySelectorAll(`[name=${i.name}]`).forEach(function(r) {
				if (r.checked) radioValueCheck = true;
			})
			allAreFilled = radioValueCheck;
		}
	})
	if (!allAreFilled) {
		alert("Please fill all the fields");
	} else {
		event.preventDefault(); 
		document.getElementById("content").style.display = "none";
		document.getElementById("submitted").style.display = "flex";
	}
}); 
