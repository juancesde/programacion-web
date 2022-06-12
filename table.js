//metodo que realiza consumo al api get
let drawTable = () => {
    fetch('http://localhost:3000/api/course', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            renderTable(data)
        })
}

drawTable();

//metodo que renderiza la tabla con los datos
let renderTable = (data) => {
    const table = document.querySelector('.table')
    //creamos el nodo body table
    var bodytable = document.createElement('tbody');
    bodytable.className = "tbody"
    table.appendChild(bodytable);

    for (var i = 1; i < data.length; i++) {

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');

        var text1 = document.createTextNode(data[i].descripcion);
        var text2 = document.createTextNode(data[i].profesor);
        var text3 = document.createTextNode(data[i].horario);

        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        bodytable.appendChild(tr);
    }

}


//metodo que consume el metodo POST del api
let createItem = () => {

    const descripcion = document.querySelector('#txtdescripcion').value
    const profesor = document.querySelector('#txtprofesor').value
    const horario = document.querySelector('#txthorario').value

    let newCourse = {
        "descripcion": descripcion,
        "profesor": profesor,
        "horario": horario

    }

    fetch('http://localhost:3000/api/course', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCourse)
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            //si el consumo fue correcto
            renderResult(true)
        })
        .catch((err) => {
            //si hubo error
            renderResult(false)
        })
}

let renderResult = (result) => {
    const textResult = document.querySelector('#resultado')
    if (result) {
        textResult.textContent = 'Guardado exitosamente'
    } else {
        textResult.textContent = 'Ocurrio un error al guardar'
    }
    //optenemos el modal para ocultarlo
    var myModalEl = document.getElementById('exampleModal');
    var modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();
    //limpiamos el body de la tabla
    const tableBody = document.querySelector('.tbody')
    tableBody.remove();
    //volvemos a llamar al metodo que maqueta la tabla para que nos mueste la info actualizada
    drawTable();
}
