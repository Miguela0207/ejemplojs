function nuevoParrafo() {
        var contenido = document.getElementById('contenido');
        var texto = document.getElementById("texto").value;
        contenido.innerHTML = contenido.innerHTML + '<p>' + texto + '</p>';
    }
    