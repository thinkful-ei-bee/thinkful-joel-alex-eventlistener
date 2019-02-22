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

function deleteItem(item){

}


function main(){
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const item = $('#shopping-list-entry').val();

    let newItem = addItem(item);
    //console.log(newItem);
    $('.shopping-list').append(newItem);
  });

  $('.shopping-list').on('click', '.shopping-item-delete', (event) => {
    event.currentTarget.closest('li').remove();
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', (event) => {
    // shopping-item__checked
    //console.log(event.currentTarget.closest('.shopping-item'));
    //console.log(event.currentTarget.closest('div').siblings().css('.shopping-item'));
    //console.log(event.currentTarget.closest('li'));
    $(event.currentTarget).closest('div').siblings('span').toggleClass('shopping-item__checked');
  });
}

$(main);