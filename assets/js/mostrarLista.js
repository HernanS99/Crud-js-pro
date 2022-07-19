function getProductList() {
    let storedList = localStorage.getItem('locallistProducts')
    listProducts = !storedList ? [] : JSON.parse(storedList);
    return listProducts;
}
function impProducts() {
    let productLista = document.getElementById('productList');
    productLista.innerHTML = "";
    let list = getProductList()
    console.log(list)
    list.forEach((element) => {
        productLista.innerHTML +=`
        <div class="card col-3" style="width: 18rem;">
            <img src="http://d3ugyf2ht6aenh.cloudfront.net/stores/969/083/products/guitarra-electro-criolla-fonseca-40kec-41kec-funda_iz1141063776xvzxxpz1xfz74514398-617309937-1-jpgxsz74514398xim1-abb1dc4f6db4a4b4b515990563207217-640-0.jpg"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.nombre}</h5>
                <p class="card-text">${element.desc}</p>
                <p>${element.precio}</p>
            </div>
        </div>
        ` 
    })
}
impProducts()