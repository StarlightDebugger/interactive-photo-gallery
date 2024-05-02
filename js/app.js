baguetteBox.run('.gallery');

const searchBox = document.getElementById("search");

searchBox.addEventListener("keyup", (e) => {
    const searchText = searchBox.value.toLowerCase();
    let pictureLinks = document.querySelectorAll('.gallery a');
  
    for(let link of pictureLinks) {
      link.style.display =
        link.getAttribute("data-caption").toLowerCase().includes(searchText) ?
        "" :
        "none";
    } 
});