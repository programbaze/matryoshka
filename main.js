$(document).on("click",".js--matryoshka-btn",function() {
  $(this).toggleClass('matryoshka__btn_plus');
  $(this).next('.js--matryoshka-folder').toggleClass('matryoshka__folder_close');
  $(this).closest('.js--matryoshka-item').children('.js--matryoshka-content').toggleClass('matryoshka__content_hide');
});

