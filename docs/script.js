// Функция для переключения описания
function toggleDescription(id, triggerElement) {
  var desc = document.getElementById(id);
  var currentlyActive = document.querySelector('.rp-item.active');

  // Скрываем предыдущее активное описание, если оно есть и отличается от текущего
  if (currentlyActive && currentlyActive !== triggerElement) {
    currentlyActive.classList.remove('active');
    var prevDesc = document.getElementById(currentlyActive.getAttribute('data-description-id'));
    if (prevDesc) {
      prevDesc.style.opacity = 0;
      setTimeout(function() {
        prevDesc.style.display = 'none';
      }, 300);
    }
  }

  // Переключаем состояние текущего элемента
  if (desc.style.display === "none" || desc.style.display === "") {
    desc.style.display = "block";
    setTimeout(function() {
      desc.style.opacity = 1;
    }, 10);
    triggerElement.classList.add('active');
  } else {
    desc.style.opacity = 0;
    setTimeout(function() {
      desc.style.display = "none";
    }, 300);
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

// Функция для получения и отображения данных о онлайн-игроках с сервера Discord
function fetchDiscordWidget() {
  const onlineUsersList = document.querySelector('.online-users-list'); // Получаем контейнер для списка
  onlineUsersList.innerHTML = "<li>Загрузка...</li>"; // Показываем индикатор загрузки

  fetch('https://discord.com/api/guilds/422346423321886730/widget.json')
    .then(response => response.json())
    .then(data => {
      const onlineMembers = data.members.filter(member => member.status === 'online');
      
      if (onlineMembers.length > 0) {
        const onlineList = onlineMembers.map(member => `<li>${member.username}</li>`).join('');
        onlineUsersList.innerHTML = onlineList;
      } else {
        onlineUsersList.innerHTML = "<li>Нет игроков в сети</li>";
      }
    })
    .catch(error => {
      console.error('Ошибка при получении данных: ', error);
      onlineUsersList.innerHTML = "<li>Не удалось загрузить данные о сервере Discord.</li>";
    });
}

// Вызов функции для загрузки виджета при загрузке страницы
document.addEventListener('DOMContentLoaded', fetchDiscordWidget);
