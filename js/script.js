const menuLinks = document.querySelectorAll( '.menu-desktop [href^="#"]');

function getDistanceFromTheTop() {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;

}

function nativeScroll(getDistanceFromTheTop) {
    window.scroll({
        top: getDistanceFromTheTop,
        behavior: "smooth",
    });
}

function scrollToSection(event) {
    event.preventDefault();
    const getDistanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
    nativeScroll(distanceFromTheTop);
    smoothScrollTo(0, distanceFromTheTop)
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {

}
