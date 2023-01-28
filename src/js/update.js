$(document).ready(function(){

  const dataUpdate = $('.followers-update, .today-update');
  dataUpdate.each((index, element) => {
    if(!$(element).find('data').length) return;
    const value = $(element).find('data').attr('value');
    if(value > 0) 
      $(element).children().css({'color':'var(--lime-green)'});
    else 
      $(element).children().css({'color':'var(--bright-red)'});
  });

});

