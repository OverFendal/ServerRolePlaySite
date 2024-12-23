function toggleDescription(id) {
  var desc = document.getElementById(id);
  if (desc.style.display === "none" || desc.style.display === "") {
      desc.style.display = "block";
  } else {
      desc.style.display = "none";
  }
}