


document.getElementById('btn_send').addEventListener('click',()=>{
    window.location.href = '/dishs'; // Redirige a la página de inicio (index)
    alert('Producto Ingresado')
    console.log('Contenido del Map después de agregar una nueva tarea:');
    for (const [key, value] of dishes) {
        console.log(`ID: ${key}, Datos:`, value);
    }
    // // todo obtener los valores de los campos
    // const xhr = new XMLHttpRequest()
    // xhr.open("POST","/",true)
    // xhr.onreadystatechange=()=>{
    //     if (xhr.readyState==4 && xhr.status==200){
    //         //si eso es verdadero la peticion esta lista 
    //         //se arma el envio

    //     }

    //     xhr.setRequestHeader('content-type'='application/x-url-encodeform')
    //     const data = {id=${id}..}
    //     xhr.send(data)
    // }

});