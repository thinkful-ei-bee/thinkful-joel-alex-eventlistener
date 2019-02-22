function fizzbuzz(number){
  if(number % 5 === 0 && number % 3 === 0){
    return 'fizzbuzz';
  }
  else if(number % 5 === 0){
    return 'fizz';
  }
  else if(number % 3 === 0){
    return 'buzz';
  } else {
    return number;
  }
}

function fizbuzzHandler(count){
  const fizzy = [];
  for (let i = 0; i < count; i++) {
    console.log(i)
    fizzy.push(fizzbuzz(i));
  }
  console.log(fizzy);
  return fizzy;
}

function makeHtml(element){
  if(element === 'fizzbuzz'){
    return `<div class="fizz-buzz-item ${element}">
    <span>${element}</span>
    </div>`;
  }
  else if(element === 'fizz'){
    return `<div class="fizz-buzz-item ${element}">
    <span>${element}</span>
    </div>`;
  }
  else if(element === 'buzz'){
    return `<div class="fizz-buzz-item ${element}">
    <span>${element}</span>
    </div>`;
  } else {
    return `<div class="fizz-buzz-item">
    <span>${element}</span>
    </div>`;
  }
}

function formSubmit(){
  $('#number-chooser').submit(event => {
    event.preventDefault();
    
    const limit = $('#number-choice').val();
    //event.target.reset();
    
    const results = fizbuzzHandler(limit);
    const html = results.map(makeHtml);
    $('.js-results').html(html);
  })
}

$(formSubmit);