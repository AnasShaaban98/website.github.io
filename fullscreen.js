const carouselImages = document.querySelectorAll(
    ".project-carousel .carousel-item img:not(.carousel-logo-img)"
);

carouselImages.forEach((img) => {
    img.addEventListener("click", (event) => {
        if (!document.fullscreenElement) {
            img.requestFullscreen().catch(() => {
                // Fullscreen request denied or unsupported
            });
            return;
        }
        if (document.fullscreenElement !== img) {
            return;
        }
        // Toggle zoom while fullscreen, zooming toward the clicked point
        const bounds = img.getBoundingClientRect();
        const originX = ((event.clientX - bounds.left) / bounds.width) * 100;
        const originY = ((event.clientY - bounds.top) / bounds.height) * 100;
        img.style.transformOrigin = originX + "% " + originY + "%";
        img.classList.toggle("zoomed");
    });
});

document.addEventListener("fullscreenchange", () => {
    const carousel = document.getElementById("sonimarto-carousel");
    const instance =
        carousel && window.bootstrap
            ? bootstrap.Carousel.getInstance(carousel)
            : null;
    if (!instance) {
        return;
    }
    if (document.fullscreenElement) {
        instance.pause();
    } else {
        carouselImages.forEach((img) => {
            img.classList.remove("zoomed");
            img.style.transformOrigin = "";
        });
        instance.cycle();
    }
});
