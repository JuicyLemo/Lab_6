var bookmarkBtn = document.querySelectorAll('.bookmark'); //объявляев переменную bookmarkBtn и присваиваем ей значение элемента, в который содержит класс bookmark

function bookmarkClick(e) {

    e.preventDefault(); //отмена действия браузера 

    var bm = this; //создаем глобальную переменную bm
    bm.classList.toggle('added'); //Если класс added у элемента отсутствует - добавляет, иначе - убирает.

    var parentId = bm.parentElement.id; //parentId получает родителя переменной bm
    var bookMarks = document.querySelector('.bookmark-list'); //возвращает первый элемент документа с классом .bookmark-list

    if(bm.classList.contains('added')) { //условный оператор: если bm содержит класс added то выполняется следующее
      bm.textContent = 'Удалить из закладок'; //присваивает bm текстовое значение в виде строки "Удалить из закладок"
      var headerArticle = document.querySelector('#' + parentId +' h2');
      var linkArticle = document.createElement('a'); //создает элемент a для переменной linkArticle
      linkArticle.textContent = headerArticle.textContent; //присваивает linkArtikle текстовое значение headerArticle
      linkArticle.setAttribute('href', '#' + parentId); //добавляет атрибут href для linkArtikle
      bookMarks.append(linkArticle); //добавляет linkArticle в конце блока bookMarks
    } 
    else { //при невыполнении оператора условия, происходит следуещее
      bm.textContent = 'Добавить в закладки'; //присваивает bm текстовое значение в виде строки "Добавить в закладки"
      var linkRemove = document.querySelector('a[href="#'+ parentId +'"]'); //находит элемент в html документе, со следующим содержанием 'a[href="#'+ parentId +'"]'
      linkRemove.remove(); //удаление linkRemove из дерева 
    }

}

for(let i=0; i<bookmarkBtn.length; i++){
    bookmarkBtn[i].onclick = bookmarkClick; //при нажатии на bookmarkBtn происходит вызов функции bookmarkClick
}

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

