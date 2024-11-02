document.addEventListener("DOMContentLoaded", () => {
    // Scroll animation for hero section
    const heroSection = document.getElementById("home");
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Add-to-cart button animation
    const addToCartButtons = document.querySelectorAll("button");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.add("animate-pulse");
            setTimeout(() => button.classList.remove("animate-pulse"), 300);
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const clearBtn = document.getElementById("clear-btn");

    // Show clear button when input has text
    searchInput.addEventListener("input", () => {
        if (searchInput.value.length > 0) {
            clearBtn.classList.remove("hidden");
        } else {
            clearBtn.classList.add("hidden");
        }
    });

    // Clear search input when clear button is clicked
    clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        clearBtn.classList.add("hidden");
        searchInput.focus();
    });
});




