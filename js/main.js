$(window).scroll(function() { // Отслеживаем начало прокрутки
    let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.
    var height = screen.height;

    if (window.matchMedia("(max-width: 1000px)").matches) {
      if(scrolled > 350 && scrolled < 2450) { // Если высота прокрутки больше 350 - показываем кнопку
            $('.top-but').addClass('active');
        } else {
            $('.top-but').removeClass('active');
        } 
    }


    if(scrolled > 350 && scrolled < 2850) { // Если высота прокрутки больше 350 - показываем кнопку
        $('.top-but').addClass('active');
    } else {
        $('.top-but').removeClass('active');
    } 


    if (window.matchMedia("(max-width: 640px)").matches) {
      if(scrolled > 350 && scrolled < 4650) { // Если высота прокрутки больше 350 - показываем кнопку
            $('.top-but').addClass('active');
        } else {
            $('.top-but').removeClass('active');
        } 
    }


    if (window.matchMedia("(max-width: 350px)").matches) {
      if(scrolled > 350 && scrolled < 4850) { // Если высота прокрутки больше 350 - показываем кнопку
            $('.top-but').addClass('active');
        } else {
            $('.top-but').removeClass('active');
        } 
    }

});



