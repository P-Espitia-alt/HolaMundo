 //funcion para guardar el correo
        function Guardar(){
            var corr=document.getElementById("este").value;
            var cont=document.getElementById("Contrasena").value;
            if (corr==""){
                alert ("Este campo en obligatorio");
                document.getElementById("este").focus();
            }else{
                if(cont==""){
                   alert ("Este campo en obligatorio");
                   document.getElementById("Contrasena").focus();
                }
            }
            console.log("Correo: ", corr +"     "+ "Password: ", cont);
        }
