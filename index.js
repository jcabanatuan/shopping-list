$(function() {
  $("button").click(function(event) {
    const listItem = document.getElementById('shopping-list-entry').value;
    $(".shopping-list").append(
      `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
        </li>`
      //append text from the input in a paragraph. Add it to section
    );
  });
});



function handleItemChecked() {
  $("ul").on("click",'.shopping-item-toggle',function(event) {
    $(this).closest("li").find('.shopping-item').toggleClass("shopping-item shopping-item__checked");
  });
}
$(handleItemChecked);

function handleDeleteItem() {
  $("ul").on("click",'.shopping-item-delete',function(event) {
    $(this).closest("li").remove();
  });
}
$(handleDeleteItem);
