console.log("hello world")

container_element = document.getElementsByClassName("container_element");
    for (i = 1; i < container_element.length; i++) {
      container_element[i].style.display = "none";
    }

function openElement(evt, steg) {
    // Declare all variables
    var i, container_element, button_links;
  
    // Get all elements with class="container_element" and hide them
    container_element = document.getElementsByClassName("container_element");
    for (i = 0; i < container_element.length; i++) {
      container_element[i].style.display = "none";
    }
  
    // Get all elements with class="button_links" and remove the class "active"
    button_links = document.getElementsByClassName("button_links");
    for (i = 0; i < button_links.length; i++) {
      button_links[i].className = button_links[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(steg).style.display = "block";
    evt.currentTarget.className += " active";
  }