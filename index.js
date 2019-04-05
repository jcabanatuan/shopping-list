$(function() {
  $("button").click(function(event) {
    const listItem = document.getElementById('inputItem').value;
    $("section").append(
      `<div class="list-item"><p>${listItem}</p></div>` +
      `<div class ="list-options"><button type="button" id ="check">check</button><button type="button" id ="delete">delete</button></div>`
      //append text from the input in a paragraph. Add it to section
    );
  });
});
