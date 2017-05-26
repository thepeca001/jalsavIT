 $(document).ready(function(){
      $('.slider').slider();
    });

 function enviar(){
	var formulario = document.getElementById("action");	
	var dato = formulario[0];
 
	if (dato.value=="enviar"){
		alert("Datos enviados correctamente");
		formulario.submit();
		return true;
	} else {
		alert("No se envio el formulario");
		return false;
	}
}