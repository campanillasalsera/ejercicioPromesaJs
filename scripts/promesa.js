//*********FUNCIONES********
//Defino la funcion promesa
async function miPromesa() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            let hayConexion=concexiónServidor();
            //creo el objeto que devolverá la promesa si se resuelve ok
            let textoPromesa = document.getElementById("parrafo");
            textoPromesa.classList.add("exito");
            let _textoOK = textoPromesa.textContent="¡Enhorabuena, tu promesa se ha cumplido!";
            
            
            //Si no hay conexion rechazaremos la promesa
            if (!hayConexion){
                //creo el objeto que se devuelve si la promesa se rechaza
                textoPromesa.classList.remove("exito");
                textoPromesa.classList.add("error");  
                let _textoError=textoPromesa.textContent="Lo siento, algo salió mal y no se ha podido cumplir la promesa"
                reject(_textoError);
            }

            //si hay conexion la promesa se cumplirá
            resolve(_textoOK);

        }, 2000);
        
    })
}

//Función concexiónServidor
function concexiónServidor() {
    let hayConexion=false;
    return hayConexion;
}



window.addEventListener("load",function () {

    //Lanzo la promesa
    miPromesa().then(function (_textoOK) {
        
    }).catch(function (_textoError) {
        
    }).finally(function () {
        console.log("Fin conexión");
    })

})

