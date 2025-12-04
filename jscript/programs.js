// 1. Grab all the program buttons and images
const programButtons = document.querySelectorAll(".program__levels");
const programImages = document.querySelectorAll(".program_image");

programButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetTab = button.dataset.tab; // "beginner_tennis"

        // 1) Remove previous active classes
        const currentActiveButton = document.querySelector(".program__levels.selected__button");
        const currentActiveImage = document.querySelector(".program_image.selected__tab");

        if (currentActiveButton) {
            currentActiveButton.classList.remove("selected__button");
        }

        if (currentActiveImage) {
            currentActiveImage.classList.remove("selected__tab");
        }

        // 2) Add active classes to clicked button and corresponding image
        button.classList.add("selected__button");

        // 3) Find and activate the matching image
        const newActiveImage = document.querySelector(`.program_image[data-tab="${targetTab}"]`);

        if (newActiveImage) {
            newActiveImage.classList.add("selected__tab");
        }
    });
});
