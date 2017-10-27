function nome(){
	regex = /^([A-Z][a-z]+)?$/;
	if(regex.test(document.getElementById("Nome").value)){
		sobrenome();
	}
	else{
		alert("O nome deve conter somente letras e a primeira deve ser maiúscula.");
	}
}

function sobrenome(){
	regex = /^([A-Z][a-z]+)?$/;
	if(regex.test(document.getElementById("Sobrenome").value)){
		email();
	}
	else{
		alert("O sobrenome deve conter somente letras e a primeira deve ser maiúscula.");
	}
}

function email(){
	email1 = document.getElementById("Email1").value;
	email2 = document.getElementById("Email2").value;
	cnt = email1.localeCompare(email2);
	if(cnt == 0){
		senha();
	}
	else{
		alert("A confirmação de email está errada.");
	}
}

function senha(){
	regex = /^([A-Za-z1-9]{4,8})?$/;
	if(regex.test(document.getElementById("Senha").value)){
	}
	else{
		alert("A senha deve conter no mínimo 4 e no máximo 8 caracteres, sendo eles letras ou números.");
	}
	
	if(regex.test(document.getElementById("Senha1").value)){
	}
	else{
		alert("A senha deve conter no mínimo 4 e no máximo 8 caracteres, sendo eles letras ou números.");
	}
	
	var sen1 = document.getElemntById("Senha").value;
	var sen2 = document.getElementById("Senha1").value
	
	if(sen1 == sen2) {
		sen1;
		
	}
	
	else {
		alert("Senhas não correspondem");
	}
}

