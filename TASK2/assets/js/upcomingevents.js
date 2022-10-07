const container = document.getElementById("main_container");

for (const event of data.events) {
  if (data.currentDate < event.date) {
    getCard(event);
  }
}

function getCard(event) {
  container.innerHTML += `
    <div class="card mt-5 " style="width: 18rem">
          <img src="${event.image}" class="card-img-top" alt="${event.name}" />
          <div
            class="card-body d-flex flex-column align-items-center justify-content-evenly shadow"
          >
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">
              ${event.description}
            </p>
            <div class="w-100 d-flex align-items-center justify-content-evenly">
              <p>Price $${event.price}</p>
              <a href="#" class="d-flex btn btn-danger">Details</a>
            </div>
          </div>
        </div>
    `;
}
