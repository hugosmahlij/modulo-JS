const containerDetails = document.getElementById("container_details");
const allEvents = data.events;
const idLocation = location.search.slice(4);

let filterEvents = allEvents.filter((event) => idLocation == event._id);

filterEvents = filterEvents[0];

cardDetails(filterEvents);

function cardDetails(event) {
    containerDetails.innerHTML = `
    <div class="card mb-3 w-75">
        <div class="row g-0 d-flex ">
            <div class="col-md-4 d-flex align-items-center justify-content-center">
                <img src="${event.image}" class="img-fluid img_details" alt="${event.image}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title fw-bold text-center">${event.name}</h5>
                    <p class="card-text fw-semibold shadow-lg">Description: ${event.description}</p>
                    <p class="card-text fw-semibold shadow-lg">Category: ${event.category}</p>
                    <p class="card-text fw-semibold shadow-lg">Place: ${event.place}</p>
                    <p class="card-text fw-semibold shadow-lg">Date: ${event.date}</p>
                    <p class="card-text fw-semibold shadow-lg">Capacity: ${event.capacity}</p>
                    <p class="card-text fw-semibold shadow-lg">Estimated assistance: ${event.assistance || event.estimate}</p>
                    <p class="card-text fw-semibold shadow-lg">Price: $${event.price}</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    `;
}
