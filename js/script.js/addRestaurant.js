document.getElementById("restaurantForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let address = document.getElementById("address").value;
    let imageUrl = document.getElementById("imageUrl").value;

    // con este let lo que quiero es que los restaurantes que agreguemos, conserven el estilo que ya tienen
    let restaurantCard = `
        <div class="col-12 col-md-6 col-lg-3 p-3 m-3 mine">
            <div class="bg-primary rounded shadow overflow-hidden">
                <img src="${imageUrl}" alt="${name}" class="w-100 img-cover">
            </div>
            <div class="p-4">
                <h3 class="fs-3 fw-bold m-2">${name}</h3>
                <p class="m-2">${description}</p>
                <p class="text m-2"><strong>Dirección: </strong>${address}</p>
            </div>
        </div>
    `;

    document.getElementById("restaurantList").innerHTML += restaurantCard;

    // Limpiamos el formulario con la siguiente instrucción
    document.getElementById("restaurantForm").reset();
});