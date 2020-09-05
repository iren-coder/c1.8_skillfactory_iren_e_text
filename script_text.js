function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector)); 
	return this
}

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

// Создаём метод, который вешает обработчик на элементы
jQuery.prototype.click = function(fn){
	this.each(element => element.addEventListener('click', fn))
	return this
}

// Метод, который изменяет текстовое содержимое выбранных элементов
jQuery.prototype.text = function() {
    this.each(element => element.textContent = "Modified")
    return this
}

// Создаём кнопки и вешаем на каждую из них обработчик
const $ = (e) => new jQuery(e);

$('button').click(e => console.log(e)).text()