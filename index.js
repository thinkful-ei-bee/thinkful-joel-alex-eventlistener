function clicker(){
  
  
  $('.thumbnails').on('click', 'img', function(event){
    let imageSource1 = $(this).attr('src');
    let imageAlt1 = $(this).attr('alt');
    $('.hero img').attr('src', imageSource1);
    $('.hero img').attr('alt', imageAlt1);
    
  })

  
}

$(clicker);