window.onload = function () {
    document.querySelector(".btn").addEventListener('click', function () {
        document.querySelector("body").classList.remove("not-loaded");
        this.style.display = "none";
        document.querySelector("h1").style.display = "block";
    })
}