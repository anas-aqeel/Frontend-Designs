document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Initially show the loader and hide the content
    loader.classList.remove("hidden");
    content.classList.add("hidden");

    // Simulate loading duration
    setTimeout(() => {
        // Hide the loader and show the content
        loader.classList.add("hidden");
        content.classList.remove("hidden");

        // Remove the loader CSS
        const loaderStyle = document.getElementById("loader-style");
        if (loaderStyle) {
            loaderStyle.remove();
        }

        
    }, 3000); // 3000 milliseconds = 3 seconds
});
