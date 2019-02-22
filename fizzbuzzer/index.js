function fizzbuzz(number){
  if(number % 5 === 0 && number % 3 === 0){
    return 'fizzbuzz';
  }
  if(number % 5 === 0){
    return 'fizz';
  }
  if(number % 3 === 0){
    return 'buzz';
  }
}

function fizbuzzHandler(count){
  const fizzy = [];
  for (let i = 0; i < count; i++) {
    fizzy.push(fizzy[i]);
  }
  return fizzy;
}

function makeHtml(element){
  if(element === 'fizzbuzz'){
    return `<div class="fizz-buzz-item ${element}">
    <span>${element}</span>
    </div>`;
  }
  if(element === 'fizz'){
    return `<div class="fizz-buzz-item ${element}">
    <span>${element}</span>
    </div>`;
  }
  if(element === 'buzz'){
    return `<div class="fizz-buzz-item ${element}">
    <span>${element}</span>
    </div>`;
  }

}

function formSubmit(){
  $('#number-chooser').submit(event => {
    event.preventDefault();
    event.target.reset();
    const limit = $('#number-choice').val();
    const results = fizbuzzHandler(limit);
    const html = results.map(makeHtml);
    $('.js-results').html(html);
  })
}

$(formSubmit);