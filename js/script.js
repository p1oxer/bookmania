if (document.querySelector(".icon-menu")) {
    document.addEventListener("click", function (e) {
        if (e.target.closest(".icon-menu")) {
            document.documentElement.classList.toggle("menu-open");
            document.body.classList.toggle("body-lock");
        }
    });
}
if (document.querySelector(".filter-button")) {
    document.addEventListener("click", function (e) {
        if (e.target.closest(".filter-button")) {
            if (document.querySelector(".filter-books")) {
                document.querySelector(".filter-books").classList.add("open");
            }
            if (document.querySelector(".categories-library")) {
                document.querySelector(".categories-library").classList.add("open");
            }
            document.body.classList.add("body-lock");
        }
        if (e.target.closest(".close-button")) {
            if (document.querySelector(".filter-books")) {
                document.querySelector(".filter-books").classList.remove("open");
            }
            if (document.querySelector(".categories-library")) {
                document.querySelector(".categories-library").classList.remove("open");
            }
            document.body.classList.remove("body-lock");
        }
    });
}
const swiper = new Swiper(".collection-books__slider", {
    freeMode: true,
    slidesPerView: "auto",
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
});
const swiperCategories = new Swiper(".swiper-categories", {
    freeMode: true,
    slidesPerView: "auto",
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.classList.remove("_active");
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.classList.add("_active");
        }
    });
});

const textsHideable = document.querySelectorAll(".textHideable");

textsHideable.forEach((text) => {
    const textToHide = text.querySelector(".textToHide");
    const toggleButton = text.querySelector("#toggleButton");

    if (!toggleButton) return;
    toggleButton.addEventListener("click", () => {
        textToHide.classList.toggle("opened");

        textToHide.classList.contains("opened")
            ? (toggleButton.textContent = "Скрыть")
            : (toggleButton.textContent = "Далее");
    });
});

document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        let href = this.getAttribute("href").substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector(".header").clientHeight + 30;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
        });
    });
});

