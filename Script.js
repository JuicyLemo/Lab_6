var bookmarkBtn = document.querySelectorAll('.bookmark'); //объявляев переменную bookmarkBtn и присваиваем ей значение элемента, в который содержит класс bookmark

$( document ).ready(function() { //проверка на готовность страницы
  $('.bookmark').click(function (e) { //при нажатии на элемент с классом bookmark происходит вызов функции
    e.preventDefault(); 
   $(this).toggleClass('added'); //данному элементу, по которому было произведено нажатие добовляет новый класс added
    var parentId = $(this).parent().attr("id"); // объявление переменной parentId которой присваивается родительский атрибут id
    var bookMarks = $('.bookmark-list'); //возвращает первый элемент документа с классом .bookmark-list
    if($(this).hasClass('added')) { //если элемен, по котрому было произведено нажатие уже имеет класс added, то выполняется следующее
      $(this).text("Удалить из закладок"); //тект у данного элемента меняется на "Удалить из закладок"
      var text = $('#' + parentId +' h2').text();
      $('<a>', { href: '#' + parentId, text: text}).appendTo(bookMarks); //в конец блока bookMarks добавляет тег <a> со следующими атрибутами { href: '#' + parentId, text: text}
   } else { //при невыполнении оператора условия, происходит следуещее
     $(this).text("Добавить в закладки"); //текст у данного элемента меняется на "Дабавить в закладки"
      $('a[href="#'+ parentId +'"]').remove(); //происходит удаление тега <a> с атрибутами [href="#'+ parentId +'"]
      }
  });
});

var dialog = document.querySelector('dialog');
document.querySelector('#btn_open').onclick = function() {
  dialog.showModal();
};
document.querySelector('#btn_close').onclick = function() {
  dialog.close();
};


function showArticleF(e) {

  showArticle = e.currentTarget
  let parent = showArticle.parentElement;

  let articleText = parent.getElementsByClassName("article__text")[0]

  articleText.classList.toggle("show");

  if (showArticle.innerText == "Показать статью") {
      showArticle.innerHTML = "Скрыть статью"

  } 
  else {
      showArticle.innerHTML = "Показать статью"
  }

}

let showArticle = document.getElementsByClassName("btn-show")
for (let i = 0; i < showArticle.length; i++) {

  showArticle[i].addEventListener("click", showArticleF)

}

// -------- Лабораторная №5 -------- 

  $(document).ready(function() {
    $(window).scroll (function(){
        if ($(document).scrollTop() > $("header").height()+9)
        {
            $("#menu").addClass("fixed");
        } else {
            $("#menu").removeClass("fixed");
        }
    });
});

$('#checkbox1').click(function(){
	if ($(this).is(':checked')){
    $('#checkbox2').click(function(){
    if ($(this).is(':checked')){
		  $('#btn_send').removeAttr('disabled');
	    } else {
		  $('#btn_send').attr('disabled', 'disabled'); 
    }
    });
  } else {$('#btn_send').attr('disabled', 'disabled'); }
});

