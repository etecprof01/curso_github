function validar() {

	var formulario = document.forms["f_form"];
	var nome = formulario.f_nome.value;
	var eMail = formulario.f_mail.value;
	var msg = formulario.f_mensagem.value;

	if (nome == "") {
		alert("Preencha o campo 'Nome'!!");
		formulario.f_nome.focus();
		return false;
	}
	if (eMail == "") {
		alert("Preencha o campo 'E-mail'!!");
		formulario.f_mail.focus();
		return false;
	}
	if (msg == "") {
		alert("Escreva a sua mensagem!");
		formulario.f_mensagem.focus();
		return false;
	}

}