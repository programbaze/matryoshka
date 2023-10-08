$(document).on("click",".js--matryoshka-btn",function() {
  $(this).toggleClass('matryoshka__btn_minus');
  $(this).closest('.js--matryoshka-item').children('.js--matryoshka-content').toggleClass('matryoshka__content_hide');
});

