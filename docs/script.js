function toggleDescription(id, triggerElement) {
  var desc = document.getElementById(id);
  var currentlyActive = document.querySelector('.rp-item.active');

  // Скрываем предыдущее активное описание, если оно есть и отличается от текущего
  if (currentlyActive && currentlyActive !== triggerElement) {
    currentlyActive.classList.remove('active');
    var prevDesc = currentlyActive.nextElementSibling;
    if (prevDesc && prevDesc.classList.contains('rp-description')) {
      prevDesc.style.display = 'none';
    }
  }

  // Переключаем состояние текущего элемента
  if (desc.style.display === "none" || desc.style.display === "") {
    desc.style.display = "block";
    triggerElement.classList.add('active');
  } else {
    desc.style.display = "none";
    triggerElement.classList.remove('active');
  }
}

// Пример добавления обработчиков событий для всех элементов списка
document.querySelectorAll('.rp-item').forEach(function(item) {
  item.addEventListener('click', function() {
    var descriptionId = item.getAttribute('data-description-id'); // Атрибут с ID описания
    toggleDescription(descriptionId, item);
  });
});