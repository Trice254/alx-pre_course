document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.className;
});
if (thumbnailElement.className == "") {
    thumbnailElement.className = "small";
} else if (thumbnailElement.className = "small") {
    thumbnailElement.className = "";
};
thumbnailElement.addEventListener("click", function() {
    alert("I saw you click!");
});