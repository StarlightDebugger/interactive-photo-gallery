baguetteBox.run('.gallery');

const searchBox = document.getElementById("search");

searchBox.addEventListener("keyup", (e) => {
    // get the value in the search box and lower the case
    const searchText = searchBox.value.toLowerCase();
    // get all links in the gallery
    let pictureLinks = document.querySelectorAll('.gallery a');
  
    // go through all links and if the data caption does not contain the text in the search box, hide
    for(let link of pictureLinks) {
      link.style.display =
        link.getAttribute("data-caption").toLowerCase().includes(searchText) ?
        "" :
        "none";
    } 
});