function addItem(item){
  let addItem =
  `<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`
  return addItem
}


function main(){
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const item = $('#shopping-list-entry').val();

    let newItem = addItem(item);
    console.log(newItem);
    $('.shopping-list').append(newItem);
  });
}

$(main);