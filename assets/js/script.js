/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon. Used code from W3Schools (https://www.w3schools.com/howto/howto_js_mobile_navbar.asp) */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 