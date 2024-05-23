// URL base para las solicitudes al servidor
const url_base = "http://localhost:3000";

// Elemento principal del DOM donde se mostrarán los productos
const mainDiv = document.getElementById("main_list");

// Función asincrónica para obtener los productos del servidor
const getProducts = async () => {
  try {
    // Hacer una solicitud GET para obtener los productos
    const response = await fetch(`${url_base}/products`);
    // Extraer el cuerpo JSON de la respuesta
    const { data } = await response.json();

    // Generar el HTML para mostrar los productos
    let content = "";
    for (const product of data) {
      content += `
        <div class="box">
            <p><span>Nombre: </span> ${product.name} </p>
            <p><span>Categoria: </span> ${product.category} </p>
            <p><span>Descripcion: </span> ${product.description} </p>
            <p><span>Precio: </span> ${product.price} </p>
            <button onclick="borrarProducto(${product.id})">Eliminar del inventario</button>
        </div>`;
    } 
    // Insertar el HTML generado en el elemento principal del DOM
    mainDiv.innerHTML = content;
  } catch (error) {
    console.log(error);
  }
};

// Llamar a la función getProducts para cargar los productos al cargar la página
getProducts();

// Función para borrar un producto del inventario
function borrarProducto(id){
  console.log(id);
  // Hacer una solicitud DELETE al servidor para borrar el producto
  fetch(`${url_base}/products/` + id, {
    method: 'DELETE'
  }).then(() => {
    console.log("Producto borrado exitosamente");
    // Recargar la lista de productos después de borrar
    getProducts();
  });
}

// Función para crear un nuevo producto
function crearProducto(){
  // Obtener los valores de los inputs para el nuevo producto
  let nameInput = document.getElementById("name-input").value;
  let categoriaInput = document.getElementById("categoria-input").value;
  let descripcionInput = document.getElementById("descripcion-input").value;
  let precioInput = document.getElementById("precio-input").value;
  
  // Crear un objeto con los datos del nuevo producto
  let data = {
    "name": nameInput,
    "category": categoriaInput,
    "description": descripcionInput,
    "price": precioInput
  };

  // Hacer una solicitud POST al servidor para crear el nuevo producto
  fetch(`${url_base}/products/`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }).then(() => {
    console.log("Producto creado exitosamente");
    // Recargar la lista de productos después de crear uno nuevo
    getProducts();
  }); 
}
