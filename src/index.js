const ramenUrl = "http://localhost:3000/ramens";
const ramenMenuContainer = document.querySelector('#ramen-menu');
const ramenComment = document.querySelector('#comment-display');
const ramenRating = document.querySelector('#rating-display');
const ramenForm = document.querySelector('#new-ramen');

fetchRamen();
ramenForm.addEventListener('submit', addNewRamen);

function fetchRamen() {
    fetch(ramenUrl)
        .then(response => response.json())
        .then(renderRamenImages);
        .catch(console.error);
}

function renderRamenImages(ramenMenu) {
    for(const ramen of ramenMenu) {
        renderRamenImage(ramen);
    }
}

function renderRamenImage(ramen) {
    const ramenElement = document.createElement('img');
    ramenElement.src = ramen.image;
    ramenMenuContainer.append(ramenElement);

    // add event handler for ramen image
    ramenElement.addEventListener('click', function() {
        // add details about clicked ramen
        ramenComment.textContent = ramen.comment;
        ramenRating.textContent = ramen.rating;
    })
}

function addNewRamen(event) {
    event.preventDefault();

    const comment = ramenForm.querySelector('#new-comment').value;
    const img = ramenForm.querySelector('#new-image').value;
    const name = ramenForm.querySelector('#new-name').value;
    const rating = ramenForm.querySelector('#new-rating').value;
    const restaurant = ramenForm.querySelector('#new-restaurant').value;

    const newRamenItem = {
        comment: comment,
        id: Math.random()*100,
        image: img,
        name: name,
        rating: rating,
        restaurant: restaurant
    };
    renderRamenImage(newRamenItem);
}