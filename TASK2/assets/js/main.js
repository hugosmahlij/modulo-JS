const container = document.getElementById("main_container");
const date = data.currentDate
const title = document.getElementById("title")
const card = data.events.map(Card => Card)

const homeCard = card.filter(()=>title.textContent.includes("Home")).forEach(getCard)
const upcomingCard = card.filter(()=>title.textContent.includes("Upcoming")).filter((card) => date > card.date).forEach(getCard)
const pastCard = card.filter(()=>title.textContent.includes("Past")).filter((card) => date < card.date).forEach(getCard)

function getCard(event){
    container.innerHTML += `
    <div class="card mt-5 height" style="width: 18rem">
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
              <a href="../pages/details.html" class="d-flex btn btn-danger">Details</a>
            </div>
          </div>
        </div>
    `;
}