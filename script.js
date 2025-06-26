const stars = document.querySelectorAll(".star");
let rating = 0;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    rating = parseInt(star.getAttribute("data-value"));
    updateStars(); // update based on clicked rating
  });

  star.addEventListener("mouseover", () => {
    const hoverValue = parseInt(star.getAttribute("data-value"));
    updateStars(hoverValue); // temporarily show stars on hover
  });

  star.addEventListener("mouseout", () => {
    updateStars(); // reset to clicked rating on mouse out
  });
});

function updateStars(tempRating = rating) {
  stars.forEach((star) => {
    const starValue = parseInt(star.getAttribute("data-value"));
    star.classList.toggle("selected", starValue <= tempRating);
  });
}
