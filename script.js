function nav_more_tools() {
    document.getElementById('nav-more-tools').style.display='block';
}
function nav_exit_tools() {
    document.getElementById('nav-more-tools').style.display='none';
}
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    opacity = 0;
    if (currentScroll <= 100) {
      opacity = 0;
    } else {
      opacity = 1;
    }
    document.querySelector("#call-now").style.opacity = opacity;
  });
