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

  // var mydata = JSON.parse(data);
  
  // alert(mydata[0].name);

// fetch("data.json")
//   .then(response => response.json())
//   .then(json => demo.innerHTML = json[0].name);
  
// Replace ./data.json with your JSON feed
fetch('data.json').then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  var name = document.getElementById('demo');
  console.log(data[0].name);
  name.innerHTML = data[0].name;
  console.log(data);
}).catch(err => {
  // Do something for an error here
  console.log('Error')
});