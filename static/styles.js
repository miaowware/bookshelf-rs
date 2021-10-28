scrollTopButton = document.getElementById("scroll-top")

window.onscroll = scrollFunc;
scrollTopButton.onclick = scrollTop;

function scrollFunc() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopButton.style.display = "flex";
    } else {
        scrollTopButton.style.display = "none";
    }
}

function scrollTop() {
    window.scroll({top: 0, left: 0, behavior: "smooth"})
}
