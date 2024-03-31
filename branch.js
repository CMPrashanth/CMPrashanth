document.addEventListener("DOMContentLoaded", function() {
    const amenitiesListItems = document.querySelectorAll(".amenities-list li");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.animation = "fadeInLeft 1s forwards";
            }
        });
    }, {
        threshold: 0.5 // Adjust the threshold as needed
    });

    amenitiesListItems.forEach(item => {
        observer.observe(item);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Select the elements to animate
    const table = document.querySelector(".table");
    const pricingCards = document.querySelectorAll(".card");

    // Options for the IntersectionObserver
    const options = {
        threshold: 0.5 // Adjust the threshold as needed
    };

    // Function to handle intersection
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                // Apply animation to the table
                if (entry.target === table) {
                    entry.target.style.opacity = 1;
                    entry.target.style.animation = "fadeInUp 1s forwards";
                }
                // Apply animation to each pricing card
                else if (entry.target.classList.contains("card")) {
                    entry.target.style.opacity = 1;
                    entry.target.style.animation = "fadeInUp 1s forwards";
                }
            }
        });
    };

    // Create IntersectionObserver instances
    const tableObserver = new IntersectionObserver(handleIntersection, options);
    const pricingObserver = new IntersectionObserver(handleIntersection, options);

    // Observe the table and pricing sections
    tableObserver.observe(table);
    pricingCards.forEach(card => {
        pricingObserver.observe(card);
    });
});
