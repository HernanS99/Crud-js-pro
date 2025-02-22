let listProducts = [];

document.querySelector('#btnSend').addEventListener('click', saveProduct);


function saveProduct() {
    const id = document.querySelector('#id').value,
        name = document.querySelector('#name').value,
        price = document.querySelector('#price').value,
        desc = document.querySelector('#desc').value;

    if (id === "" || name === "" || price === "" || desc === "") {
        alert("No olvides rellenar todos los campos");
    }
    else {
        
        let list = getProductList();
        /* let resul = list.filter(function (list) {
            return list.id === id
        })  */
        let existe = list.find((elemento)=>elemento.id===id)
        if(existe===undefined){
            addProducts(id, name, price, desc);
            document.querySelector('#nick').value = "";
            document.querySelector('#age').value = "";
            document.querySelector('#mail').value = "";
            alert("Producto ingresado");
        }else{
            alert("Producto ya existe");
        }
        
        
    }
}



function addProducts(id, nombre, precio, desc) {
    const Products = {
        id,
        nombre,
        precio,
        desc
    };
    listProducts.push(Products);
    localStorageProducts(listProducts);
}

function getProductList() {
    let storedList = localStorage.getItem('locallistProducts')
    listProducts = !storedList ? [] : JSON.parse(storedList);
    return listProducts;
}


function localStorageProducts(plist) {
    localStorage.setItem('locallistProducts', JSON.stringify(plist));
}

function eliminarProducto(id){
    let list = getProductList();
    productos = list.filter((elemento)=>elemento.id!==id)
    localStorageProducts(productos);
}