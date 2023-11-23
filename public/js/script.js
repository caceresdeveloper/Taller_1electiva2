document.getElementById('btn_send').addEventListener('click',()=>{
    window.location.href = '/dishs'; // Redirige a la página de inicio (index)
    alert('Producto Ingresado')
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