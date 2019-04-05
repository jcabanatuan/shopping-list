$(function() {
  $("button").click(function(event) {
    const listItem = document.getElementById('inputItem').value;
    $("section").append(
      `<div class="list-item"><p>${listItem}</p></div>`
      //append text from the input in a paragraph. Add it to section
    );
  });
});
