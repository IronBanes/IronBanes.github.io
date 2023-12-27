document.addEventListener("DOMContentLoaded", function () {
    // Get the path after the last '/'
    var path = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);

    // Decode URI components to handle special characters
    var decodedPath = decodeURIComponent(path);

    // Display the dynamic content on the page
    document.getElementById("dynamic-content").innerText = "Dynamic Content: " + decodedPath;
});
