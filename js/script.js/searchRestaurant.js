const restaurants = [
    {
        name: "Pizza pixie", description: "Restaurante delicioso de pizzas napolitanas.", address: "Calle siempre alegre #34-89",
        image: "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg"
    },

    {
        name: "Amborger", description: "Encuentra las mejores hamburguesas artesanales en Amborger. Y lo mejor, a precios justos.", address: "Calle 85#34-89sur",
        image: "https://cdn.pixabay.com/photo/2023/09/23/15/56/ai-generated-8271284_960_720.jpg"
    },

    {
        name: "PastAldente", description: "Una de las mejores comidas italianas de la ciudad. Ven y visítanos.", address: "Cr 85#34-89",
        image: "https://cdn.pixabay.com/photo/2014/04/22/02/55/pasta-329521_960_720.jpg"
    },

    {
        name: "Sushi raw", description: "Vive una nueva experiencia probando nuestros mejores sushis.", address: "Cr 67#4-49",
        image: "https://cdn.pixabay.com/photo/2021/01/01/15/32/sushi-balls-5878894_1280.jpg"
    }
]

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');


searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = '';

    restaurants
        .filter(restaurant => restaurant.name.toLowerCase().includes(query))
        .forEach(restaurant => {
            resultsContainer.innerHTML += `  <div class="col-12 col-md-6 col-lg-3 p-3 m-3 mine">
            <div class="rounded shadow overflow-hidden">
                <img src = "${restaurant.image}"
            alt = "${restaurant.name}" class="w-100 img-cover" >

        </div>
                <div class="p-4">
                    <h3 class="fs-3 fw-bold m-2">${restaurant.name}</h3>
                    <p class="m-2">${restaurant.description}</p>
                    <p class="text m-2"><strong>Dirección: </strong>${restaurant.address}</p>
                </div>
        </div>
        `;
            
        });
}); 