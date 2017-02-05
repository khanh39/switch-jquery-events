



$( "button" ).click(function() {
  if ($('body').hasClass('light')) {
        $('body').addClass('dark')
        $('body').removeClass('light')
        $('button').removeClass('on')
        $('button').addClass('off')
        $('h1').text("It's so bright in here!")
  }
  else {
    $('body').addClass('light')
    $('body').removeClass('dark')
    $('button').addClass('on')
    $('button').removeClass('off')
    $('h1').text("Hey, who turned off the lights?")
  }
});
