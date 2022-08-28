export const Logout = () => {
  document.getElementById("LmyDropdown").classList.toggle("show");
};

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".Ldropbtn")) {
    var dropdowns = document.getElementsByClassName("Ldropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
