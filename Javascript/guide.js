container_element = document.getElementsByClassName("container_element");
    for (i = 1; i < container_element.length; i++) {
      container_element[i].style.display = "none";
    }

function openElement(evt, steg) {
    var i, container_element, button_links;

    container_element = document.getElementsByClassName("container_element");
    for (i = 0; i < container_element.length; i++) {
      container_element[i].style.display = "none";
    }
  
    button_links = document.getElementsByClassName("button_links");
    for (i = 0; i < button_links.length; i++) {
      button_links[i].className = button_links[i].className.replace(" active", "");
    }
  
    document.getElementById(steg).style.display = "block";
    evt.currentTarget.className += " active";
  }