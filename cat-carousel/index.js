'use strict';

function clicker(){  
  $('.thumbnail').on('click', function(event){
    let imageSource1 = $(this).find('img').attr('src');
    let imageAlt1 = $(this).find('img').attr('alt');
    $('.hero img').attr('src', imageSource1);
    $('.hero img').attr('alt', imageAlt1);
    
  });


  
}

$(clicker);