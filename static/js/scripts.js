const containerCard = document.querySelector(".product__list")
const containerForm = document.querySelector(".button__update")

let products = [];

const form = document.getElementById("form");

function datas() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;
    let category = document.getElementById("category").value;

    products.push({
        name: `${name}`,
        price: `${price}`,
        quantity: `${quantity}`,
        category: `${category}`,
    });

    console.log(products);
    seeDatas(containerCard, products);
}

const seeDatas = (container, listProducts) => {
    container.innerHTML = "";

    listProducts.forEach((product, index) => {
        console.log(index);
        container.innerHTML += `
        <tbody>
        <tr id="${index}">
            <td>${index}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td>${product.category}</td>
            <td><button type="button" onclick="eliminar(${index})">Eliminar</button> &nbsp; <button type="button" onclick="update(${index})" id="update">Actualizar</button></td>
        <tr>
        </tbody>
        `;        
    });
};

function eliminar(indice) {
    const deleteProduct = document.getElementById(indice);
    deleteProduct.remove();
    products.splice(indice, 1);
    console.log(products);

    seeDatas(containerCard, products);
}
function update(indice) {

    document.getElementById(
        "name"
    ).value = `${products[indice].name}`;
    document.getElementById(
        "price"
    ).value = `${products[indice].price}`;
    document.getElementById(
        "quantity"
    ).value = `${products[indice].quantity}`;
    document.getElementById(
        "category"
    ).value = `${products[indice].category}`;
    seeDatas(containerCard, products);

    containerForm.innerHTML = "";
    const but = document.createElement("section");

    but.innerHTML = `<button type="button" id="data_update" onclick="dataupdate(${indice})">Actualizar Datos</button>`
        containerForm.appendChild(but);
}

function dataupdate(indice) {
    name = document.getElementById("name").value;
    price = document.getElementById("price").value;
    quantity = document.getElementById("quantity").value;
    category = document.getElementById("category").value;

    products[indice] = {
        name: `${name}`,
        price: `${price}`,
        quantity: `${quantity}`,
        category: `${category}`,
    };
    seeDatas(containerCard, products)
}


